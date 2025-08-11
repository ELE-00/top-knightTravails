// --------------------------------------
// Knight's Shortest Path Finder on 8x8 Board
// --------------------------------------

// Represents a board coordinate (x, y)
function coordinate(x, y) {
    this.x = x;
    this.y = y;
}

// Converts a coordinate into a string key: "x,y"
function coordKey(coord) {
    return `${coord.x},${coord.y}`;
}

// Returns all possible knight moves from a given position (within 8x8 board limits)
function possibleMoves(x, y) {
    let array = [];

    // Knight's movement pattern in chess
    let possibleMoves = [
        [-1, 2], [1, 2], [-1, -2], [1, -2],
        [2, 1], [2, -1], [-2, 1], [-2, -1],
    ];

    // For each move, check if it's within the board and add it
    for (let move of possibleMoves) {
        let newX = x + move[0];
        let newY = y + move[1];

        // Ensure moves stay inside 8x8 board boundaries
        if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
            array.push(new coordinate(newX, newY));
        }
    }
    return array;
}

// --------------------
// Graph Construction
// --------------------

const adjacencyList = new Map(); // Stores the board as a graph

// Adds a node (tile) to the adjacency list
function addNode(tileCoordinates) {
    adjacencyList.set(coordKey(tileCoordinates), []);
}

// Adds an undirected edge between two tiles
function addEdge(startMove, endMove) {
    adjacencyList.get(coordKey(startMove)).push(coordKey(endMove));
    adjacencyList.get(coordKey(endMove)).push(coordKey(startMove));
}

// Generates all coordinates for an 8x8 chessboard
function boardTiles() {
    let board = [];
    for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
            board.push(new coordinate(i, j));
        }
    }
    return board;
}

// Create all tiles and add them to the graph
let tiles = boardTiles();
tiles.forEach(addNode);

// Link each tile with its possible knight moves
tiles.forEach(tile => {
    let moves = possibleMoves(tile.x, tile.y);
    for (let i = 0; i < moves.length; i++) {
        addEdge(tile, moves[i]);
    }
});

// --------------------
// BFS: Find Shortest Knight Path
// --------------------

/*
Algorithm:
1. Use BFS to explore moves from start to end.
2. Keep track of visited squares to avoid repeats.
3. Store each square's parent to reconstruct the shortest path.
4. Stop when the end coordinate is reached.
*/
function knightMoves(start, end) {
    const queue = [start];       // BFS queue
    const parent = {};           // Tracks how we reached each tile
    let visited = new Set([start]); // Tracks visited tiles

    while (queue.length > 0) {
        let node = queue.shift(); // Get next tile to explore

        // If we found the target, reconstruct path
        if (node === end) {
            let path = [];
            let current = end;
            while (current !== undefined) {
                path.unshift(current); // Add each parent to start of path
                current = parent[current];
            }
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            console.log(path);
            return;
        }

        // Explore all reachable moves from current tile
        let moves = adjacencyList.get(node);
        for (const move of moves) {
            if (!visited.has(move)) {
                visited.add(move);    // Mark as visited
                parent[move] = node;  // Record how we got here
                queue.push(move);     // Add to queue
            }
        }
    }
}

// Example: shortest path from (0,0) to (3,3)
knightMoves('0,0', '3,3');
