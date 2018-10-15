/* desired changes:
bugs:
	scrolling web page will cause zoom to occur. Perhaps we should make the user hold shift or something when mouse wheel zooming.
	resizing the window after initial canvas setup will distort cell sizes.
	hitting random after resizing cells forces cell size back to 8 pixes. Should leave cell size alone.
	when cell sizes get very small, they may disappear etc. Make sure 1 pixel cells works as intended in all display modes.

questions / comments:
	let newCellSize = cellSizeInput.value; // wut? why does this work? we magically have access to the html cellSizeInput element without assigning it to anything?

	I'd like an explanation why we are using JSON for saving the state.

enhancements:
	asychronicity of stepstate and drawstate in the run function should be researched and improved. Drawing should happen at the tickrate or framerate: it seems like it's waiting for a new stepstate to complete
	and I don't know why.

	start game flow at bottom and move "global" variables next to relevant functions, if they are only used in one place. Currently global variables have to be at the top because
	drawstate etc is called near the top, before they would otherwise have been defined.

	a badass way of 3 dimensionalizing this would be to have the last states fall away into the background, almost like the live grid was flying toward you.

	grid should be darker/lighter every 5 lines

	We should draw a (optional) background grid for each resize.

    dead cell fading should not use regex per cell. fade should be precalculated and saved to a variable (once per all cells).

    outlines should be made to be one pixel wide, or a configurable preference.

    at a certain cell size, the border should throw away cells or let them go off screen
        
    a tool tip should be used when dragging to indicate where dragging is going to. If it's possible to shift canvas, that would be the thing to do.

    a config button should be added for persistant husks/shadows, killed faded out needs to be audited/enhanced (especially with regards to husks, not sure it does anything)

    the ability to rewind/undo should be a toggle, as it is probably resource intensive.

    it may be good to refactor the cell increase to allow for arbitrary cell sizes, and otherwise follow an array of prechosen values. Current math would not allow reaching max or min from a position
    that could not be divided or multiplied by 2 without exceeding the limit. Also, issues might occur in zoom where it would believe that an increase/decrease will occur when it doesn't once in the increase
	decrease methods.
	
	when adding a cell manually, it should not redraw all cells when it could just draw the one.

	one way we could/could have done the dead cell fade is by having multiple stacked canvases, and clearing the bottom one and bringing it to the top to put fresh cells on, and progressively
	fading canvases as they get lower on the stack. This is almost certianly more efficeint than keeping track of and drawing individual cells.

	all config defaults should load the visible checkbox/slider states.

	it would be neat to have a (probably resource intensive) feature where cells are color coded based on attributes (rule states, for instance), like "going to be killed" (has 3+ neighbors),
	has been alive for more than a generation, etc.

	it may improve efficeincy to cull dead cells from the dead cell list when a live cell enters it's spot, when drawing multiple dead cell generations, but probably not.
    
*/
////// Conway's game of life
console.time("its");

//{ // Um, is that block really all I have to do to scope all my variables.?
let cfg = {
	initialCellSize: 12, // valid cell sizes are: 1,2,4,8,16,32,64
	maximumCellSize: 64,
	minimumCellSize: 1,
	defaultTickRate: 250, // must be either: 4000, 2000, 1000, 500, 250, 125, 63, 31, 16, 8, 4, 2
	get tickRate() {
		return this.defaultTickRate;
	},
	set tickRate(value) {
		tickrateInput.value = Math.round(Math.log2(1000 / value));
		tickrateOutput.value = value + "ms";
		this.defaultTickRate = value;
	},
	cellStyle: {
		bodyColor: 'black',
		outlineColor: 'lightgray',
		// Currently the killedFadeOut system relies on this being an rgb value formated just like this, including whitespace
		// I only changed this for fun, but would prefer it to be clear. Can't remember how.
		outlineEnabled: true,
		outlineThick: 1 // 0 is not a valid input. Currently 1 to 5 is acceptable. Does not vary with cell size. used for husks and live cells.
	},
	gridEnabled: false,
	get gridOffset() {
		return (this.gridEnabled && state.cellSize > 3) ? 1 : 0;
	},
	gridStyle: {
		color: 'rgba(0, 0, 0, 0.568)'
	},
	deadCellType: 1, // 0: no residue, 1: shadows, 2: husks
	shadowColor: 'rgb(204, 204, 0)',
	deadCellTypes: { // this is just a convenience feature
		shadows: 1,
		husks: 2
	},
	killedFadeOut: 5, // number of steps before final erasure. 0 = feature Off.
	opacityAging: true,
	enableUndo: true,
	maxUndo: 20,
	sL: true, // Set default here. Autozoom = true is shiftlock false
	get shiftLock() {
		return this.sL;
	},
	set shiftLock(lock) {
		document.getElementById("autoZoom").checked = !lock;
		this.sL = lock;
	}
};

//// Settings functions

function gridToggle() {
	cfg.gridEnabled = document.getElementById("gridCheckbox").checked;
	drawState();
}

function outlineToggle() {
	cfg.cellStyle.outlineEnabled = document.getElementById("outlineCheckbox").checked; // later this may be better as a slider.
	drawState();
}

function outlineByInput() {
	cfg.cellStyle.outlineThick = Number(outlineInput.value);
	outlineOutput.value = cfg.cellStyle.outlineThick + "px";
	drawState();
}

function shiftLockToggle() {
	cfg.shiftLock = !(document.getElementById("autoZoom").checked);
	if (!cfg.shiftLock)
		drawState();
}

function changeResidueType() {
	cfg.deadCellType = document.querySelector('input[name="residues"]:checked').value;
}

//// A few initial states to show on load:
// let aCoupleDots = [
// 	[10, 10, 11, 11],
// 	[10, 11, 10, 11]
// ];
let aCoupleDots = [
	[0, 1, 1],
	[1, 0, 1]
];
let gosperGliderGun = [
	[14, 14, 15, 15, 24, 24, 24, 25, 26, 27, 25, 26, 27, 29, 30, 30, 30, 31, 29, 28, 34, 34, 34, 35, 35, 35, 36, 36, 38, 38, 38, 38, 48, 49, 49, 48],
	[21, 22, 22, 21, 21, 22, 23, 20, 19, 19, 24, 25, 25, 24, 23, 22, 21, 22, 20, 22, 21, 20, 19, 19, 20, 21, 18, 22, 17, 18, 22, 23, 20, 20, 19, 19]
];

let fourLightSpaceships = [
	[5, 5, 5, 6, 6, 7, 8, 9, 9, 41, 41, 41, 41, 40, 39, 38, 40, 38, 69, 70, 71, 72, 72, 72, 71, 68, 68, 42, 42, 42, 42, 41, 40, 39, 41, 39],
	[26, 27, 28, 29, 26, 26, 26, 27, 29, 4, 5, 6, 7, 4, 4, 5, 8, 8, 27, 27, 27, 27, 28, 29, 30, 28, 30, 52, 53, 54, 55, 55, 55, 54, 51, 51]
];

// includes gosper glider gun, figure 8 oscillator, and pulsar.
let variousInitialStateComments = `#N Various Initial States <br> 
#O NaOH <br>
#C Includes gosper glider gun, figure 8 oscillator, and pulsar.`;
let variousInitialState = [
	[13,  13,  13,  13,  13,  13,  14,  14,  15,  15,  15,  15,  15,  15,  16,  16,  16,  16,  17,  17,  17,  17,  18,  18,  18,  18,  18,  18,  20,  20,  20,  20,  20,  20,  21,  21,  21,  21,  22,  22,  22,  22,  23,  23,  23,  23,  24,  24,  24,  24,  24,  25,  25,  25,  25,  25,  25,  26,  26,  28,  28,  28,  28,  29,  35,  36,  36,  36,  36,  36,  37,  37,  37,  37,  39,  39,  40,  40,  40,  40,  43,  44,  44,  45,  45,  46,  47,  48,  48,  49,  49,  62,  62,  62,  63,  63,  63,  64,  64,  64,  65,  65,  65,  66,  66,  66,  66,  66,  67,  67,  67,  67,  67,  68,  68,  69,  69,  70,  70,  71,  71,  72,  72,  73,  73,  74,  74],
	[41, 42, 43, 47, 48, 49, 21, 22, 21, 22, 39, 44, 46, 51, 39, 44, 46, 51, 39, 44, 46, 51, 41, 42, 43, 47, 48, 49, 41, 42, 43, 47, 48, 49, 39, 44, 46, 51, 39, 44, 46, 51, 39, 44, 46, 51, 19, 20, 22, 24, 25, 41, 42, 43, 47, 48, 49, 19, 25, 20, 21, 23, 24, 22, 25, 19, 20, 21, 26, 27, 18, 22, 25, 26, 17, 23, 17, 18, 22, 23, 20, 19, 21, 19, 21, 21, 21, 18, 21, 19, 20, 7, 8, 9, 7, 8, 9, 7, 8, 9, 10, 11, 12, 10, 11, 12, 38, 39, 10, 11, 12, 36, 41, 35, 42, 34, 43, 34, 43, 34, 43, 35, 42, 36, 41, 38, 39 ]
];

//// our main state object and prototype

let initialSetupComments = variousInitialStateComments;
let initialSetup = variousInitialState;

const StateProtoType = {
	privateCellSize: cfg.initialCellSize,
	xShift: null,
	yShift: null,
	get cellSize() {
		return this.privateCellSize;
	},
	set cellSize(newSize) {
		this.privateCellSize = newSize;
		cellSizeInput.value = newSize;
		cellSizeOutput.value = newSize + 'px';
	},
	get gridWidth() {
		return Math.floor(canvas.width / this.cellSize);
	},
	get gridHeight() {
		return Math.floor(canvas.height / this.cellSize);
	},
	refreshMinMaxes: function() {
		this.xMin = arrayMin(this.x); //Math.min(...this.x);
		this.xMax = arrayMax(this.x); //Math.max(...this.x);
		this.yMin = arrayMin(this.y); //Math.min(...this.y);
		this.yMax = arrayMax(this.y); //Math.max(...this.y);
	},
	printComments: function() {
		document.getElementById('comments').innerHTML = this.comments;
	},
	setComments: function(htmlString) {
		this.comments = htmlString;
		this.printComments();
	},
	init: function(initialMatrix, initialComments) {
		this.setComments(initialComments);
		this.matrix = initialMatrix;
		this.refreshMinMaxes();
		this.resetShiftValues(true);
		this.deadMatrices = [];
		this.cellSize = cfg.initialCellSize;
		this.save();
	},
	get cellsWide() {
		return (this.xMax - this.xMin);
	},
	get cellsTall() {
		return (this.yMax - this.yMin);
	},
	resetShiftValues: function(force = false) {
		if (!cfg.shiftLock || force) {
			this.xShift = Math.floor((this.gridWidth - this.cellsWide) / 2) - this.xMin;
			this.yShift = Math.floor((this.gridHeight - this.cellsTall) / 2) - this.yMin;
		}
	},
	checkResetShiftValues: function() { // reshifts only if cells go out of bounds.
		if ((this.xShift === null && this.yShift === null) ||
			(this.xMin + this.xShift) < 0 ||
			(this.xMax + this.xShift) > this.gridWidth ||
			(this.yMin + this.yShift) < 0 ||
			(this.yMax + this.yShift) > this.gridHeight) {
			this.resetShiftValues();
		}
	},
	get matrix() {
		return [this.x, this.y];
	},
	set matrix(dualArray) {
		this.x = dualArray[0].slice();
		this.y = dualArray[1].slice();
	},
	push: function(x, y) { // adds and xy pair and sets mins and maxes if necessary.
		this.x.push(x);
		this.y.push(y);
		if (x < this.xMin || (this.xMin === null))
			this.xMin = x;
		if (x > this.xMax || (this.xMax === null))
			this.xMax = x;
		if (y < this.yMin || (this.yMin === null))
			this.yMin = y;
		if (y > this.yMax || (this.yMax === null))
			this.yMax = y;
	},
	privateSpliceAtIndex: function(index) { // removes an xy pair at index. This function should only be used by the following "remove" function
		this.x.splice(index, 1);
		this.y.splice(index, 1);
	},
	remove: function(index) { // removes an xy pair at index, and sets mins and maxes if necessary.
		if (this.x[index] === this.xMin) {
			this.privateSpliceAtIndex(index);
			this.xMin = arrayMin(this.x);// Math.min(...this.x);
		} else if (this.x[index] === this.xMax) {
			this.privateSpliceAtIndex(index);
			this.xMax = arrayMax(this.x);  // Math.max(...this.x);
		} else if (this.y[index] === this.yMin) {
			this.privateSpliceAtIndex(index);
			this.yMin = arrayMin(this.y); // Math.min(...this.y);
		} else if (this.y[index] === this.yMax) {
			this.privateSpliceAtIndex(index);
			this.yMax = arrayMax(this.y); // Math.max(...this.y);
		} else {
			this.privateSpliceAtIndex(index);
		}
	},
	get minMaxes() {
		return [this.xMin, this.xMax, this.yMin, this.yMax];
	},
	set minMaxes(args) {
		this.xMin = args[0];
		this.xMax = args[1];
		this.yMin = args[2];
		this.yMax = args[3];
	},
	changeCellSizeTo: function(newSize) {
		this.cellSize = newSize;
		this.resetShiftValues();
	},
	save: function() {
		this.saved = JSON.stringify(this.matrix);
		this.savedXShift = this.xShift;
		this.savedYShift = this.yShift;
		this.savedCellSize = this.cellSize;
	},
	reset: function() {
		this.matrix = JSON.parse(this.saved);
		this.deadMatrices = [];
		this.refreshMinMaxes();
		this.xShift = this.savedXShift;
		this.yShift = this.savedYShift;
		this.cellSize = this.savedCellSize;
	},
	clear: function() {
		this.matrix = [
			[],
			[]
		];
		this.deadMatrices = [];
		this.minMaxes = [undefined, undefined, undefined, undefined];
		this.xShift = 0;
		this.yShift = 0;
	}
};

function State(initialize = false) {
	let s = Object.create(StateProtoType);

	s.comments = ''; // this should be an html string
	s.x = [];
	s.y = [];
	s.deadMatrices = [];
	s.xMin = null;
	s.xMax = null;
	s.yMin = null;
	s.yMax = null;
	s.savedXShift = 0;
	s.savedYShift = 0;
	s.savedCellSize = 8;

	if (initialize)
		s.init(initialSetup, initialSetupComments);

	s.save();
	return s;
}

//// Game functions

/// return random integer
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function arrayMin(arr) {
	var len = arr.length, min = Infinity;
	while (len--) {
	  if (arr[len] < min) {
		min = arr[len];
	  }
	}
	return min;
  };
  
  function arrayMax(arr) {
	var len = arr.length, max = -Infinity;
	while (len--) {
	  if (arr[len] > max) {
		max = arr[len];
	  }
	}
	return max;
  };

/// Return index of first specified pair of values in parallel arrays
// needed for finding isAlive and isTouched because native .includes matches by reference, not values
function paraInd(x, y, xArray, yArray) {
	for (let i = 0; i < xArray.length; i++){
		scottIterateCount++;
		if (xArray[i] === x){
			if (yArray[i] === y)
				return i;
		}
	}
	return -1;
}

function getMouseCoordinate(event, m) {
	const rect = canvas.getBoundingClientRect(); // needs to be here because canvas can move if window is resized or scrolled.
	let x = event.clientX - rect.left; // integer mouse cursor tip offset
	let y = event.clientY - rect.top; // integer mouse cursor tip offset
	m.x = Math.floor(x / state.cellSize);
	m.y = Math.floor(y / state.cellSize);
}

function addCellAtCursorPosition(event) {
	let m = {}; // will contain an x and y cell location
	getMouseCoordinate(event, m);
	let index = paraInd(m.x - state.xShift, m.y - state.yShift, state.x, state.y); // check if cell exists in state matrix
	if (index === -1) { // if not found, add the cell to the state
		state.push(m.x - state.xShift, m.y - state.yShift);
	} else { // if found, delete the cell
		state.remove(index);
	}

	// update the canvas with the new cells.
	drawState();
}

function resetButton() {
	state.reset();
	drawState();
}

function clearButton() {
	state.clear();
	drawState();
}

function loadPattern() {
	state.clear();
	let shiftState = cfg.shiftLock; // save the setting so we can set it back
	cfg.shiftLock = false;
	const newState = new State();
	parseRLE(patternsArray[getRandomInt(patternsArray.length - 1)], newState);
	state.init(newState.matrix);
	state.setComments(newState.comments);
	console.log('loaded matrix', state.matrix); // may as well keep this here. It provides a way to print a saved matrix (to the dev console) so you can export it.
	if (state.cellSize > cfg.initialCellSize)
		zoomTo(cfg.initialCellSize); // internally will draw the state.
	else
		drawState();
	cfg.shiftLock = shiftState;

	state.save();
}

/// randomly fill the canvas with cells
function random() {
	let xResult = [];
	let yResult = [];
	let lesserator = 1; //Math.random() / 2; // randomly reduces the likelihood of creating a cell. Set equal to 1 if you always want an empty border.
	let margin = 6; //getRandomInt(30); // number of cells into the grid to apply the lesserator
	// iterate through each possible cell, and if randomly true, build the new state arrays.
	for (let i = 0; i < state.gridWidth; i++) {
		for (let e = 0; e < state.gridHeight; e++) {
			let modifier = (i < margin || i >= (state.gridWidth - margin) || e < margin || e >= (state.gridHeight - margin)) ? lesserator : 0; // only apply lesserator if within the margin
			if ((Math.random() + modifier) < 0.5) {
				xResult.push(i - state.xShift);
				yResult.push(e - state.yShift);
			}
		}
	}

	// save new state and draw it.
	state.init([xResult, yResult], `#N Ordered Chaos <br>
	#O Maths <br>
	#C ... ... ...`);
	drawState();
}

function checkReduceCellSize(decreased = false, zoom = false, targetSize = null) {
	if (state.cellSize != 1) {
		if (zoom || (!cfg.shiftLock && (state.cellsWide >= state.gridWidth || state.cellsTall >= state.gridHeight))) {
			// if we cannot fit the entire pattern inside the grid with one square to spare, increase grid size
			let newCellSize = (zoom) ? (targetSize != null) ? targetSize : state.cellSize - 1 : state.cellSize / 2;
			if (newCellSize < 2)
				newCellSize = 1;
			if (newCellSize >= cfg.minimumCellSize) {
				state.changeCellSizeTo(newCellSize);
				if (targetSize != null)
					return checkReduceCellSize(true);
				else
					return true;
			}
		}
	}
	return decreased;
}

function checkIncreaseCellSize(increased = false, zoom = false, targetSize = null) {
	if (zoom || (!cfg.shiftLock && (state.cellsWide <= ((Math.floor((canvas.width / (state.cellSize)) / 2) - 10)) && state.cellsTall <= ((Math.floor((canvas.height / (state.cellSize)) / 2) - 10))))) {
		// if there is enough space to increase the cell size and have a border with at least 5 squares, decrease cell size.
		let newCellSize = (zoom) ? (targetSize != null) ? targetSize : state.cellSize + 1 : state.cellSize * 2;
		if (newCellSize <= cfg.maximumCellSize) {
			state.changeCellSizeTo(newCellSize);
			if (targetSize != null)
				return checkIncreaseCellSize(true);
			else
				return true;
		}
	}
	return increased;
}

function cellSizeByInput() {
	let newCellSize = Number(cellSizeInput.value);
	cfg.shiftLock = true;
	zoomTo(newCellSize);
}

function zoomTo(newCellSize) {
	const rect = canvas.getBoundingClientRect(); // needs to be here because canvas can move if window is resized or scrolled.
	let event = {
		clientX: rect.left + canvas.width / 2, // figure out middle X coordinate and put it here
		clientY: rect.top + canvas.height / 2 // figure out middle Y coordinate and put it here
	};
	if (state.cellSize > newCellSize)
		event.deltaY = 100; // zoom out
	else
		event.deltaY = -100; // zoom in

	zoom(event, newCellSize);
}

function zoom(event, targetSize = null) {
	cfg.shiftLock = true;
	let zoomIn = (event.deltaY < 0) ? true : false; // true for zoom in, false for zoom out

	if (zoomIn && (state.cellSize < cfg.maximumCellSize)) { // zoom in
		let m = {}; // will contain an x and y cell location relative to canvas grid (unshifted)
		getMouseCoordinate(event, m);
		checkIncreaseCellSize(false, true, targetSize);
		let xShiftChange = Math.floor(m.x - (state.gridWidth / 2)); // shift the left edge of the visible grid to the mouse position, minus half the new grid's width (centering the mouse position)
		let yShiftChange = Math.floor(m.y - (state.gridHeight / 2));
		state.xShift = state.xShift - xShiftChange;
		state.yShift = state.yShift - yShiftChange;
		drawState();
	} else if (!zoomIn && state.cellSize > cfg.minimumCellSize) { // zoom out
		let oldGridWidth = state.gridWidth;
		let oldGridHeight = state.gridHeight;
		checkReduceCellSize(false, true, targetSize);
		let newGridWidth = state.gridWidth;
		let newGridHeight = state.gridHeight;
		let xShiftChange = Math.floor((newGridWidth - oldGridWidth) / 2); // shift the left edge of the visible grid by the increased number of cells to the left.
		let yShiftChange = Math.floor((newGridHeight - oldGridHeight) / 2); // shift the top edge of the visible grid by the increased number of cells to the top.
		state.xShift = state.xShift + xShiftChange;
		state.yShift = state.yShift + yShiftChange;
		drawState();
	}
}

const dragStartPosition = {};
const dragIntermediatePosition = {};
let dragging = false;
let listen = false;

function activateDrag(event) {
	if (!dragging && listen) { // check if we need to activate dragging
		getMouseCoordinate(event, dragIntermediatePosition);
		if (dragStartPosition.x != dragIntermediatePosition.x || dragStartPosition.y != dragIntermediatePosition.y) { // we are dragging when our mouse has moved one cell away from the mousedown location
			dragging = true;
			listen = false; // stop checking, we know we are in a drag event
		}
	}
}

function mouseDown(event) {
	getMouseCoordinate(event, dragStartPosition);
	listen = true; // start checking for a drag event
}

function mouseUp(event) {
	if (dragging)
		dragEnd(event); // we are dragging, so shift cells
	else
		addCellAtCursorPosition(event); // we are not dragging, so add cell at mouse pos
	dragging = false;
	listen = false;
}

function dragEnd(event) {
	cfg.shiftLock = true;
	const dragEndPosition = {};
	getMouseCoordinate(event, dragEndPosition);
	// get cell # difference between drag start pos and end pos, this will be the change in shift value.
	dragEndPosition.x = dragStartPosition.x - dragEndPosition.x;
	dragEndPosition.y = dragStartPosition.y - dragEndPosition.y;
	state.xShift = state.xShift - dragEndPosition.x;
	state.yShift = state.yShift - dragEndPosition.y;
	drawState();
}

// for drawing background grid
let lastCellSize = null; // we need this to know when we need to redraw the background grid.
let gridOnLastState = false; // check if we need to clear the grid, when toggling.
function drawGrid() {
	if (cfg.gridEnabled) {
		if (state.cellSize <= 3) { // don't draw a grid for tiny cells
			if (lastCellSize != null) {
				lastCellSize = null;
				ctx0.clearRect(0, 0, canvas.width, canvas.height);
			}
		} else if (lastCellSize != state.cellSize || gridOnLastState === false) {
			ctx0.clearRect(0, 0, canvas.width, canvas.height);
			lastCellSize = state.cellSize;
			ctx0.beginPath();
			ctx0.strokeStyle = cfg.gridStyle.color;
			let canvasCellsWide = Math.floor(canvas.width / state.cellSize);
			let canvasCellsTall = Math.floor(canvas.height / state.cellSize);
			for (let i = 1; i <= canvasCellsWide; i++) {
				let x = state.cellSize * i - 0.5;
				ctx0.moveTo(x, 0);
				ctx0.lineTo(x, canvas.height);
			}
			for (let i = 1; i <= canvasCellsTall; i++) {
				let y = state.cellSize * i - 0.5;
				ctx0.moveTo(0, y);
				ctx0.lineTo(canvas.width, y);
			}
			ctx0.stroke();
		}
		gridOnLastState = true;
	} else if (gridOnLastState) {
		gridOnLastState = false;
		ctx0.clearRect(0, 0, canvas.width, canvas.height);
	}
}

function drawWholeCell(x, y) {
	let size = state.cellSize;
	ctx.fillRect(x * size, y * size, size - cfg.gridOffset, size - cfg.gridOffset); // when a grid is present, the right and lower side of each cell have a 1 pixel line.
}

function drawInnerCell(x, y) { // 1 pixel border on all sides -> does not yet account for border thickness; for now I'm not using, may use later if for some reason I don't want this to draw over borders
	let size = state.cellSize;
	ctx.fillRect(x * size + 1, y * size + 1, size - 1 - (cfg.gridOffset * 2), size - 1 - (cfg.gridOffset * 2));
}

function drawCellBorder(x, y) {
	let size = state.cellSize;
	let outLineW = cfg.cellStyle.outlineThick;
	ctx.lineWidth = ((state.cellSize + 2) > (outLineW * 2)) ? outLineW : 1; // prevent outline from being larger than cell, or filling in cell.
	ctx.beginPath();
	if (cfg.gridEnabled) {
		ctx.rect(x * size + outLineW / 2, y * size + outLineW / 2, size - outLineW - 1, size - outLineW - 1);
	} else {
		ctx.rect(x * size + outLineW / 2, y * size + outLineW / 2, size - outLineW + 1, size - outLineW + 1);
	}
	ctx.stroke();
}

function drawHusk(x, y, generation) {
	//// various intesities of yellow
	switch (generation) {
		case 0:
			ctx.strokeStyle = "rgba(244, 204, 0, 1";
			break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			ctx.strokeStyle = "rgba(204, 204, 0, .4)";
			break;
		default:
			ctx.strokeStyle = cfg.cellStyle.outlineColor;
	}
	//// green, yellow and red. looks ok
	// switch (generation) {
	// 	case 0:
	// 		ctx.strokeStyle = "rgba(160, 255, 60, 1)";
	// 		break;
	// 	case 1:
	// 		ctx.strokeStyle = "rgba(255, 200, 0, .9)";
	// 		break;
	// 	case 2:
	// 	case 3:
	// 	case 4:
	// 	case 5:
	// 		ctx.strokeStyle = "rgba(210, 0, 0, .2)";
	// 		break;
	// 	default:
	// }
	drawCellBorder(x, y);
}

function drawShadow(x, y, generation) { // this choice of color/style is not necessarily my preference, it's decent, but i chose it for convenience.
	// this section needs to be changed in order to get better efficiency.
	if (cfg.opacityAging) {
		let opacity = ((state.deadMatrices.length - generation) / state.deadMatrices.length).toFixed(2); // equal fade spread across the aging matrices.
		//Numerator above 1.0 keeps opacity higher for longer
		//e.g. lightblue i.e. 'rgb(173, 216, 230)' m = 0 converts to 'rgba(173, 216, 230, 0.13)'
		let opaColor = cfg.shadowColor.replace(/rgb\((.+)\)/, "rgba($1, " + opacity + ")");
		ctx.fillStyle = opaColor;
	} else
		ctx.fillStyle = cfg.shadowColor;
	drawWholeCell(x, y);
}


function drawAllDeadCells() {
	for (let m = 0; m < state.deadMatrices.length; m++) { // number of matrices = cfg.killedFadeOut (limited when matrix is added in stepState)
		for (let i = 0; i < state.deadMatrices[m][0].length; i++) { // matrix[0] = deadXs, matrix[1] = deadYs
			if (cfg.deadCellType == cfg.deadCellTypes.shadows)
				drawShadow(state.deadMatrices[m][0][i] + state.xShift, state.deadMatrices[m][1][i] + state.yShift, m); // passing the x, y and m = the index of the matrix in deadMatrices to control opacity
			if (cfg.deadCellType == cfg.deadCellTypes.husks)
				drawHusk(state.deadMatrices[m][0][i] + state.xShift, state.deadMatrices[m][1][i] + state.yShift, m); // passing the x, y and m = the index of the matrix in deadMatrices to control opacity
		}
	}
}

function drawLiveCell(x, y) {
	ctx.fillStyle = cfg.cellStyle.bodyColor;
	if (state.cellSize > 4 && cfg.cellStyle.outlineEnabled) { // for large cells, use a bordered cell.
		//drawInnerCell(x,y); // inner cell needs to be drawn first, because this does not account for border thickness.
		drawWholeCell(x, y);
		ctx.strokeStyle = cfg.cellStyle.outlineColor;
		drawCellBorder(x, y);
	} else { // for small cells, fill entire cell with body color (no outline, grid space)
		drawWholeCell(x, y);
	}
}

function drawState() {
	// draw on a paused canvas; we don't want to refresh the screen for every line or pixel.
	window.requestAnimationFrame(() => {
		// erase last canvas/cells.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// set new cell size and shift value
		if (!cfg.shiftLock) {
			if (state.cellSize != 1) // don't bother shifting 1 pixel cells, we've probably auto zoomed out to here.
			{
				state.checkResetShiftValues();
			}
			if (!checkReduceCellSize())
				checkIncreaseCellSize();
		}

		// draw background grid
		drawGrid();

		// draw cells killed since last stepState (cells may repeat for multiple generations)
		// because dead cells last for multiple generations, they may be drawn in the same cell as a live cell / or already drawn dead cell,
		// for that reason they must be drawn first so they can be drawn over by live cells.
		if (cfg.deadCellType > 0)
			drawAllDeadCells();

		for (let i = 0; i < state.x.length; i++) // no matter the coordinates, always draw starting at 0,0 in the ++ quadrant. Values are shifted into the ++ quadrant using the xShift, yShift            
			drawLiveCell(state.x[i] + state.xShift, state.y[i] + state.yShift);
	});
}

function tickrateByInput() {
	let newTickrate = Math.round(1000 / Math.pow(2, Number(tickrateInput.value)));
	cfg.tickRate = newTickrate;
}

function stepRecursively() {
	if (running) {
		//console.timeEnd("newstep");
		stepState();
		window.setTimeout(stepRecursively, cfg.tickRate); // this line allows the tickrate to be re-evaluated.
		//console.time("newstep");
	}
}

function refreshTime() {
	if (cfg.tickRate < 16.66)
		return 16.66; // 60 frames per second
	else
		return cfg.tickRate;
}

function drawRecursively() {
	if (running) {
		//console.timeEnd("draw");
		drawState();
		window.setTimeout(drawRecursively, refreshTime()); // this line allows the tickrate to be re-evaluated.
		//console.time("draw");
	}
}

/// infinitely run the interval stepper until user clicks stop
function run() {
	running = !running; // used to toggle on or off interval stepper
	let button = document.getElementById("runButton"); // we need this to change button text

	if (running) // start stepping interval
	{
		button.innerText = "Stop";
		//console.time("newstep");
		stepRecursively();
		//console.time("draw");
		drawRecursively();
	} else
		button.innerText = "Run";
}

function stepOnce() {
	stepState();
	drawState();
}

/// given the text contents of an RLE file: output State containing comment, Xs[] and Ys[]
function parseRLE(input, newState) { // http://www.conwaylife.com/wiki/Run_Length_Encoded
	let lines = input.split(/\s*\r?\n\s*/); // array of lines with leading and trailing whitespace removed
	let commentLines = lines.filter(line => /^(#|x)/i.test(line));

	function concatAndLinks(accum, curr) {
		return accum.concat("<br>", curr.replace(/(http:\/\/|www\.)(conwaylife\.com\S*)/, '<a href="http://www.$2">www.$2</a>'));
	}
	newState.comments = commentLines.reduce(concatAndLinks);
	let width;
	let height;
	commentLines[commentLines.length - 1].replace(/x\s*=\s*(\d+).*y\s*=\s*(\d+)/, (m, p1, p2) => { // grab the pattern's dimensions to calc offset
		// p1 parentheses capture the number, p2 caps the letter, unused m is the whole match 
		width = p1;
		height = p2;
		// return m; Not actually using replace functionality here, just needed access to p1, p2
	});
	let codedLines = lines.filter(line => !/^(#|x)/i.test(line)); // keep everything except comment lines and the header line
	let x = 0;
	let y = 0;
	for (let i = 0; i < codedLines.length; i++) { // loop through the lines pushing live cells and skipping dead ones
		codedLines[i].replace(/(\d*)(b|o|\$|!)/gi, (m, p1, p2) => { // b = dead, o = alive, $ end of line, ! end of pattern
			if (!p1) // p1 is the repeat number
				p1 = 1;
			while (p1-- > 0) {
				switch (p2) {
					case 'o': // if it's alive, push it and move on
						newState.push(x, y);
						x++;
						break;
					case 'b': // if it's dead, do nothing but move on
						x++;
						break;
					case '$': // at end of line, goto beginning of next line
						y++;
						x = 0;
						break;
					case '!': // '!' cool, got to the end without errors
						break;
					default:
						alert("RLE contains non-standard characters:" + p2);
				}
			}
		});
	}
}

function stepBack() {
	running = false;
	if (oldStates.length > 0) {
		let lastState = oldStates.pop();
		state.init(lastState.matrix, lastState.comments);
		state.xShift = lastState.xShift;
		state.yShift = lastState.yShift;
		drawState();
	}
}

function scottsStepper(){
	// console.time("step");
	// if (cfg.enableUndo) {
	// 	if (oldStates.length > cfg.maxUndo) {
	// 		oldStates.shift();
	// 	}
	// 	let oldState = new State();
	// 	oldState.init(state.matrix, state.comments);
	// 	oldState.xShift = state.xShift;
	// 	oldState.yShift = state.yShift;
	// 	oldStates.push(oldState);
	// }

	let touched = [
		[], // [x]
		[], // [y]
		[], // [n] , n = times touched
		[]  // [a] , a = alive (bool)
	];
	let killedMatrix = [
		[],
		[]
	];
	// determine which cells are neighbors to the specified cell, and increment their 'touched' counter
	function touch(xo, yo) {
		for (let y = yo - 1; y <= yo + 1; y++) {
			for (let x = xo - 1; x <= xo + 1; x++) {
				let index = paraInd(x, y, touched[0], touched[1]);
				if (index === -1) { // if it's not in the touched list yet, add it
					touched[0].push(x);
					touched[1].push(y);
					if (x !== xo || y !== yo) { // if it's a neighbor initialize with one touch and not alive
						touched[2].push(1);
						touched[3].push(false);
					} // this isn't super DRY, but It was confusing when I tried to combine them
					else { // if it's this cell itself, initialize with 0 touches and alive true
						touched[2].push(0);
						touched[3].push(true);
					}
				} else
				if (x !== xo || y !== yo)
					touched[2][index] += 1; // if it's a neighbor, increment the counter
				else
					touched[3][index] = true; // if it's the cell itself, make sure it's marked alive
			}
		}
	}

	for (let i = 0; i < state.x.length; i++) {
		touch(state.x[i], state.y[i]); // increment counter for each adjacent living cell
	}

	const newState = new State();
	for (let i = 0; i < touched[0].length; i++) { // check the counter to see how many adjacent cells are living
		let x = touched[0][i];
		let y = touched[1][i];
		//let alive = -1 !== paraInd(x, y, state.x, state.y);
		let alive = touched[3][i];
		if (!alive && touched[2][i] === 3) { // if it's dead and has the right number of living neighbors, bring it to life
			newState.push(x, y);
		} else if (alive && 2 <= touched[2][i] && touched[2][i] <= 3) { // if it's alive and has the right number of living neighbors, keep it alive
			newState.push(x, y);
		} else if (alive) { // anything not explicitly added to newState by above rules will be dead, because each step initializes the aliveList to an empty array
			killedMatrix[0].push(x);
			killedMatrix[1].push(y);


		}
	}
	
	// if (cfg.deadCellType) {
	// 	state.deadMatrices.unshift(killedMatrix);
	// 	if (state.deadMatrices.length > cfg.killedFadeOut)
	// 		state.deadMatrices.pop();
	// }
	// state.matrix = newState.matrix;
	// state.minMaxes = newState.minMaxes;

	// if (steps > 1) {
	// 	return stepState(--steps); // repeat
	// }

	// console.timeEnd("step");
}

function noahStepper1(){
	let results = []; // [[x,y,c,a]]
	// fill results matrix with current state cells, adding alive attribute
	for (let i = 0, len = state.x.length; i < len; i ++ ){
		results.push([state.x[i], state.y[i], 0, 1])
	}
	// fill results matrix with non-alive "touch" pairs
	for (let i = 0, len = state.x.length; i < len; i ++ ){		
		// 4 sides
		results.push([state.x[i] - 1, state.y[i], 0, 0])
		results.push([state.x[i] + 1, state.y[i], 0, 0])
		results.push([state.x[i], state.y[i] - 1, 0, 0])
		results.push([state.x[i], state.y[i] + 1, 0, 0])
		// 4 corners
		results.push([state.x[i] - 1, state.y[i] + 1, 0, 0])
		results.push([state.x[i] - 1, state.y[i] - 1, 0, 0])
		results.push([state.x[i] + 1, state.y[i] + 1, 0, 0])
		results.push([state.x[i] + 1, state.y[i] - 1, 0, 0])
	}
	// for each pair in results, combine matching pairs, remove matches as they are found so they are counted only once.
	function packArray1(startingIndex) { // perform operations on an array, and shift items to remove elements so they won't be looked at again.
		let srcIndex = startingIndex + 1;
		let dstIndex = startingIndex + 1;
		let xMatch = results[startingIndex][0];
		let yMatch = results[startingIndex][1];
		var arrayLength = results.length ;
		//console.log('length', arrayLength);
		do {
			var elem = results[srcIndex];
			if (elem[0] === xMatch && elem[1] === yMatch) {
				//console.log('match!');
				results[startingIndex][2]++; // add a count for a match
			} else{
				if (srcIndex != dstIndex)
					results[dstIndex] = elem ;
				dstIndex++; // shift array so this item isn't counted again.
			}
			srcIndex++;
		} while (srcIndex != arrayLength);
		 //dstIndex--;
		 //console.log('newlength',dstIndex);
		 results.length = dstIndex > 0 ? dstIndex : 0 ;
	 }
	//console.log('initialarray', state.matrix);
	//console.log('Initial results',...results);
	for (let i = 0; i < (results.length - 1); i ++ ){ // results.length must be re-evaluated every time because it changes in the function called.
		results[i][2] = 1; // initialize count by including self.
		//console.log('checking', results[i]);
		packArray1(i); // count other touches.
		//console.log('results',...results);
	}
	// build new state matrix: all results with c = 3, or c = 4 && alive are saved, else if alive saved in killed matrix.
	let newState = new State();
	let killedMatrix = [[],[]];
	for (let i = 0, len = results.length; i < len; i++){
		elem = results[i];
		if (elem[2] === 3 || (elem[2] === 4 && elem[3] === 1)){
			newState.push(elem[0], elem[1]);
		} else if (elem[3] === 1){
			//console.log('pushing', elem[0], elem[1]);
			killedMatrix[0].push(elem[0]);
			killedMatrix[1].push(elem[1]);
		}
	}
	// //console.log('killedmatrix',killedMatrix[0],killedMatrix[1]);
	// if (cfg.deadCellType) {
	// 	state.deadMatrices.unshift(killedMatrix);
	// 	if (state.deadMatrices.length > cfg.killedFadeOut)
	// 		state.deadMatrices.pop();
	// }
	// //console.log('new matrix', newState.matrix);
	// state.matrix = newState.matrix;
	// state.minMaxes = newState.minMaxes;
}

function noahStepper2(){
	console.time("noahEnhancedStartStep");

	let results = [[],[],[]]; // [[x],[y],[c]]
	//let newState = new State();
	let newState = [[],[]];
	let killedMatrix = [[],[]];
	// fill results matrix with current state cells, adding alive attribute
	results[0] = state.x.slice();
	results[1] = state.y.slice()
	const xLen = state.x.length;

	// fill results matrix with surrounding "touched" pairs
	let xref = results[0]; // x array reference
	let yref = results[1]; // y array reference
	for (let i = 0; i < xLen; i ++ ){
		let x = xref[i]; let y = yref[i];
		xref.push(x); yref.push(y - 1); // top middle
		xref.push(x); yref.push(y + 1); // bottom middle
		for (let p = -1; p <= 1; p++){
			xref.push(x - 1); yref.push(y + p); // left side
			xref.push(x + 1); yref.push(y + p); // right side
		}		
	}

	function checkWasAliveCell(i){
		let count = results[2][i];
		if (count === 3 || (count === 4)){
			//newState.push(xref[i], yref[i]);
			newState[0].push(xref[i]);
			newState[1].push(yref[i]);
		} else {
			killedMatrix[0].push(xref[i]);
			killedMatrix[1].push(yref[i]);
		}
	}

	function checkWasDeadCell(i){
		let count = results[2][i];
		if (count === 3){
			//newState.push(xref[i], yref[i]);
			newState[0].push(xref[i]);
			newState[1].push(yref[i]);
		}
	}
	

	// for each pair in results, combine matching pairs, remove matches as they are found so they are counted only once.
	function packArray1(startingIndex, length) { // perform operations on an array, and shift items to remove elements so they won't be looked at again.
		let srcIndex = xLen; // skip all alive cells, this function is only for alive cells.
		let dstIndex = srcIndex;
		let xMatch = xref[startingIndex];
		let yMatch = yref[startingIndex];

		// console.timeEnd("noahEnhancedStep");
		// console.time("noahEnhancedStep");
		
		do {
			let xTest = xref[srcIndex];
			noahIterateCount++;

			if (xTest === xMatch && yref[srcIndex] === yMatch) {
				results[2][startingIndex]++; // add a count for a match
			} else{
				if (srcIndex != dstIndex){
					xref[dstIndex] = xTest;
					yref[dstIndex] = yref[srcIndex];
				}
				dstIndex++; // shift array so this item isn't counted again.
			}
			srcIndex++;
		} while (srcIndex != length);
		xref.length = dstIndex > 0 ? dstIndex : 0 ; // remove ending array elements, now duplicates due to the shift.
		checkWasAliveCell(startingIndex);
	}
	function packArray2(startingIndex, length) { // perform operations on an array, and shift items to remove elements so they won't be looked at again.
		let srcIndex = startingIndex + 1; // skip all previously scanned
		let dstIndex = srcIndex;
		let xMatch = xref[startingIndex];
		let yMatch = yref[startingIndex];

		// console.timeEnd("noahEnhancedStep");
		// console.time("noahEnhancedStep");

		do {
			let xTest = xref[srcIndex];
			noahIterateCount++;

			if (xTest === xMatch && yref[srcIndex] === yMatch) {
				results[2][startingIndex]++; // add a count for a match
			} else{
				if (srcIndex != dstIndex){
					xref[dstIndex] = xTest;
					yref[dstIndex] = yref[srcIndex];
				}
				dstIndex++; // shift array so this item isn't counted again.
			}
			srcIndex++;
		} while (srcIndex != length);
		xref.length = dstIndex > 0 ? dstIndex : 0 ; // remove ending array elements, now duplicates due to the shift.
		checkWasDeadCell(startingIndex);
	}

	let iterationPerIndex = 0;
	let noahIterateCount = 0;
	let reducedLength = xref.length;

	// an enhancement would be to break the checking loop if we are too far from the current location, which would require an ordered array (it is already partially ordered, so perhaps this isn't a big prob)
	// for instance, if we are 2x and 2y away from the square we are checking, perhaps we don't need to check further for touches.
	// maybe during "touch" incrementer, if it is 5, throw it away immediately?
	// * sort entire matrix (pre-touch) into arrays at a X location (representing layers). only check against above and below layer. These layers could be sorted for ignorring Y of too great.
	// * these layers could also be used to divide the grid into smaller sections to ignore distant sections.

	
	// console.time("noahEnhancedAliveStep");
	// console.time("noahEnhancedStep");

	for (let i = 0; i < xLen; i ++ ){ // this loop is only for checking alive cells.
		results[2][i] = 1; // initialize count by including self.
		packArray1(i, reducedLength); // count other touches.
		reducedLength = xref.length; // update new length
	}

	// console.timeEnd("noahEnhancedAliveStep");
	// console.time("noahEnhancedDeadStep");
	// console.time("noahEnhancedStep");

	for (let i = xLen; i < (reducedLength - 1); i ++ ){ // results.length must be re-evaluated every time, as it is on this line, because it changes in the function called.
		results[2][i] = 1; // initialize count by including self.
		packArray2(i, reducedLength); // count other touches.
		reducedLength = xref.length; // update new length
	}

	//console.timeEnd("noahEnhancedDeadStep");

	console.timeEnd("noahEnhancedStartStep");

	console.log('noahs iterate count (10^5)', noahIterateCount / 100000);
	//console.log('endingLength', reducedLength);	

	state.matrix = newState;
	//state.minMaxes = newState.minMaxes;
	state.refreshMinMaxes;

	if (cfg.deadCellType) {
		state.deadMatrices.unshift(killedMatrix);
		if (state.deadMatrices.length > cfg.killedFadeOut)
			state.deadMatrices.pop();
	}
}

let scottIterateCount = 0;

/// given x,y's of currently living cells: apply game rules and output new x,y's of living cells
function stepState(steps = 1) {
	
	// if (cfg.enableUndo) {
	// 	if (oldStates.length > cfg.maxUndo) {
	// 		oldStates.shift();
	// 	}
	// 	let oldState = new State();
	// 	oldState.init(state.matrix, state.comments);
	// 	oldState.xShift = state.xShift;
	// 	oldState.yShift = state.yShift;
	// 	oldStates.push(oldState);
	// }


	// console.time("noahMultiObjectstep");
	// noahStepper1();
	// console.timeEnd("noahMultiObjectstep");

	console.time("scottStep");
	scottIterateCount = 0;
	scottsStepper();
	console.timeEnd("scottStep");
	console.log('scotts iteration count(10^5)',scottIterateCount / 100000)
	noahStepper2();

	console.log('                    ');

	console.time("scottStep");
	scottIterateCount = 0;
	scottsStepper();
	console.timeEnd("scottStep");
	console.log('scotts iteration count(10^5)',scottIterateCount / 100000)
	noahStepper2();

	console.log('                    ');

	if (steps > 1) {
		return stepState(--steps); // repeat
	}
}


//// Setup page elements and listeners
const canvas = document.getElementById("gameCanvas");
const gameBackgroundCanvas = document.getElementById('gameBackgroundCanvas');

function fitToContainer(canvas) {
	// Make it visually fill the positioned parent
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	// ...then set the internal size to match
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
}
fitToContainer(canvas);
fitToContainer(gameBackgroundCanvas);

let ctx = canvas.getContext("2d");
let ctx0 = gameBackgroundCanvas.getContext("2d");
canvas.addEventListener("mousemove", activateDrag);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);
canvas.addEventListener("wheel", zoom);

// globals that don't fit in anywhere else. Must be declared before starting gameflow.
let oldStates = [];
let running = false;

//// Put the defaults in the GUI.
// cell size, set during state initialization
// tick rate
cfg.tickRate = cfg.defaultTickRate;
// cell outlines enabled
document.getElementById("outlineCheckbox").checked = cfg.cellStyle.outlineEnabled;
// husk / cell outline width
outlineInput.value = cfg.cellStyle.outlineThick;
outlineOutput.value = cfg.cellStyle.outlineThick + "px";
// residue type
document.residueRadio.residues[cfg.deadCellType].checked = true;
// zoom checkbox
document.getElementById("autoZoom").checked = !cfg.sL;
// grid enabled, rest of setting will be processed in drawstate.
document.getElementById("gridCheckbox").checked = cfg.gridEnabled;


//// Game flow starts here...
let state = new State(true);
drawState();
//// ... User interaction occurs via listeners
//// Game flow ends here.
//} // Um, is that block really all I have to do to scope all my variables.?

//console.timeEnd("its");