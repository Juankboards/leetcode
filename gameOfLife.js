/*
Game of Life

According to the Wikipedia article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:

    Any live cell with fewer than two live neighbors dies, as if caused by under-population.
    Any live cell with two or three live neighbors lives on to the next generation.
    Any live cell with more than three live neighbors dies, as if by over-population..
    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
*/

function game_of_life(board) {
    return board.map((row, i) => {
        return row.map((cell, j) => {
            if(cell == 1 && numLiveNeighbors(i, j, board) < 2) return 0
            if(cell == 1 && numLiveNeighbors(i, j, board) < 4) return 1
            if(cell == 0 && numLiveNeighbors(i, j, board) == 3) return 1
            return 0         
        })
    })
}

function numLiveNeighbors(row, col, board) {
    count = 0
    for(let i of [-1, 0, 1]) {
        for(let j of [-1, 0, 1]) {
            if(i === 0 && j === 0)
                continue
            if(row + i < 0 || row + i >= board.length)
                continue
            if(col + j < 0 || col + j >= board[0].length)
                continue
            if(board[row+i][col+j] === 1)
                count += 1
        }
    }
    return count
}

console.log(game_of_life([
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
]))