// Conway's game of life


console.time("its");
{ // Um, is that block really all I have to do to scope all my variables.?

    let cfg = {
        initialCellSize: 10, // 10 pixels per cell
        maximumCellSize: 16,
        tickRate: 250,
        cellStyle: {
            bodyColor: 'black',
            outlineColor: "#00000075", // I only changed this for fun, but would prefer it to be clear. Can't remember how.
            outlineThick: 1
        }
    }

    // Setup, Config, etc...
    let canvas = document.getElementById("gameCanvas");
    let ctx = canvas.getContext("2d");

    // let gradient = ctx.createRadialGradient(100, 100, 50, 100, 100, 100);
    // // Oh, this is for the whole canvas, i just want it on each cell
    // gradient.addColorStop(0,"black");
    // gradient.addColorStop(1,"blue");

    // Setup for testing...
    let aCoupleDots = [[10,10,11,11],[10,11,10,11]]
    let gosperGliderGun =
        [[14, 14, 15, 15, 24, 24, 24, 25, 26, 27, 25, 26, 27, 29, 30, 30, 30, 31, 29, 28, 34, 34, 34, 35, 35, 35, 36, 36, 38, 38, 38, 38, 48, 49, 49, 48],
        [ 21, 22, 22, 21, 21, 22, 23, 20, 19, 19, 24, 25, 25, 24, 23, 22, 21, 22, 20, 22, 21, 20, 19, 19, 20, 21, 18, 22, 17, 18, 22, 23, 20, 20, 19, 19]];

    // includes gosper glider gun, figure 8 oscillator, and pulsar.
    let variousInitialState =
        [[14, 14, 15, 15, 24, 24, 26, 28, 28, 24, 24, 28, 28, 24, 26, 29, 35, 37, 37, 36, 36, 39, 40, 37, 40, 36, 36, 36, 37, 40, 39, 40, 44, 44, 48, 46, 47, 48, 45, 43, 45, 49, 49, 16, 15, 17, 18, 18, 18, 15, 16, 17, 13, 13, 13, 21, 23, 22, 20, 20, 20, 21, 22, 23, 25, 25, 25, 15, 17, 16, 18, 18, 18, 13, 13, 13, 15, 16, 17, 22, 20, 21, 23, 20, 20, 25, 25, 25, 21, 22, 23, 69, 70, 68, 71, 72, 67, 66, 73, 74, 66, 74, 67, 73, 68, 72, 69, 70, 71, 63, 62, 63, 62, 64, 64, 62, 63, 64, 65, 66, 67, 65, 65, 67, 66, 67, 66],
        [ 21, 22, 22, 21, 20, 19, 19, 20, 21, 22, 24, 23, 24, 25, 25, 22, 25, 25, 26, 27, 26, 17, 18, 18, 17, 19, 20, 21, 22, 22, 23, 23, 19, 21, 18, 21, 21, 21, 19, 20, 21, 19, 20, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 43, 42, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 42, 43, 46, 46, 46, 48, 47, 49, 47, 49, 48, 51, 51, 51, 46, 47, 46, 46, 49, 48, 47, 48, 49, 51, 51, 51, 34, 34, 35, 34, 35, 36, 38, 36, 38, 39, 39, 41, 41, 42, 42, 43, 43, 43,  7,  8,  8,  7,  7,  8,  9,  9,  9, 10, 10, 10, 11, 12, 11, 12, 12, 11]];

    let fourLightSpaceships =
            [[ 5,  5,  5,  6,  6,  7,  8,  9,  9, 41, 41, 41, 41, 40, 39, 38, 40, 38, 69, 70, 71, 72, 72, 72, 71, 68, 68, 42, 42, 42, 42, 41, 40, 39, 41, 39],
            [ 26, 27, 28, 29, 26, 26, 26, 27, 29,  4,  5,  6,  7,  4,  4,  5,  8,  8, 27, 27, 27, 27, 28, 29, 30, 28, 30, 52, 53, 54, 55, 55, 55, 54, 51, 51]];

    
    let initialSetup = fourLightSpaceships;
    let empty = [];



    const StateProtoType = {
        cellSize: cfg.initialCellSize,
        gridWidth: Math.floor(canvas.width / cfg.initialCellSize),
        gridHeight: Math.floor(canvas.height / cfg.initialCellSize),
        xShift: 0,
        yShift: 0,
        init: function(){
            this.x = initialSetup[0].slice();
            this.y = initialSetup[1].slice();
            this.xMin = Math.min(...initialSetup[0]);
            this.xMax = Math.max(...initialSetup[0]);
            this.yMin = Math.min(...initialSetup[1]);
            this.yMax = Math.max(...initialSetup[1]);
            this.xDead = [];
            this.yDead = [];
        },
        get cellsWide() {
            return (this.xMax - this.xMin);
        },
        get cellsTall() {
            return (this.yMax - this.yMin);
        },
        resetShiftValues: function() {
            this.xShift = Math.floor((this.gridWidth - this.cellsWide) / 2) - this.xMin;
            this.yShift = Math.floor((this.gridHeight - this.cellsTall) / 2) - this.yMin;
        },
        checkResetShiftValues: function() {
            if( (this.xMin + this.xShift) < 0 ||
                (this.xMax + this.xShift) > this.gridWidth ||
                (this.yMin + this.yShift) < 0 ||
                (this.yMax + this.yShift) > this.gridHeight){
                this.resetShiftValues();
            }
        },
        get matrix() {
            return [this.x, this.y];
        },
        set matrix(dualArray) {
            this.x = dualArray[0];
            this.y = dualArray[1];
        },
        push: function(x, y) { // adds and xy pair and sets mins and maxes if necessary.
            //if (x > 0 && y > 0 && x <= this.gridWidth && y <= this.gridHeight) { // i scout salute my fingers and swear to remove this when we have zoom
                this.x.push(x);
                this.y.push(y);
            //}
            if (x < this.xMin || !this.xMin)
                this.xMin = x;
            if (x > this.xMax || !this.xMax)
                this.xMax = x;
            if (y < this.yMin || !this.yMin)
                this.yMin = y;
            if (y > this.yMax || !this.yMax)
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
            }
            else if (this.x[index] === this.xMax) {
                this.privateSpliceAtIndex(index);
                this.xMax = Math.max(...this.x);
            }
            else if (this.y[index] === this.yMin) {
                this.privateSpliceAtIndex(index);
                this.yMin = Math.min(...this.y);
            }
            else if (this.y[index] === this.yMax) {
                this.privateSpliceAtIndex(index);
                this.yMax = Math.max(...this.y);
            }
            else {
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
            this.gridWidth = Math.floor(canvas.width / this.cellSize);
            this.gridHeight = Math.floor(canvas.height / this.cellSize);
            this.resetShiftValues();
        }
    };

    function State(initialize = false){
        let s = Object.create(StateProtoType);

        //this.x = initialSetup[0].slice();
        //this.y = initialSetup[1].slice();
        s.x = [];
        s.y = [];
        s.xDead = [];
        s.yDead = [];
        s.xMin;
        s.xMax;
        s.yMin;
        s.yMax;

        if (initialize)
            s.init();
        
        return s;
    }

    let state = new State(true);

    // Game flow starts here...

    // Game flow for testing...
    drawState();
    // Wait here for user to iterate
    // button will call drawState(stepState(1))

    // Game flow ends here...

    // noah's mods start here
    canvas.addEventListener("mousedown", getCursorPosition, false);

    function getCursorPosition(event) { // poorly named due to copy and paste
        const rect = canvas.getBoundingClientRect(); // needs to be here because canvas can move if window is resized or scrolled.

        // get mouse click location relative to canvas
        let x = event.clientX - rect.left - 5; // integer mouse cursor tip offset
        x = Math.round(x / state.cellSize);
        let y = event.clientY - rect.top - 4; // integer mouse cursor tip offset
        y = Math.round(y / state.cellSize);

        let index = paraInd(x - state.xShift, y - state.yShift, state.x, state.y); // check if cell exists in state matrix
        if (index === -1) { // if not found, add the cell to the state
            state.push(x - state.xShift, y - state.yShift);
        }
        else { // if found, delete the cell
            state.remove(index);
        }

        // update the canvas with the new cells.
        drawState();
    }

    let running = false;
    /// infinitely run the interval stepper until user clicks stop
    function run() {
        running = !running; // used to toggle on or off interval stepper
        let button = document.getElementById("runButton"); // we need this to change button text

        if (running) // start stepping interval
        {
            button.innerText = "Stop";
            drawState(stepState(1));
            let runInterval = setInterval(() => {
                if (running)
                    drawState(stepState(1));
                else
                    clearInterval(runInterval);
            }, cfg.tickRate);
        }
        else
            button.innerText = "Run";
    }

    /// util function to get random integer
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /// randomly fill the canvas with cells
    function random() {
        let xResult = [];
        let yResult = [];
        let lesserator = 1; //Math.random() / 2; // randomly reduces the likelihood of creating a cell. Set equal to 1 if you always want an empty border.
        let margin = 5;//getRandomInt(30); // number of cells into the grid to apply the lesserator
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
        state.x = xResult;
        state.y = yResult;
        drawState();
    }

    function clearState() {
        console.log("clearing State");
        state.matrix = [[], []];
        state.xDead = [];
        state.yDead = [];
        drawState();
    }

    function resetState() {
        state.init();
        drawState();
    }

    function checkReduceCellSize(decreased = false) {
        if ((state.cellSize >= 2) && (state.cellsWide >= state.gridWidth || state.cellsTall >= state.gridHeight)) {
            // if we cannot fit the entire pattern inside the grid with one square to spare, increase grid size

            state.changeCellSizeTo(state.cellSize / 2);
            return checkReduceCellSize(true);
        }
        return decreased;
    }

    function checkIncreaseCellSize(increased = false) {
        if ((state.cellSize <= cfg.maximumCellSize) &&
        (state.cellsWide <= ((Math.floor((canvas.width / (state.cellSize + 1))/2) - 5)) && state.cellsTall <= ((Math.floor((canvas.height / (state.cellSize + 1))/2) - 5)))) {
            // if there is enough space to increase the cell size and have a border with at least 5 squares, decrease cell size.
            state.changeCellSizeTo(state.cellSize * 2);
            return checkIncreaseCellSize(true);
        }
        return increased;
    }

    // Library of custom functions...
    function drawState() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // set new cell size and shift value
        
        state.checkResetShiftValues();
        if (!checkReduceCellSize())
            checkIncreaseCellSize()

        // draw last state
        if (state.xDead.length != 0){
            if (state.xDead.length === 4)
                state.xDead.pop();
            for ( let d = 0; d < state.xDead.length; d++){
                for (let i = 0; i < state.xDead[d].length; i++) { // no mattter the coordinates, always draw starting at 0,0 in the ++ quadrant. Values are shifted into the ++ quadrant using the xShift, yShift            
                    drawDeadCell(state.xDead[d][i] + state.xShift, state.yDead[d][i] + state.yShift, state.cellSize, d);
                }
            }
        }
        state.xDead.unshift(state.x.slice());
        state.yDead.unshift(state.y.slice());

        for (let i = 0; i < state.x.length; i++) { // no mattter the coordinates, always draw starting at 0,0 in the ++ quadrant. Values are shifted into the ++ quadrant using the xShift, yShift            
            drawLiveCell(state.x[i] + state.xShift, state.y[i] + state.yShift, state.cellSize);
        }
    }

    function drawDeadCell(x,y,cellSize, generation = 1){
        ctx.beginPath();
        ctx.rect(x * cellSize, y * cellSize, cellSize, cellSize);
        switch (generation){
            case 0:
            ctx.strokeStyle = "#00000050"; break;
            case 1:
            ctx.strokeStyle = "#00000010"; break;
            case 2:
            ctx.strokeStyle = "#00000002"; break;
        }
        ctx.lineWidth = 1;
        ctx.stroke()
    }

    function drawLiveCell(x, y, cellSize) { // not sure if passing in an integer (cellsize) creates a copy. May be more efficient to refer to state.cellSize each time.
        ctx.fillStyle = (cellSize > 4)? cfg.cellStyle.outlineColor: cfg.cellStyle.bodyColor;

        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        if (cellSize > 4) {
            ctx.fillStyle = cfg.cellStyle.bodyColor;
            let w = cfg.cellStyle.outlineThick;
            ctx.fillRect(x * cellSize + w, y * cellSize + w, cellSize - 2 * w, cellSize - 2 * w);
        }
    }

    // Search for matches in parallel arrays
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

    // input x,y's of currently living cells: apply game rules and output new x,y's of living cells
    function stepState(steps = 1) {
        let touched = [[], [], []]; //[[x],[y],[n]]  n = times touched
        const newState = new State();
        newState.matrix = [[], []];
        let bounds = { xmin: state.xMin, xmax: state.xMax, ymin: state.yMin, ymax: state.yMax };
        // determine which cells are neighbors to the specified cell, and increment their 'touched' counter
        function touch(xo, yo) {
            for (let y = yo - 1; y <= yo + 1; y++) {
                for (let x = xo - 1; x <= xo + 1; x++) {
                    if (x !== xo || y !== yo) {
                        let index = paraInd(x, y, touched[0], touched[1]);
                        if (index === -1) {
                            touched[0].push(x);
                            touched[1].push(y);
                            touched[2].push(1);
                        }
                        else
                            touched[2][index] += 1;
                    }
                }
            }
        }

        for (let i = 0; i < state.x.length; i++) { // increment counter for each adjacent living cell
            touch(state.x[i], state.y[i]);
        }
        for (let i = 0; i < touched[0].length; i++) { // check the counter to see how many adjacent cells are living
            let x = touched[0][i];
            let y = touched[1][i];
            let alive = -1 !== paraInd(x, y, state.x, state.y);
            if (!alive && touched[2][i] === 3) { // if it's dead and has the right number of living neighbors, bring it to life
                newState.push(x, y);
            }
            else if (alive && 2 <= touched[2][i] && touched[2][i] <= 3) { // if it's alive and has the right number of living neighbors, keep it alive
                newState.push(x, y);
            }
            else if (alive){

            }
        } // anything not explicitly added by above rules will be dead, because each step initializes the aliveList to an empty array
        if (steps > 1) {
            return stepState(--steps); // repeat
        }

        state.matrix = newState.matrix;
        state.minMaxes = newState.minMaxes;
    }
    console.timeEnd("its");
    // stringify method 1000 iterations: its: 4642.201ms
    // parallel arrays method 2000: its: 154.527ms
} // Um, is that block really all I have to do to scope all my variables.?