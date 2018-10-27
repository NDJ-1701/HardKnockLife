function stackStateSlice(miniStack){
	
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

    // const newState = new State();
    let newState = [[],[]];
	let killedMatrix = [[],[]];
	let x; // our x value
	for (let i = 0, len = results.length; i < len; i++) {
		x = results[i][0];
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
    return [newState, killedMatrix];
}

onmessage = function(e) {
    postMessage(stackStateSlice(e.data));
}
