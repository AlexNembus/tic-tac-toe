class TicTacToe {
    constructor(symbol = 'x') {
       this.currentSymbol = symbol;
       this.field = [ ['','',''], ['','',''], ['','',''] ];
    }

    getCurrentPlayerSymbol() {
      return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == '') {
        this.field[rowIndex][columnIndex] = this.currentSymbol;
        (this.currentSymbol == 'x') ? this.currentSymbol = 'o' : this.currentSymbol = 'x';
      } 
    }

    isFinished() {
        let isEmptyCell = 0;
        for(let i = 0; i < this.field.length; i++){
            if (this.field[i][0] !== "" && this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]){
               return true;
            }
            if(this.field[0][i] !== "" && this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
               return true;
            }
         }
         if(this.field[0][0] !== "" && this.field[0][0] === this.field[1][1] &&  this.field[0][0] === this.field[2][2]){
            return true;
         }
         if(this.field[0][2] !== "" && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]){
            return true;
         }
         
         for(let i = 0; i < this.field.length; i++){
            for (let j = 0; j < this.field[i].length; j++){
                if(this.field[i][j] == ''){ isEmptyCell = 1; }
            }
         }
         if(isEmptyCell == 0){ return true };
         return false;
    }

    getWinner() {
      for(let i = 0; i < this.field.length; i++){
         if (this.field[i][0] !== "" && this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]){
            return this.field[i][0];
         }
         if(this.field[0][i] !== "" && this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                 return this.field[0][i];
         }
      }
      if(this.field[0][0] !== "" && this.field[0][0] === this.field[1][1] &&  this.field[0][0] === this.field[2][2]){
          return this.field[0][0];
      }
      if(this.field[0][2] !== "" && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]){
          return this.field[0][2];
      }
      return null;
    }

    noMoreTurns() {
        for(let i  = 0; i < this.field.length; i++){
            for(let j = 0; j < this.field[i].length; j++){
                if(this.field[i][j] == ''){ return false; }
            }
        }
        return true;
    }

    isDraw() {
        for(let i  = 0; i < this.field.length; i++){
            for(let j = 0; j < this.field[i].length; j++){
                if(this.field[i][j] == ''){ return false; }
            }
        }
        for(let i = 0; i < this.field.length; i++){
            if (this.field[i][0] !== "" && this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]){
               return false;
            }
            if(this.field[0][i] !== "" && this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                return false;
            }
         }
         if(this.field[0][0] !== "" && this.field[0][0] === this.field[1][1] &&  this.field[0][0] === this.field[2][2]){
            return false;
         }
         if(this.field[0][2] !== "" && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]){
            return false;
         }
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
     if( this.field[rowIndex][colIndex] == '' ){
         return null;
     }
     return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
