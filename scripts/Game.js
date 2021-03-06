/* desired changes:
bugs:
    none known

enhancements:
    dead cell fading should not use regex per cell. fade should be precalculated and saved to a variable (once per all cells).

    outlines should be made to be one pixel wide, or a configurable preference.

    at a certain cell size, the border should throw away cells or let them go off screen
        
    a tool tip should be used when dragging to indicate where dragging is going to. If it's possible to shift canvas, that would be the thing to do.

    a config button should be added for persistant husks/shadows, killed faded out needs to be audited/enhanced (especially with regards to husks, not sure it does anything)

    the ability to rewind/undo should be a toggle, as it is probably resource intensive.

    it may be good to refactor the cell increase to allow for arbitrary cell sizes, and otherwise follow an array of prechosen values. Current math would not allow reaching max or min from a position
    that could not be divided or multiplied by 2 without exceeding the limit. Also, issues might occur in zoom where it would believe that an increase/decrease will occur when it doesn't once in the increase
    decrease methods.

questions:
    I'd like an explanation why we are using JSON for saving the state.
*/
////// Conway's game of life
console.time("its");

{ // Um, is that block really all I have to do to scope all my variables.?
	let cfg = {
		initialCellSize: 8, // valid cell sizes are: 1,2,4,8,16,32,64
		maximumCellSize: 64,
		minimumCellSize: 1,
		tickRate: 250,
		cellStyle: {
			bodyColor: 'black',
			outlineColor: 'rgb(173, 216, 230)', //'lightblue'
			// Currently the killedFadeOut system relies on this being an rgb value formated just like this, including whitespace
			// I only changed this for fun, but would prefer it to be clear. Can't remember how.
			outlineThick: 1
		},
		deadCellType: 0, // 0: no residue, 1: shadows, 2: husks
		killedFadeOut: 5, // number of steps before final erasure. 0 = feature Off.
		opacityAging: true,
		enableUndo: true,
		maxUndo: 20,
		sL: false,
		get shiftLock() {
			return this.sL;
		},
		set shiftLock(lock) {
			document.getElementById("autoZoom").checked = !lock;
			this.sL = lock;
		}
	}

	//// Setup, Config, etc...
	let canvas = document.getElementById("gameCanvas");

	var container = document.getElementById('canvas');
	let ctx = canvas.getContext("2d");
	canvas.addEventListener("mousemove", activateDrag);
	canvas.addEventListener("mousedown", mouseDown);
	canvas.addEventListener("mouseup", mouseUp);
	canvas.addEventListener("wheel", zoom);
	let oldStates = [];

	let running = false;

	//// Setup for testing...
	let aCoupleDots = [
		[10, 10, 11, 11],
		[10, 11, 10, 11]
	]
	let gosperGliderGun = [
		[14, 14, 15, 15, 24, 24, 24, 25, 26, 27, 25, 26, 27, 29, 30, 30, 30, 31, 29, 28, 34, 34, 34, 35, 35, 35, 36, 36, 38, 38, 38, 38, 48, 49, 49, 48],
		[21, 22, 22, 21, 21, 22, 23, 20, 19, 19, 24, 25, 25, 24, 23, 22, 21, 22, 20, 22, 21, 20, 19, 19, 20, 21, 18, 22, 17, 18, 22, 23, 20, 20, 19, 19]
	];

	// includes gosper glider gun, figure 8 oscillator, and pulsar.
	let variousInitialStateComments = `#N Various Initial States <br> 
    #O NaOH <br>
    #C Includes gosper glider gun, figure 8 oscillator, and pulsar.`;
	let variousInitialState = [
		[14, 14, 15, 15, 24, 24, 26, 28, 28, 24, 24, 28, 28, 24, 26, 29, 35, 37, 37, 36, 36, 39, 40, 37, 40, 36, 36, 36, 37, 40, 39, 40, 44, 44, 48, 46, 47, 48, 45, 43, 45, 49, 49, 16, 15, 17, 18, 18, 18, 15, 16, 17, 13, 13, 13, 21, 23, 22, 20, 20, 20, 21, 22, 23, 25, 25, 25, 15, 17, 16, 18, 18, 18, 13, 13, 13, 15, 16, 17, 22, 20, 21, 23, 20, 20, 25, 25, 25, 21, 22, 23, 69, 70, 68, 71, 72, 67, 66, 73, 74, 66, 74, 67, 73, 68, 72, 69, 70, 71, 63, 62, 63, 62, 64, 64, 62, 63, 64, 65, 66, 67, 65, 65, 67, 66, 67, 66],
		[21, 22, 22, 21, 20, 19, 19, 20, 21, 22, 24, 23, 24, 25, 25, 22, 25, 25, 26, 27, 26, 17, 18, 18, 17, 19, 20, 21, 22, 22, 23, 23, 19, 21, 18, 21, 21, 21, 19, 20, 21, 19, 20, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 43, 42, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 42, 43, 46, 46, 46, 48, 47, 49, 47, 49, 48, 51, 51, 51, 46, 47, 46, 46, 49, 48, 47, 48, 49, 51, 51, 51, 34, 34, 35, 34, 35, 36, 38, 36, 38, 39, 39, 41, 41, 42, 42, 43, 43, 43, 7, 8, 8, 7, 7, 8, 9, 9, 9, 10, 10, 10, 11, 12, 11, 12, 12, 11]
	];

	let fourLightSpaceships = [
		[5, 5, 5, 6, 6, 7, 8, 9, 9, 41, 41, 41, 41, 40, 39, 38, 40, 38, 69, 70, 71, 72, 72, 72, 71, 68, 68, 42, 42, 42, 42, 41, 40, 39, 41, 39],
		[26, 27, 28, 29, 26, 26, 26, 27, 29, 4, 5, 6, 7, 4, 4, 5, 8, 8, 27, 27, 27, 27, 28, 29, 30, 28, 30, 52, 53, 54, 55, 55, 55, 54, 51, 51]
	];


	let initialSetupComments = variousInitialStateComments;
	let initialSetup = variousInitialState;
	let empty = [];



	const StateProtoType = {
		cellSize: cfg.initialCellSize,
		xShift: null,
		yShift: null,
		get gridWidth() {
			return Math.floor(canvas.width / this.cellSize)
		},
		get gridHeight() {
			return Math.floor(canvas.height / this.cellSize)
		},
		refreshMinMaxes: function() {
			this.xMin = Math.min(...this.x);
			this.xMax = Math.max(...this.x);
			this.yMin = Math.min(...this.y);
			this.yMax = Math.max(...this.y);
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
			this.resetShiftValues();
			this.deadMatrices = [];
			this.cellSize = cfg.initialCellSize;
			// this.gridWidth = Math.floor(canvas.width / cfg.initialCellSize);
			// this.gridHeight = Math.floor(canvas.height / cfg.initialCellSize);
			this.save();
		},
		get cellsWide() {
			return (this.xMax - this.xMin);
		},
		get cellsTall() {
			return (this.yMax - this.yMin);
		},
		resetShiftValues: function() {
			if (!cfg.shiftLock) {
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
		// get deadMatrix () {
		//     return [this.xDead, this.yDead];
		// },
		// set deadMatrix (dualArray) {
		//     this.xDead = dualArray[0];
		//     this.yDead = dualArray[1];
		// },
		push: function(x, y) { // adds and xy pair and sets mins and maxes if necessary.
			//if (x > 0 && y > 0 && x <= this.gridWidth && y <= this.gridHeight) { // i scout salute my fingers and swear to remove this when we have zoom
			this.x.push(x);
			this.y.push(y);
			//}
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
				this.xMin = Math.min(...this.x);
			} else if (this.x[index] === this.xMax) {
				this.privateSpliceAtIndex(index);
				this.xMax = Math.max(...this.x);
			} else if (this.y[index] === this.yMin) {
				this.privateSpliceAtIndex(index);
				this.yMin = Math.min(...this.y);
			} else if (this.y[index] === this.yMax) {
				this.privateSpliceAtIndex(index);
				this.yMax = Math.max(...this.y);
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
		}
	};

	function State(initialize = false) {
		let s = Object.create(StateProtoType);

		s.comments = ''; // this should be an html string
		//this.x = initialSetup[0].slice();
		//this.y = initialSetup[1].slice();
		s.x = [];
		s.y = [];
		// s.xDead = [];
		// s.yDead = [];
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

	//// Game flow starts here...
	let state = new State(true);
	drawState();

	//// ... User interaction ...
	//// Game flow ends here...

	//// Library of custom functions...

	/// util function to get random integer
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	/// Search for matches in parallel arrays
	// needed for finding isAlive and isTouched because native .includes matches by reference, not values
	function paraInd(x, y, arrXs, arrYs) {
		let indexes = [];
		for (let i = 0; i < arrXs.length; i++)
			if (arrXs[i] === x)
				indexes.push(i);
		for (let index of indexes)
			if (arrYs[index] === y)
				return index;
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

	//// these functions could be moved into StatePrototype
	//
	function clearState() {
			state.matrix = [
				[],
				[]
			];
			state.deadMatrices = [];
			state.minMaxes = [undefined, undefined, undefined, undefined];
			state.xShift = 0;
			state.yShift = 0;
			drawState();
		}
		//
	function resetState() {
			//state.init(); // Max used the reset function instead
			state.reset();
			drawState();
		}
		//
	function saveState() { // state.save() can't be called in the html button onclick because all these variables are intentionally block scoped. Though I don't really understand why the functions aren't scoped out also.
			state.save();
			state.setComments("SavePoint of:  " + document.getElementById('comments').innerHTML)
		}
		////

	function loadPattern() {
		clearState();
		let shiftState = cfg.shiftLock;
		cfg.shiftLock = false;
		const newState = new State();
		parseRLE(patternsArray[getRandomInt(patternsArray.length - 1)], newState);
		state.init(newState.matrix);
		state.setComments(newState.comments);
		console.log('loaded matrix', state.matrix);
		drawState();
		if (state.cellSize > 8)
			zoomTo(8);
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

	function checkReduceCellSize(decreased = false, zoom = false) {
		if (zoom || (!cfg.shiftLock && (state.cellsWide >= state.gridWidth || state.cellsTall >= state.gridHeight))) {
			// if we cannot fit the entire pattern inside the grid with one square to spare, increase grid size
			let newCellSize = state.cellSize / 2;
			if (newCellSize >= cfg.minimumCellSize) {
				state.changeCellSizeTo(newCellSize);
				return checkReduceCellSize(true);
			}
		}
		return decreased;
	}

	function checkIncreaseCellSize(increased = false, zoom = false) {
		if (zoom || (!cfg.shiftLock && (state.cellsWide <= ((Math.floor((canvas.width / (state.cellSize)) / 2) - 5)) && state.cellsTall <= ((Math.floor((canvas.height / (state.cellSize)) / 2) - 5))))) {
			// if there is enough space to increase the cell size and have a border with at least 5 squares, decrease cell size.
			let newCellSize = state.cellSize * 2;
			if (newCellSize <= cfg.maximumCellSize) {
				state.changeCellSizeTo(newCellSize);
				return checkIncreaseCellSize(true);
			}
		}
		return increased;
	}

	function cellSizeByInput() {
		let newCellSize = Math.pow(2, cellSizeInput.value); // wut? why does this work? we magically have access to the html cellSizeInput element without assigning it to anything?
		cellSizeOutput.value = newCellSize + 'px';
		cfg.shiftLock = true;
		zoomTo(newCellSize);
	}

	function zoomTo(newCellSize) {
		const rect = canvas.getBoundingClientRect(); // needs to be here because canvas can move if window is resized or scrolled.
		let event = {
			clientX: rect.left + canvas.width / 2, // figure out middle X coordinate and put it here
			clientY: rect.top + canvas.height / 2 // figure out middle Y coordinate and put it here
		}
		if (state.cellSize > newCellSize)
			event["deltaY"] = 100; // zoom out
		else
			event["deltaY"] = -100; // zoom in

		while (state.cellSize != newCellSize) {
			zoom(event);
		}
	}

	function zoom(event) {
		if (!cfg.shiftLock)
			shiftLockToggle();
		let zoomIn = (event.deltaY < 0) ? true : false; // true for zoom in, false for zoom out

		if (zoomIn && (state.cellSize < cfg.maximumCellSize)) { // zoom in
			let m = {}; // will contain an x and y cell location relative to canvas grid (unshifted)
			getMouseCoordinate(event, m);
			checkIncreaseCellSize(false, true);
			let xShiftChange = Math.floor(m.x - (state.gridWidth / 2)); // shift the left edge of the visible grid to the mouse position, minus half the new grid's width (centering the mouse position)
			let yShiftChange = Math.floor(m.y - (state.gridHeight / 2));
			state.xShift = state.xShift - xShiftChange;
			state.yShift = state.yShift - yShiftChange;
			drawState();
		} else if (!zoomIn && state.cellSize > cfg.minimumCellSize) { // zoom out
			let oldGridWidth = state.gridWidth;
			let oldGridHeight = state.gridHeight;
			checkReduceCellSize(false, true);
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
		if (!cfg.shiftLock)
			shiftLockToggle();
		const dragEndPosition = {};
		getMouseCoordinate(event, dragEndPosition);
		// get cell # difference between drag start pos and end pos, this will be the change in shift value.
		dragEndPosition.x = dragStartPosition.x - dragEndPosition.x;
		dragEndPosition.y = dragStartPosition.y - dragEndPosition.y;
		state.xShift = state.xShift - dragEndPosition.x;
		state.yShift = state.yShift - dragEndPosition.y;
		drawState();
	}

	// Library of custom functions...
	function drawState() {
		// erase last canvas/cells.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// set new cell size and shift value
		if (!cfg.shiftLock) {
			state.checkResetShiftValues();
			if (!checkReduceCellSize())
				checkIncreaseCellSize()
		}

		// draw cells killed since last state
		if (cfg.deadCellType != 0) {
			if (cfg.killedFadeOut) {
				for (let m = 0; m < state.deadMatrices.length; m++) { // number of matrices = cfg.killedFadeOut (limited when matrix is added in stepState)
					for (let i = 0; i < state.deadMatrices[m][0].length; i++) { // matrix[0] = deadXs, matrix[1] = deadYs
						drawDeadCell(state.deadMatrices[m][0][i] + state.xShift, state.deadMatrices[m][1][i] + state.yShift, m); // passing the x, y and m = the index of the matrix in deadMatrices to control opacity
					}
				}
			}
		}

		for (let i = 0; i < state.x.length; i++) { // no matter the coordinates, always draw starting at 0,0 in the ++ quadrant. Values are shifted into the ++ quadrant using the xShift, yShift            
			drawLiveCell(state.x[i] + state.xShift, state.y[i] + state.yShift);
		}
	}

	function drawLiveCell(x, y) { // not sure if passing in an integer (cellsize) creates a copy. May be more efficient to refer to state.cellSize each time.
		let size = state.cellSize;
		if (size > 4) { // for large cells, use a bordered cell.
			ctx.fillStyle = cfg.cellStyle.outlineColor;
			ctx.fillRect(x * size, y * size, size, size);
			ctx.fillStyle = cfg.cellStyle.bodyColor;
			let w = cfg.cellStyle.outlineThick;
			ctx.fillRect(x * size + w, y * size + w, size - 2 * w, size - 2 * w);
		} else { // for small cells, fill entire cell with body color (no outline, grid space)
			ctx.fillStyle = cfg.cellStyle.bodyColor;
			ctx.fillRect(x * size, y * size, size, size);
		}
	}

	function drawDeadCell(x, y, m) { // this choice of color/style is not necessarily my preference, it's decent, but i chose it for convenience.
		let size = state.cellSize;
		if (cfg.deadCellType == 2) { // husks
			ctx.beginPath();
			ctx.rect(x * size, y * size, size, size);
			switch (m) {
				case 0:
					ctx.strokeStyle = "#00000050";
					break;
				case 1:
					ctx.strokeStyle = "#00000010";
					break;
				case 2:
				case 3:
				case 4:
				case 5:
					ctx.strokeStyle = "#00000002";
					break;
			}
			ctx.lineWidth = 1;
			ctx.stroke()
		} else if (cfg.deadCellType == 1) { // shadows
			// this section needs to be changed in order to get better efficiency.
			if (cfg.opacityAging) {
				let opacity = ((state.deadMatrices.length - m) / state.deadMatrices.length).toFixed(2); // equal fade spread across the aging matrices.
				//Numerator above 1.0 keeps opacity higher for longer
				//e.g. lightblue i.e. 'rgb(173, 216, 230)' m = 0 converts to 'rgba(173, 216, 230, 0.13)'
				let opaColor = cfg.cellStyle.outlineColor.replace(/rgb\((.+)\)/, "rgba($1, " + opacity + ")");
				ctx.fillStyle = opaColor;
			} else
				ctx.fillStyle = cfg.cellStyle.outlineColor;
			let w = cfg.cellStyle.outlineThick; // draw body-sized square but with the other color
			ctx.fillRect(x * size + w, y * size + w, size - 2 * w, size - 2 * w);
		}
	}

	function tickrateByInput() {
		let newTickrate = Math.round(1000 / Math.pow(2, tickrateInput.value));
		tickrateOutput.value = newTickrate + "ms"
		cfg.tickRate = newTickrate;
	}

	/// infinitely run the interval stepper until user clicks stop
	function run() {
		running = !running; // used to toggle on or off interval stepper
		let button = document.getElementById("runButton"); // we need this to change button text

		if (running) // start stepping interval
		{
			button.innerText = "Stop";

			function recursingRepeater() {
				if (running) {
					drawState(stepState(1));
					window.setTimeout(recursingRepeater, cfg.tickRate); // this line allows the tickrate to be re-evaluated.
				}
			};

			window.setTimeout(recursingRepeater, cfg.tickRate);
		} else
			button.innerText = "Run";
	}

	function shiftLockToggle() {
		// let button = document.getElementById("shiftLockButton");
		cfg.shiftLock = !cfg.shiftLock;
		// button.innerText = (cfg.shiftLock)? "(X) Lock Perspective" : "( ) Lock Perspective";     
	}

	// function cellSizeLockToggle(){
	//     let button = document.getElementById("cellSizeLockButton");
	//     cfg.cellSizeLock = !cfg.cellSizeLock;
	//     button.innerText = (cfg.cellSizeLock)? "(X) Lock Cell Size" : "( ) Lock Cell Size";
	// }

	function changeResidue() {
		cfg.deadCellType = document.querySelector('input[name="residues"]:checked').value;
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

	/// given x,y's of currently living cells: apply game rules and output new x,y's of living cells
	function stepState(steps = 1) {

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

		let touched = [
			[],
			[],
			[],
			[]
		]; //[[x],[y],[n],[a]]  n = times touched, a = alive(bool)
		let killedMatrix = [
			[],
			[]
		];
		const newState = new State();
		let bounds = {
			xmin: state.xMin,
			xmax: state.xMax,
			ymin: state.yMin,
			ymax: state.yMax
		};
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
						touched[2][index] += 1; // iff it's a neighbor, increment the counter
					else
						touched[3][index] = true; // iff it's the cell itself, make sure it's marked alive
				}
			}
		}

		for (let i = 0; i < state.x.length; i++) {
			touch(state.x[i], state.y[i]); // increment counter for each adjacent living cell
		}
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
		if (steps > 1) {
			return stepState(--steps); // repeat
		}

		// setting these props individually isn't really taking advantage of the multiple state objects
		// we should probably be setting the properties of newstate in here and then replacing the entire state object

		// indeed failing to re-initialize the whole state means the shadows arent getting cleared on "reset" button or "clear" button etc.
		if (cfg.deadCellType) {
			state.deadMatrices.unshift(killedMatrix);
			if (state.deadMatrices.length > cfg.killedFadeOut)
				state.deadMatrices.pop();
		}
		state.matrix = newState.matrix;
		state.minMaxes = newState.minMaxes;
	}

} // Um, is that block really all I have to do to scope all my variables.?

console.timeEnd("its");