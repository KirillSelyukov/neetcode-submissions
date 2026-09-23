class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9},() => new Set())
        const cols = Array.from({length: 9},() => new Set())
        const squares = Array.from({length: 9},() => new Set())

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] !== '.'){
                    const n = Math.floor(i/3) * 3 + Math.floor(j/3)

                    if(rows[i].has(board[i][j])) return false
                    if(cols[j].has(board[i][j])) return false
                    if(squares[n].has(board[i][j])) return false

                    rows[i].add(board[i][j]) 
                    cols[j].add(board[i][j]) 
                    squares[n].add(board[i][j]) 
                }
            }

        }
        return true
    
    }
}
