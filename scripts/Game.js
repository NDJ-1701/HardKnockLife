/* desired changes:
bugs:
	scrolling web page will cause zoom to occur. Perhaps we should make the user hold shift or something when mouse wheel zooming.
	resizing the window after initial canvas setup will distort cell sizes.
	when cell sizes get very small, they may disappear etc. Make sure 1 pixel cells works as intended in all display modes.
	add a block for stepstate when there are no cells; test with very few cells, like 1 or 2.

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
	
	husks/shadow should only change the ctx style once for each generation change, instead of once per cell.

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
	minimumCellSize: .25,
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
	deadCellType: 0, // 0: no residue, 1: shadows, 2: husks
	shadowColor: 'rgb(204, 204, 0)',
	deadCellTypes: { // this is just a convenience feature
		shadows: 1,
		husks: 2
	},
	killedFadeOut: 5, // number of steps before final erasure. 0 = feature Off.
	opacityAging: true,
	enableUndo: true,
	maxUndo: 20,
	sL: false, // Set default here. Autozoom = true is shiftlock false
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
let aHorizontalLine = [
	[0, 0, 0],
	[0, 1, 2]	
];
let aVerticalLine = [
	[0, 1, 2],
	[0, 0, 0]	
];
let broken = [[0, 0, 2],[0, 1, 2]];
let someXvalues = [
	[-2, 3, 1, 2, 0, 5, -1, -20, -20, 12],
	[ 0, 0, 0, 0, 0, 0,  0, -20, 0, 0]
];
let someContiguousXvalues = [
	[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let gosperGliderGun = [
	[14, 14, 15, 15, 24, 24, 24, 25, 26, 27, 25, 26, 27, 29, 30, 30, 30, 31, 29, 28, 34, 34, 34, 35, 35, 35, 36, 36, 38, 38, 38, 38, 48, 49, 49, 48],
	[21, 22, 22, 21, 21, 22, 23, 20, 19, 19, 24, 25, 25, 24, 23, 22, 21, 22, 20, 22, 21, 20, 19, 19, 20, 21, 18, 22, 17, 18, 22, 23, 20, 20, 19, 19]
];

let fourLightSpaceships = [
	[5, 5, 5, 6, 6, 7, 8, 9, 9, 41, 41, 41, 41, 40, 39, 38, 40, 38, 69, 70, 71, 72, 72, 72, 71, 68, 68, 42, 42, 42, 42, 41, 40, 39, 41, 39],
	[26, 27, 28, 29, 26, 26, 26, 27, 29, 4, 5, 6, 7, 4, 4, 5, 8, 8, 27, 27, 27, 27, 28, 29, 30, 28, 30, 52, 53, 54, 55, 55, 55, 54, 51, 51]
];

let benchMark1 = [
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

// includes gosper glider gun, figure 8 oscillator, and pulsar.
let variousInitialStateComments = `#N Various Initial States <br> 
#O NaOH <br>
#C Includes gosper glider gun, figure 8 oscillator, and pulsar.`;
let variousInitialState = [
	[14, 14, 15, 15, 24, 24, 26, 28, 28, 24, 24, 28, 28, 24, 26, 29, 35, 37, 37, 36, 36, 39, 40, 37, 40, 36, 36, 36, 37, 40, 39, 40, 44, 44, 48, 46, 47, 48, 45, 43, 45, 49, 49, 16, 15, 17, 18, 18, 18, 15, 16, 17, 13, 13, 13, 21, 23, 22, 20, 20, 20, 21, 22, 23, 25, 25, 25, 15, 17, 16, 18, 18, 18, 13, 13, 13, 15, 16, 17, 22, 20, 21, 23, 20, 20, 25, 25, 25, 21, 22, 23, 69, 70, 68, 71, 72, 67, 66, 73, 74, 66, 74, 67, 73, 68, 72, 69, 70, 71, 63, 62, 63, 62, 64, 64, 62, 63, 64, 65, 66, 67, 65, 65, 67, 66, 67, 66],
	[21, 22, 22, 21, 20, 19, 19, 20, 21, 22, 24, 23, 24, 25, 25, 22, 25, 25, 26, 27, 26, 17, 18, 18, 17, 19, 20, 21, 22, 22, 23, 23, 19, 21, 18, 21, 21, 21, 19, 20, 21, 19, 20, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 43, 42, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 42, 43, 46, 46, 46, 48, 47, 49, 47, 49, 48, 51, 51, 51, 46, 47, 46, 46, 49, 48, 47, 48, 49, 51, 51, 51, 34, 34, 35, 34, 35, 36, 38, 36, 38, 39, 39, 41, 41, 42, 42, 43, 43, 43, 7, 8, 8, 7, 7, 8, 9, 9, 9, 10, 10, 10, 11, 12, 11, 12, 12, 11]
];

//// our main state object and prototype

let initialSetupComments = variousInitialStateComments;
let initialSetup = benchMark1;

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
		//this.cellSize = cfg.initialCellSize;
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
	console.log('cell clicked at ', m.x - state.xShift, m.y - state.yShift);
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

function saveButton() {
	state.save();
}

function loadPattern(index = false) {
	state.clear();
	let shiftState = cfg.shiftLock; // save the setting so we can set it back
	cfg.shiftLock = false;
	const newState = new State();
	if (index) {
		parseRLE(patternsArray[index], newState);
	}
	else {
	parseRLE(patternsArray[getRandomInt(patternsArray.length - 2)], newState);
	}
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
	//cfg.shiftLock = false;
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

	state.matrix = [xResult, yResult];
	state.setComments(`#N Ordered Chaos <br>
	#O Maths <br>
	#C ... ... ...`);
	state.refreshMinMaxes();
	
	drawState();
}

function checkReduceCellSize(decreased = false, zoom = false, targetSize = null) {
	if (state.cellSize != cfg.minimumCellSize) {
		if (zoom || (!cfg.shiftLock && (state.cellsWide >= state.gridWidth || state.cellsTall >= state.gridHeight))) {
			// if we cannot fit the entire pattern inside the grid with one square to spare, increase grid size
			let newCellSize = (zoom) ? (targetSize != null) ? targetSize : (state.cellSize > 1)? state.cellSize - 1 : state.cellSize - 0.25 : state.cellSize / 2;

			//sanity checks
			if (newCellSize > 1)
				newCellSize = Math.round(newCellSize);
			else if (newCellSize < (cfg.minimumCellSize + 0.25) || newCellSize < cfg.minimumCellSize)
				newCellSize = cfg.minimumCellSize;

			if (newCellSize >= cfg.minimumCellSize) {
				state.changeCellSizeTo(newCellSize);
				if (targetSize == null)
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

			//sanity checks
			if (newCellSize > 1)
				newCellSize = Math.round(newCellSize);

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
			if (state.cellSize != cfg.minimumCellSize) // don't bother shifting 1 pixel cells, we've probably auto zoomed out to here.
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

		for (let i = 0; i < state.x.length; i++){ // no matter the coordinates, always draw starting at 0,0 in the ++ quadrant. Values are shifted into the ++ quadrant using the xShift, yShift{
			drawLiveCell(state.x[i] + state.xShift, state.y[i] + state.yShift);
		}

	});
}

function tickrateByInput() {
	let newTickrate = Math.round(1000 / Math.pow(2, Number(tickrateInput.value)));
	cfg.tickRate = newTickrate;
}

function stepRecursively() {
	if (running) {
		//console.timeEnd("newstep");
		if (stepDone)
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
		//if (stepDone)	
			//drawState();
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

		//drawRecursively();
	} else
		button.innerText = "Run";
}

function stepOnce() {
	stepState();
	//setTimeout(drawState, 0); // add it to the end of the stack.... um this doesn't work
	//drawState();
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
		console.log('old state', oldStates.length);
		let lastState = oldStates.pop();
		//state.init(lastState.matrix, lastState.comments);
		//state.xShift = lastState.xShift;
		//state.yShift = lastState.yShift;
		state = lastState;
		console.log('went back');
		drawState();
	}
}

function maxStepper2(steps = 1, r){

	r.tick('update undo');

	if (cfg.enableUndo) {
		if (oldStates.length > cfg.maxUndo) {
			oldStates.shift();
		}
		let oldState = new State();
		oldState.init(state.matrix, state.comments);
		oldState.xShift = state.xShift;
		oldState.yShift = state.yShift;
		oldStates.push(oldState);
	}

	r.tick('initial setup');

	let touched = {}; //[[x],[y],[n],[a]]  n = times touched, a = alive(bool)
	let killedMatrix = [
		[],
		[]
	];
	const newState = new State();

	r.tick('compute touches')
	
	for (let i = 0; i < state.x.length; i++) {
		let xo = state.x[i];
		let yo = state.y[i];
		for (let y = yo - 1; y <= yo + 1; y++) {
			for (let x = xo - 1; x <= xo + 1; x++) {
				let key = 1000000*x + y;//`${x},${y}`;//x +','+ y;  // int math is faster then string concat, but this will break if there are more than 10000 columns
				if (touched[key] === undefined) { 
					touched[key] = {x: x, y: y, n: 0, a: false};
				}
				if (x === xo && y === yo) {
					touched[key].a = true;
				}
				else {
					touched[key].n++;
				}
			}
		}
	}

	r.tick("compute results");
	 
	for (let cell in touched) {
		if (!touched[cell].a && touched[cell].n === 3) {
			newState.push(touched[cell].x, touched[cell].y);
		}
		else if (touched[cell].a && 2 <= touched[cell].n && touched[cell].n <= 3) {
			newState.push(touched[cell].x, touched[cell].y);
		}
			else if (touched[cell].a) {
				killedMatrix[0].push(touched[cell].x);
				killedMatrix[1].push(touched[cell].y);
			}
	}
	
	if (cfg.deadCellType) {
		r.tick('update dead cells');
		state.deadMatrices.unshift(killedMatrix);
		if (state.deadMatrices.length > cfg.killedFadeOut)
			state.deadMatrices.pop();
	}

	// setting these props individually isn't really taking advantage of the multiple state objects
	// we should probably be setting the properties of newstate in here and then replacing the entire state object
	// indeed failing to re-initialize the whole state means the shadows arent getting cleared on "reset" button or "clear" button etc.

	r.tick('update state');

	state.matrix = newState.matrix;
	state.minMaxes = newState.minMaxes;

	if (steps > 1) {
		return maxStepper2(--steps, r); // repeat
	}
}

function maxStepperNoahMod(steps = 1, r){

	r.tick('update undo');

	if (cfg.enableUndo) {
		if (oldStates.length > cfg.maxUndo) {
			oldStates.shift();
		}
		let oldState = new State();
		oldState.init(state.matrix, state.comments);
		oldState.xShift = state.xShift;
		oldState.yShift = state.yShift;
		oldStates.push(oldState);
	}

	r.tick('initial setup');

	let touched = {}; //[[x],[y],[n],[a]]  n = times touched, a = alive(bool)
	let killedMatrix = [
		[],
		[]
	];
	const newState = new State();

	function toucherDead (x, y){
		let key = 1000000*x + y;
		if (touched[key] === undefined) { 
			touched[key] = {x: x, y: y, n: 1};
		}
		else {
			touched[key].n++;
		}
	}

	function toucherAlive (x, y){
		let key = 1000000*x + y;
		if (touched[key] === undefined) { 
			touched[key] = {x: x, y: y, n: 1, a: true};
		}
		else {
			touched[key].n++;
			touched[key].a = true;
		}
	}

	r.tick('compute touches')
	
	for (let i = 0, len = state.x.length; i < len; i++) {
		let xo = state.x[i];
		let yo = state.y[i];

		toucherAlive(xo, yo);

		toucherDead(xo, yo - 1); // top middle
		toucherDead(xo, yo + 1); // bottom middle
		for (let y = yo - 1; y <= yo + 1; y++) {
			toucherDead(xo - 1, y); // left side
			toucherDead(xo + 1, y); // right side
		}
	}

	r.tick('compute results');
	 
	for (let cell in touched) {
		if (touched[cell].n === 3){
			newState.push(touched[cell].x, touched[cell].y);
		} else if (touched[cell].a){
			if (touched[cell].n === 4){
				newState.push(touched[cell].x, touched[cell].y);
			}
			else {
				killedMatrix[0].push(touched[cell].x);
				killedMatrix[1].push(touched[cell].y);	
			}
		}
	}
	
	if (cfg.deadCellType) {
		r.tick('update dead cells');
		state.deadMatrices.unshift(killedMatrix);
		if (state.deadMatrices.length > cfg.killedFadeOut)
			state.deadMatrices.pop();
	}

	// setting these props individually isn't really taking advantage of the multiple state objects
	// we should probably be setting the properties of newstate in here and then replacing the entire state object
	// indeed failing to re-initialize the whole state means the shadows arent getting cleared on "reset" button or "clear" button etc.

	r.tick('update state');

	state.matrix = newState.matrix;
	state.minMaxes = newState.minMaxes;

	if (steps > 1) {
		return maxStepperNoahMod(--steps, r); // repeat
	}
}


// for performance auditing. Create a new Perf(), place a perf.tick with a string naming the step at the beginning of the section
// you want to audit. Place another perftick every step of the way; subsequent ticks will end the last step's
// timer and start a new named timer. When you want to end a section and generate a report, call perfResults();
// Compatible with recursion.
const perfProto = {
	tick: function (name) {
		this.perfMap.push([performance.now(), name]);
	},
	printResults: function() {
		let perfMap = this.perfMap;
		this.tick("end point");
		let total = perfMap[perfMap.length - 1][0] - perfMap[0][0]; // total time taken.

		// util functions
		function isTwoDigits(test){
			return (test/10 > 1);
		}
		function addZeroes(num) {
			var num = String(num);
			// Convert input string to a number and store as a variable.
			var value = Number(num);      
			// Split the input string into two arrays containing integers/decimals
			var res = num.split(".");     
			// If there is no decimal point or only one decimal place found.
			if(res.length == 1 || res[1].length < 3) { 
				// Set the number to two decimal places
				value = value.toFixed(3);
			}
			// Return updated or original number.
			return value;
		}
		//

		let originalOrder = []; // save original order of ticks
		let accumulator = {}; // get accumulated milliseconds per named item
		let totalTime = 0;
		let recursions = 0;
		for (let i = 0, len = perfMap.length - 1; i < len; i++){ // notice we are skipping last element, because that represents the end time of the last tick, not a new tick.
			originalOrder.push(perfMap[i][1]);
			if (accumulator[perfMap[i][1]] === undefined)
				accumulator[perfMap[i][1]] = 0;
			let stepTime = perfMap[i + 1][0] - perfMap[i][0]
			accumulator[perfMap[i][1]] += stepTime;
			totalTime += stepTime;
			if (perfMap[i][1] === perfMap[0][1]) // will give bad results if ticks are given identical name to first tick. Only detects full recursion from first tick.
				recursions++;
		}

		// remove duplicates from key order so we don't print results more than once (some ticks loop when others don't).
		originalOrder = originalOrder.filter((item, pos) => {
			return originalOrder.indexOf(item) == pos;
		});

		console.log("--==== Performance Report ====-- " + this.reportName);
		iKeysLength = originalOrder.length;
		for (let i = 0; i < iKeysLength; i++) {
			let stepName = originalOrder[i];
			let stepLengthMS = accumulator[stepName];			
			stepLengthPercent = (Math.round(stepLengthMS/total * 100 * 100) / 100);
			stepLengthPercent = addZeroes(stepLengthPercent);
			if (!isTwoDigits(stepLengthPercent)) {
				stepLengthPercent = " " + stepLengthPercent;
			}
			console.log("    " + stepLengthPercent + " % " + stepName + "  (" + stepLengthMS.toFixed(2) + "ms)");
		}
		console.log("  --- Total Time: " + totalTime.toFixed(3) + "ms");
		if (recursions > 1)
			console.log("  --- Average recursion time: " + (totalTime/recursions).toFixed(3) + "ms  (" + recursions + " rounds)");
		console.log("--============================--");
		// clear map so we can time different sections at a time, if we choose to reuse this perf.
		perfMap = [];
	}
};
function Perf (reportName = ""){
	// performance report
	let pr = Object.create(perfProto);
	pr.perfMap = [];
	pr.reportName = reportName;
	return pr;
}
/// end performance auditing tools.


function stackStateSlice(sliceOb, r){
	let miniStack = sliceOb[0];
	let ignores = sliceOb[1][0];
	let ignoreType = sliceOb[1][1]; 
	//console.log('ministack json', JSON.stringify(miniStack));

	// if lower ignore, and lower is not contiguous with a ignore+1 in ministack, then get rid of lower because it's trash.
	// if upper ignore, and upper is not contiguous with an ignore-1 in ministack, then get rid of upper
	// if middle, then apply both conditions.

	// if (ignoreType != 0){
	// 	console.log('removing deletions');
	// 	if (ignoreType == 1){ // remove upper num & +1
	// 		console.log('removing lower', ignores[0], ignores[0] + 1);
	// 		delete results[ignores[0]];
	// 		delete results[ignores[0] + 1];
	// 	}
	// 	else if (ignoreType == 3){ // remove lower num & -1
	// 		console.log('removing upper', ignores[0], ignores[0] - 1);
	// 		delete results[ignores[0]];
	// 		delete results[ignores[0] - 1];
	// 	}
	// 	else if (ignoreType == 2) { // remove both
	// 		console.log('removing upper and lower');
	// 		delete results[ignores[0]];
	// 		delete results[ignores[0] - 1];
	// 		delete results[ignores[1]];
	// 		delete results[ignores[1] + 1];
	// 	}
	// }
	// else
	// 	console.log('no deletions');

	// the extra ignores should probably be added where they are initially created.
	// console.log('ignores before:', ...ignores);
	// if (ignoreType != 0){
	// 	console.log('computing deletions');
	// 	if (ignoreType == 1){ // remove upper num & +1
	// 		ignores.push(ignores[0] + 1);
	// 	}
	// 	else if (ignoreType == 3){ // remove lower num & -1
	// 		ignores.push(ignores[0] - 1);
	// 	}
	// 	else if (ignoreType == 2) { // remove both
	// 		ignores.push(ignores[0] - 1);
	// 		ignores.push(ignores[1] + 1);
	// 	}
	// }
	// else
	// 	console.log('no deletions');
	// console.log('ignores after', ...ignores);

	// an optimization could be to only deliver ministacks where there are 2 row gaps between x values. No upper/lower duplicate removal would be necessary.
	
	function layerResult(yarr){
		let top = yarr[0];
		let middle = yarr[1];
		let bottom = yarr[2];

		let touched = {};

		function touchDead(key){
			if (touched[key] === undefined) { 
				touched[key] = {n: 1};
			}
			else {
				touched[key].n++;
			}
		}
		function touchAlive(key){
			if (touched[key] === undefined) { 
				touched[key] = {n: 1, a: true};
			}
			else {
				touched[key].n++;
				touched[key].a = true;
			}
		}

		for (let i = 0, len = top.length; i < len; i++) {
			let key = top[i];
			touchDead(key);
			touchDead(key - 1);
			touchDead(key + 1);
		}
		for (let i = 0, len = bottom.length; i < len; i++) {
			let key = bottom[i];
			touchDead(key);
			touchDead(key - 1);
			touchDead(key + 1);
		}
		for (let i = 0, len = middle.length; i < len; i++) {
			let key = middle[i];
			touchAlive(key);
			touchDead(key - 1);
			touchDead(key + 1);
		}

		return touched;
	}

	r.tick('setup slice');

	// add empty arrays to end of stack to make iteration easier. This means we're limited to some number of trillions of rows before breaking.
	miniStack[-100000000] = [];
	miniStack[-99999999] = [];
	let xKeys = Object.keys(miniStack); // refresh now that we have two new elements. Is this costly? Should we have just modified the xKeys array?
	xKeys.sort(function(a, b){return b - a}); // sort because object properties are in a particular order but not a helpful one.

	let results = []; // array of arrays
	let lenX = xKeys.length;
	// setup x vars
	let xTop = 100000000; // doesn't matter, will immediately be overwritten, and is empty anyway.
	let xMiddle = 100000000;
	let xBottom = 100000000; 
	// setup y arrays
	let yTop = [];
	let yMiddle = [];
	let yBottom = [];
	let yt;
	let yb;

	r.tick('process slice layers');

	for (let i = 0; i < lenX; i++) {
		// shift x numbers
		xTop = xMiddle;
		xMiddle = xBottom;
		xBottom = Number(xKeys[i]); // this will always be lowest
		// shift y layers
		yTop = yMiddle;
		yMiddle = yBottom;
		yBottom = miniStack[xBottom];

		
		if (xTop != xMiddle + 1) {
			if (xTop - 2 === xMiddle) { // "between" condition
				results.push([xTop - 1, layerResult([yTop, [], yMiddle])]);
			}				
			else {// bottom / top condition
				results.push([xMiddle + 1, layerResult([[], [], yMiddle])]);

				if (yTop.length != 0)
					results.push([xTop - 1, layerResult([yTop, [], []])]);
			}
		}

		// do a middle layer
		// if the layer ontop of us is 1 away, use it, else use empty
		yt = (xMiddle + 1 === xTop)? yTop : [];
		// if the layer below us is 1 away, use it else use empty
		yb = (xMiddle - 1 === xBottom)? yBottom : [];
		results.push([xMiddle, layerResult([yt, yMiddle, yb])]);
	}

	r.tick('compute results');

    // const newState = new State();
    let newState = [[],[]];
	let killedMatrix = [[],[]];
	let x; // our x value
	for (let i = 0, len = results.length; i < len; i++) {
		//console.log('processing results property', results[i]);
		x = results[i][0];
		if (ignores.includes(x)) {
			continue;
		}
		yResults = results[i][1];
		for (let yKey in yResults) {
			y = Number(yKey);
			if (yResults[yKey].n === 3 || (yResults[yKey].n === 4 && yResults[yKey].a)){
                newState[0].push(x);
				newState[1].push(y);
				//newState.push(x,y);
			} else if (yResults[yKey].a) {
				killedMatrix[0].push(x);
				killedMatrix[1].push(y);
			}
		}
	}
	
	r.tick('return results');

    return [newState, killedMatrix];
}


let stepDone = true;
let numSlices = 4;
let workers = [];
if (window.Worker) {
	for (let i = 0; i <= numSlices; i++) {
		var v = new Worker('scripts/stackStateThread.js');
		workers.push(v);
	}
}

function stackState(steps, r){
	stepDone = false;
	r.tick('update undo');

	if (cfg.enableUndo) {
		if (oldStates.length > cfg.maxUndo) {
			oldStates.shift();
		}
		let oldState = new State();
		oldState.init(state.matrix, state.comments);
		oldState.xShift = state.xShift;
		oldState.yShift = state.yShift;
		oldStates.push(oldState);
	}

	r.tick("build stack");

	let stack = {};	
	for (let i = 0, len = state.x.length; i < len; i++) {
		let xo = state.x[i];
		let yo = state.y[i];
		if (stack[xo] === undefined) { 
			stack[xo] = [yo];
		}
		else {
			stack[xo].push(yo)
		}
	}

	r.tick('get and sort keys');

	let xKeys1 = Object.keys(stack); // refresh now that we have two new elements. Is this costly? Should we have just modified the xKeys array?
	xKeys1.sort(function(a, b){return a - b}); // sort because object properties are in a particular order but not a helpful one.

	if (true /*window.Worker*/) { // Check if Browser supports the Worker api. (chrome doesn't allow local web worker file access, test with firefox or use a local "blob")
		r.tick('sort stack');

		function getSlice(lowerBound, upperBound, ignoreType){ // ignoretype: 0 = none, 1 = beginning, 2 = middle, 3 = end
			let slicedOb = {};
			for (i = lowerBound; i <= upperBound; i++){
				slicedOb[xKeys1[i]] = stack[xKeys1[i]]; // might want to slice here, except I don't think I actually want to copy, I want a reference.
			}
			let ignores = [];

			// if lower ignore, and lower is not contiguous with a ignore+1 in ministack, then get rid of lower because it's trash.
			// if upper ignore, and upper is not contiguous with an ignore-1 in ministack, then get rid of upper
			// if middle, then apply both conditions.
			if (ignoreType != 0){
				if (ignoreType === 1 || ignoreType === 2){ // first slice or middle slice
					ignores.push(Number(xKeys1[upperBound]));
					ignores.push(Number(xKeys1[upperBound]) + 1);
					
				}
				if (ignoreType === 3 || ignoreType === 2){ //last slice or middle slice
					ignores.push(Number(xKeys1[lowerBound]));
					ignores.push(Number(xKeys1[lowerBound]) - 1);
				}
			}
			return [slicedOb,[ignores, ignoreType]];
		}

		r.tick('setup slices');

		//let numSlices = 4; // in future would be a config value. -> 1 results in "bottom is undefined"
		if (navigator.hardwareConcurrency){
			let numCores = navigator.hardwareConcurrency;
			if (numSlices > numCores) // don't allow more threads than we really have available.
				numSlices = (numCores - 1);
		}
		let kLen = xKeys1.length;
		if (kLen < 15) // don't bother dividing simple tasks.
			numSlices = 1;
		let sliceCount = Math.round(kLen / numSlices);

		let slices = []; // will contain [sliceobj, [nums to ignore]]
		// in order to get correct results, must include edge layers to each slice. This will create duplicate live cell results.

		if (numSlices == 1){ // if only one slice
			slices.push(getSlice(0, kLen - 1, 0));
		}
		else {
			let bottom = 0;
			let upperIndex;
			for (let i = 0; i < kLen; i++) {
				upperIndex = i + sliceCount - 1;

				if (upperIndex >= kLen - 1) { //we've reached the end 
					//slices.push(getSlice(bottom, kLen - 1, 3));
					slices.push(getSlice(bottom - 1, kLen - 1, 3)); // one less from bottom because we need that layer for bottom layer results
					break;
				}
				
				if (Number(xKeys1[upperIndex]) + 1 == Number(xKeys1[upperIndex + 1]) && Number(xKeys1[upperIndex + 1]) + 1 == Number(xKeys1[upperIndex + 2])) {
					if (bottom === 0) { // first slice
						//slices.push(getSlice(bottom, upperIndex, 1));
						slices.push(getSlice(bottom, upperIndex + 1, 1));
					}						
					else { // middle slice
						//slices.push(getSlice(bottom, upperIndex, 2));
						slices.push(getSlice(bottom - 1, upperIndex + 1, 2));
					}					
					i = upperIndex;
					bottom = i + 1;
				}
			}
		}

		r.tick('message to workers');

		function createWorker(slice, i) {
			return new Promise(function(resolve, reject) {
				//var v = new Worker('scripts/stackStateThread.js');

				let v = workers[i];
				v.postMessage(slice);
				v.onmessage = function(event){
						resolve(event.data);
					};
				v.onerror = (event) => {
						reject(event);
					};

				//resolve(stackStateSlice(slice,r));
			});
		}

		let promises = [];
		//let data = [];
		// "error handling shoud be provisioned with background workers" -> https://stackoverflow.com/questions/41423905/wait-for-several-web-workers-to-finish
		for (let i = 0; i < slices.length; i++){
			// do worker task with slice.
			promises.push(createWorker(slices[i],i));
			//data.push(stackStateSlice(slices[i],r));
		}
		
		Promise.all(promises)
			.then(function(data) {
				r.tick('process worker results');
				// `data` has the results, compute the final solution
				// data will be an array arrays of arrays [[live matrix, killed matrix],...
				let resultLiveMatrix = [[],[]];
				let resultDeadMatrix = [[],[]];
				for (let i = 0; i < data.length; i++) {
					resultLiveMatrix[0] = resultLiveMatrix[0].concat(data[i][0][0]);
					resultLiveMatrix[1] = resultLiveMatrix[1].concat(data[i][0][1]);
					resultDeadMatrix[0] = resultDeadMatrix[0].concat(data[i][1][0]);
					resultDeadMatrix[1] = resultDeadMatrix[1].concat(data[i][1][1]);
				}

				if (cfg.deadCellType) {
					state.deadMatrices.unshift(resultDeadMatrix);
					if (state.deadMatrices.length > cfg.killedFadeOut)
						state.deadMatrices.pop();
				}

				r.tick('update state');

				state.matrix = resultLiveMatrix;
				state.refreshMinMaxes();
				
				stepDone = true;
				//r.printResults();
				drawState();////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////where drawing happens should be revisited.

			})
			.catch(function(error) {
				console.log('Web worker returned error: '+ error.message, '\n\t    Error on line: ' + error.lineno );
				console.log(error);
			});
	}


	
	// function layerResult(yarr){
	// 	let top = yarr[0];
	// 	let middle = yarr[1];
	// 	let bottom = yarr[2];

	// 	let touched = {};

	// 	function touchDead(key){
	// 		if (touched[key] === undefined) { 
	// 			touched[key] = {n: 1};
	// 		}
	// 		else {
	// 			touched[key].n++;
	// 		}
	// 	}
	// 	function touchAlive(key){
	// 		if (touched[key] === undefined) { 
	// 			touched[key] = {n: 1, a: true};
	// 		}
	// 		else {
	// 			touched[key].n++;
	// 			touched[key].a = true;
	// 		}
	// 	}

	// 	for (let i = 0, len = top.length; i < len; i++) {
	// 		let key = top[i];
	// 		touchDead(key);
	// 		touchDead(key - 1);
	// 		touchDead(key + 1);
	// 	}
	// 	for (let i = 0, len = bottom.length; i < len; i++) {
	// 		let key = bottom[i];
	// 		touchDead(key);
	// 		touchDead(key - 1);
	// 		touchDead(key + 1);
	// 	}
	// 	for (let i = 0, len = middle.length; i < len; i++) {
	// 		let key = middle[i];
	// 		touchAlive(key);
	// 		touchDead(key - 1);
	// 		touchDead(key + 1);
	// 	}
	// 	return touched;
	// }

	// r.tick("setup initial variables");

	// // add empty arrays to end of stack to make iteration easier. This means we're limited to some number of trillions of rows before breaking.
	// stack[-100000000] = [];
	// stack[-99999999] = [];
	// let xKeys = Object.keys(stack); // refresh now that we have two new elements. Is this costly? Should we have just modified the xKeys array?
	// xKeys.sort(function(a, b){return b - a}); // sort because object properties are in a particular order but not a helpful one.

	// let results = []; // array of arrays
	// let lenX = xKeys.length;
	// // setup x vars
	// let xTop = 100000000; // doesn't matter, will immediately be overwritten, and is empty anyway.
	// let xMiddle = 100000000;
	// let xBottom = 100000000; 
	// // setup y arrays
	// let yTop = [];
	// let yMiddle = [];
	// let yBottom = [];
	// let yt;
	// let yb;

	// r.tick('compute layers');

	// for (let i = 0; i < lenX; i++) {
	// 	// shift x numbers
	// 	xTop = xMiddle;
	// 	xMiddle = xBottom;
	// 	xBottom = Number(xKeys[i]); // this will always be lowest
	// 	// shift y layers
	// 	yTop = yMiddle;
	// 	yMiddle = yBottom;
	// 	yBottom = stack[xBottom];

		
	// 	if (xTop != xMiddle + 1) {
	// 		if (xTop - 2 === xMiddle) { // "between" condition
	// 			results.push([xTop - 1, layerResult([yTop, [], yMiddle])]);
	// 		}				
	// 		else {// bottom / top condition
	// 			results.push([xMiddle + 1, layerResult([[], [], yMiddle])]);

	// 			if (yTop.length != 0)
	// 				results.push([xTop - 1, layerResult([yTop, [], []])]);
	// 		}
	// 	}

	// 	// do a middle layer
	// 	// if the layer ontop of us is 1 away, use it, else use empty
	// 	yt = (xMiddle + 1 === xTop)? yTop : [];
	// 	// if the layer below us is 1 away, use it else use empty
	// 	yb = (xMiddle - 1 === xBottom)? yBottom : [];
	// 	results.push([xMiddle, layerResult([yt, yMiddle, yb])]);
	// }

	// r.tick("compute results");

	// const newState = new State();
	// let killedMatrix = [[],[]];
	// let x; // our x value
	// for (let i = 0, len = results.length; i < len; i++) {
	// 	x = results[i][0];
	// 	yResults = results[i][1];
	// 	for (let yKey in yResults) {
			
	// 		y = Number(yKey);
	// 		if (yResults[yKey].n === 3 || (yResults[yKey].n === 4 && yResults[yKey].a)){
	// 			newState.push(x,y);
	// 		} else if (yResults[yKey].a) {
	// 			killedMatrix[0].push(x);
	// 			killedMatrix[1].push(y);
	// 		}
	// 	}
	// }
	
	

	// if (cfg.deadCellType) {
	// 	r.tick('update dead cells');
	// 	state.deadMatrices.unshift(killedMatrix);
	// 	if (state.deadMatrices.length > cfg.killedFadeOut)
	// 		state.deadMatrices.pop();
	// }

	// r.tick("update state");

	// state.matrix = newState.matrix;
	// state.minMaxes = newState.minMaxes;

	if (steps > 1) {
		return stackState(--steps, r); // repeat
	}
}

function maxStepperOneBigObject(steps = 1, r){

	r.tick('update undo');

	if (cfg.enableUndo) {
		if (oldStates.length > cfg.maxUndo) {
			oldStates.shift();
		}
		let oldState = new State();
		oldState.init(state.matrix, state.comments);
		oldState.xShift = state.xShift;
		oldState.yShift = state.yShift;
		oldStates.push(oldState);
	}

	r.tick("build object");

	let results = {}; //{x:{y:,n:,a:]  n = times touched, a = alive(bool)

	// get references to arrays to make typing easier
	let xX = state.x;
	let yY = state.y;

	let i = 0;
	let length = state.x.length; // cache this value, don't evaluate it every time we loop
	// add all alive cells without checks, we know they are new and unique --... except not anymore now that x is separate from Y
	while (i < length) {
		if (!results[xX[i]]){
			results[xX[i]] = {
				[yY[i]]: {
					n: 1,
					a: true
				}
			}
		}
		else {
			results[xX[i]][yY[i]] = {
				n: 1,
				a: true
			}
		}
		i++;
	}

	function count (x, y){ // to make things easier to read.
		if (!results[x]){
			results[x] = {
				[y]: {
					n: 1
				}
			}
		} else {
			if (!results[x][y]){
				results[x][y] = {
					n: 1
				}
			}
			else {
				results[x][y].n++;
			}
		}
	}

	r.tick('compute touches')
	
	for (i = 0; i < length; i++) {
		// add left side
		let x = xX[i];
		let y = yY[i];

		count(x,y-1); // top middle
		count(x,y+1); // bottom middle
		for (let p = -1; p <= 1; p++){
			count( x - 1, y + p); // left side
			count( x + 1, y + p); // right side
		}
	} 

	r.tick("compute results");

	const newState = new State();
	let killedMatrix = [[],[]];
	let x;
	let y;
	for (xKey in results){
		x = Number(xKey);
		let allX = results[xKey];
		for (yKey in allX){
			y = Number(yKey);
			if (allX[yKey].n === 3 || (allX[yKey].n === 4 && allX[yKey].a)){
				newState.push(x,y);
			} else if (allX[yKey].a) {
				killedMatrix[0].push(x);
				killedMatrix[1].push(y);
			}
		}
	}


	
	if (cfg.deadCellType) {
		r.tick('update dead cells');
		state.deadMatrices.unshift(killedMatrix);
		if (state.deadMatrices.length > cfg.killedFadeOut)
			state.deadMatrices.pop();
	}

	r.tick('update state');

	state.matrix = newState.matrix;
	state.minMaxes = newState.minMaxes;

	if (steps > 1) {
		return maxStepperOneBigObject(--steps, r); // repeat
	}
}

let debugReport = new Perf("debugreport");

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

	// state.save(); let report2 = new Perf("maxStepper2") 
	// maxStepper2(50, report2);
	// report2.printResults();

	// state.reset();

	// let report3 = new Perf("maxStepperNoahMod")
	// maxStepperNoahMod(50, report3);
	// report3.printResults();

	// state.reset();

	//steps = 10;

	let report1 = new Perf("stackState");
	stackState(steps, report1);

	//report1.tick('min maxes');
	//report1.printResults();

	// state.reset();

	// let report4 = new Perf("OneBigObject");
	// maxStepperOneBigObject(steps, report4);
	// report4.printResults();

	// state.reset();

	// if (window.Worker) { // Check if Browser supports the Worker api.
	// 	let ssThread = new Worker('scripts/stackStateThread.js');
	// 	ssThread.postMessage(state.matrix)

	// 	ssThread.onmessage = (e) => { // I'm guessing this is asynchronous (end of call stack)
	// 		let matrix = e.data;
	// 		state.matrix = matrix;
	// 		state.refreshMinMaxes();
	// 		drawState();
	// 	}
	// }


	//stackState(steps, debugReport);

	// if (steps > 1) {
	// 	return stepState(--steps); // repeat
	// }
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