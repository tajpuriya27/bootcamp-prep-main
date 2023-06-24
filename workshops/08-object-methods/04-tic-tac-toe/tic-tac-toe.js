// YOUR CODE BELOW
let ticTacToe = {
    board: [[null, null, null],[null, null, null],[null, null, null]],
    move(val, row, col){
        if(this.board[row][col] === null){
            this.board[row][col] = val;
        }
        return this.board;
    },
    clear(){
        this.board = [[null, null, null],[null, null, null],[null, null, null]]
        return this.board;
    }
}
