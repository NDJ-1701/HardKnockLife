////// Conway's game of life
console.time("its");
{ // Um, is that block really all I have to do to scope all my variables.?

    let cfg = {
        gridSize: 10, // 10 pixels per cell
        tickRate: 250,
        cellStyle: {
            bodyColor: 'black',
            outlineColor: 'lightblue', // I only changed this for fun, but would prefer it to be clear. Can't remember how.
            outlineThick: 1
        }
    }

    //// Setup, Config, etc...
    let canvas = document.getElementById("gameCanvas");
    let ctx = canvas.getContext("2d");
    canvas.addEventListener("mousedown", getCursorPosition, false);
    let gridWidth = canvas.width / cfg.gridSize;
    let gridHeight = canvas.height / cfg.gridSize;

    let running = false;

    //// Setup for testing...
    let gosperGliderGun =
        [[14, 14, 15, 15, 24, 24, 24, 25, 26, 27, 25, 26, 27, 29, 30, 30, 30, 31, 29, 28, 34, 34, 34, 35, 35, 35, 36, 36, 38, 38, 38, 38, 48, 49, 49, 48],
        [21, 22, 22, 21, 21, 22, 23, 20, 19, 19, 24, 25, 25, 24, 23, 22, 21, 22, 20, 22, 21, 20, 19, 19, 20, 21, 18, 22, 17, 18, 22, 23, 20, 20, 19, 19]];
    // includes gosper glider gun, figure 8 oscillator, and pulsar.
    let variousInitialState =
        [[14, 14, 15, 15, 24, 24, 26, 28, 28, 24, 24, 28, 28, 24, 26, 29, 35, 37, 37, 36, 36, 39, 40, 37, 40, 36, 36, 36, 37, 40, 39, 40, 44, 44, 48, 46, 47, 48, 45, 43, 45, 49, 49, 16, 15, 17, 18, 18, 18, 15, 16, 17, 13, 13, 13, 21, 23, 22, 20, 20, 20, 21, 22, 23, 25, 25, 25, 15, 17, 16, 18, 18, 18, 13, 13, 13, 15, 16, 17, 22, 20, 21, 23, 20, 20, 25, 25, 25, 21, 22, 23, 69, 70, 68, 71, 72, 67, 66, 73, 74, 66, 74, 67, 73, 68, 72, 69, 70, 71, 63, 62, 63, 62, 64, 64, 62, 63, 64, 65, 66, 67, 65, 65, 67, 66, 67, 66],
        [21, 22, 22, 21, 20, 19, 19, 20, 21, 22, 24, 23, 24, 25, 25, 22, 25, 25, 26, 27, 26, 17, 18, 18, 17, 19, 20, 21, 22, 22, 23, 23, 19, 21, 18, 21, 21, 21, 19, 20, 21, 19, 20, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 43, 42, 39, 39, 39, 41, 42, 43, 44, 44, 44, 41, 42, 43, 46, 46, 46, 48, 47, 49, 47, 49, 48, 51, 51, 51, 46, 47, 46, 46, 49, 48, 47, 48, 49, 51, 51, 51, 34, 34, 35, 34, 35, 36, 38, 36, 38, 39, 39, 41, 41, 42, 42, 43, 43, 43, 7, 8, 8, 7, 7, 8, 9, 9, 9, 10, 10, 10, 11, 12, 11, 12, 12, 11]];

    const defaultState = {
        // comments use explicit <br> between lines because they are being displayed as html
        comments: `#N Various Initial States <br> 
            #O NaOH <br>
            #C Includes gosper glider gun, figure 8 oscillator, and pulsar.`,
        setComments: function (htmlString) {
            this.comments = htmlString;
            document.getElementById('comments').innerHTML = state.comments;
        },
        x: variousInitialState[0],
        y: variousInitialState[1],
        get matrix () {
            return [this.x, this.y];
        },
        set matrix (dualArray) {
            this.x = dualArray[0];
            this.y = dualArray[1];
        },
        push: function (x, y) {
            if (x > 0 && y > 0 && x <= gridWidth && y <= gridHeight) { // i scout salute my fingers and swear to remove this when we have zoom
                this.x.push(x);
                this.y.push(y);
            }
        },
        remove: function (index) {
            this.x.splice(index, 1);
            this.y.splice(index, 1);
        },
        save: function () {
            this.saved = JSON.stringify(this.matrix);
        },
        reset: function () {
            this.matrix = JSON.parse(this.saved);
            document.getElementById('comments').innerHTML = state.comments;
        }
    }; // Above is the object literal version of "State" we've been using, just renamed to "defaultState"

    function State () {
        // implicitly: let this = State.prototype || {};
        this.save();
        document.getElementById('comments').innerHTML = this.comments;
        // implicitly: return this;
    }
    State.prototype = defaultState;  // set the object that "new" should use instead of an empty object {}
        // Yes, changes to defaultState will be applied immediately to all states (that's a useful feature) 
        // and changes to any particular state do not apply to others (as expected)

    //// Game flow starts here...
    // let state = Object.create(State);
    let state = new State();
    // state.save(); // These two lines could be done in the constructor if we used the "new" syntax instead
    // document.getElementById('comments').innerHTML = state.comments; // They have to be somewhere after state is created. 
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

    function getCursorPosition(event) {
        const rect = canvas.getBoundingClientRect(); // needs to be here because canvas can move if window is resized or scrolled.

        // get mouse click location relative to canvas
        let x = event.clientX - rect.left - 5; // integer mouse cursor tip offset
        x = Math.round(x / cfg.gridSize);
        let y = event.clientY - rect.top - 4; // integer mouse cursor tip offset
        y = Math.round(y / cfg.gridSize);

        let index = paraInd(x, y, state.x, state.y); // check if cell exists in state matrix
        if (index === -1) { // if not found, add the cell to the state
            state.push(x, y);
        }
        else { // if found, delete the cell
            state.remove(index);
        }

        // update the canvas with the new cells.
        drawState();
    }

    function clearState() {
        state.matrix = [[], []];
        document.getElementById('comments').innerHTML = `#N Blank Canvas <br>
            #O Your boundless imagination <br>
            #C ... ... ...`;
        drawState();
    }

    function resetState() {
        state.reset();
        drawState();
    }

    function saveState () { // state.save() can't be called in the html button onclick because all these variables are intentionally block scoped. Though I don't really understand why the functions aren't scoped out also.
        state.save();
        state.comments = "SavePoint of:  " + document.getElementById('comments').innerHTML;
        document.getElementById('comments').innerHTML = state.comments;
    }

    function loadPattern () {
        state.matrix = parseRLE(patternsArray[getRandomInt(patternsArray.length - 1)]);
        state.save();
        drawState();
    }

    /// randomly fill the canvas with cells
    function random() {
        let xResult = [];
        let yResult = [];
        let lesserator = Math.random() / 2; // randomly reduces the likelihood of creating a cell. Set equal to 1 if you always want an empty border.
        let margin = getRandomInt(30); // number of cells into the grid to apply the lesserator
        // iterate through each possible cell, and if randomly true, build the new state arrays.
        for (let i = 0; i < gridWidth; i++) {
            for (let e = 0; e < gridHeight; e++) {
                let modifier = (i < margin || i > (gridWidth - margin) || e < margin || e > (gridHeight - margin)) ? lesserator : 0; // only apply lesserator if within the margin
                if ((Math.random() + modifier) < 0.5) {
                    xResult.push(i);
                    yResult.push(e);
                }
            }
        }

        // save new state and draw it.
        state.matrix = [xResult, yResult];
        state.setComments(`#N Ordered Chaos <br>
            #O Maths <br>
            #C ... ... ...`);
        state.save();
        drawState();
    }

    function drawState() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < state.x.length; i++) {
            drawOne(state.x[i], state.y[i]);
        }
        console.log(state.x.length);
    }

    function drawOne(x, y) {
        ctx.fillStyle = cfg.cellStyle.outlineColor;
        ctx.fillRect(x * cfg.gridSize, y * cfg.gridSize, cfg.gridSize, cfg.gridSize);
        ctx.fillStyle = cfg.cellStyle.bodyColor;
        let w = cfg.cellStyle.outlineThick;
        ctx.fillRect(x * cfg.gridSize + w, y * cfg.gridSize + w, cfg.gridSize - 2 * w, cfg.gridSize - 2 * w);
    }

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
      
    /// given the text contents of an RLE file: output Xs[] and Ys[]
    function parseRLE (input) { // http://www.conwaylife.com/wiki/Run_Length_Encoded
        let lines = input.split(/\s*\r?\n\s*/); // array of lines with leading and trailing whitespace removed
        let commentLines = lines.filter(line=> /^(#|x)/i.test(line));
        function concatAndLinks(accum, curr) {
            return accum.concat("<br>", curr.replace(/(http:\/\/|www\.)(conwaylife\.com\S*)/, '<a href="http://www.$2">www.$2</a>'));
        }
        state.setComments(commentLines.reduce(concatAndLinks));
        let width;
        let height;
        commentLines[commentLines.length - 1].replace(/x\s*=\s*(\d+).*y\s*=\s*(\d+)/, (m, p1, p2)=> { // grab the pattern's dimensions to calc offset
            // p1 parentheses capture the number, p2 caps the letter, unused m is the whole match 
            width = p1;
            height = p2;
            // return m; Not actually using replace functionality here, just needed access to p1, p2
        });
        let xOffset = Math.floor((canvas.width / 2) / cfg.gridSize - width / 2); // offset so that pattern draws in the middle of canvas
        let yOffset = Math.floor((canvas.height / 2) / cfg.gridSize - height / 2);
        let codedLines = lines.filter(line=> !/^(#|x)/i.test(line)); // keep everything except comment lines and the header line
        let matrix = [[],[]];
        let x = 0;
        let y = 0;
        for (let i = 0; i < codedLines.length; i++) { // loop through the lines pushing live cells and skipping dead ones
            codedLines[i].replace(/(\d*)(b|o|\$|!)/gi, (m, p1, p2)=> { // b = dead, o = alive, $ end of line, ! end of pattern
                if (!p1) // p1 is the repeat number
                    p1 = 1;
                while (p1-- > 0) {
                    switch (p2) {
                    case 'o': // if it's alive, push it and move on
                        matrix[0].push(x + xOffset);
                        matrix[1].push(y + yOffset);
                        x++;  break;
                    case 'b': // if it's dead, do nothing but move on
                        x++;  break;
                    case '$': // at end of line, goto beginning of next line
                        y++;
                        x = 0;  break;
                    case '!': // '!' cool, got to the end without errors
                        break;
                    default:
                        alert("RLE contains non-standard characters:" + p2);
                    }
                }
            });
        }
        return matrix;
    }

    /// given x,y's of currently living cells: apply game rules and output new x,y's of living cells
    function stepState(steps = 1) {
        let touched = [[], [], []]; //[[x],[y],[n]]  n = times touched
        const newState = Object.create(defaultState);
        newState.matrix = [[], []];
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
        } // anything not explicitly added by above rules will be dead, because each step initializes the aliveList to an empty array
        if (steps > 1) {
            return stepState(--steps); // repeat
        }

        state.matrix = newState.matrix;
    }

} // Um, is that block really all I have to do to scope all my variables.?
console.timeEnd("its");