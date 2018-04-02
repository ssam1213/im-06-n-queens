/*           _
___  ___ | |_   _____ _ __ ___
/ __|/ _ \| \ \ / / _ \ '__/ __|
\__ \ (_) | |\ V /  __/ |  \__ \
|___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {

  var solution = []; //fixme
  var board = new Board({'n':n});

  var row = 0;
  var col = 0;

  var rooks = function(board){
    if(!board.hasAnyRooksConflicts()){
      if(row<n&&col<n){
        board.togglePiece(row, col);
        solution.push(board.rows()[col]);
        row++;
        col++;

        rooks(board);
      }
    }
  };
  rooks(board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  var solutionCount = factorial(n); //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

var copy = function(arr) {
  var output = [];
  var value;
  for (key in arr) {
    value = arr[key];
    output[key] = (typeof value === "object") ? copy(value): value;
  }
  return output;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var board = new Board({n:n});

  var queens = function(board, row, numPiece) {
    //base case
    if((row === n) && (numPiece === n)) {
      solution.push(copy(board.rows()));
      return;
    }
    else {
      for(var i=0; i<n;i++) {
        board.togglePiece(row,i);
        numPiece++;
        if(!(board.hasAnyQueensConflicts())) {
          queens(board, row +1, numPiece);
        }
          board.togglePiece(row, i);
          numPiece--;
      }
    }
  }
  queens(board, 0, 0);
  return solution[0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ] || board.rows();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({'n':n});

  var queens = function(row) {
    //base case
    if(row === n) {
      solutionCount++;
      return;
    }
    else {
      for(var i=0; i<n;i++) {
        board.togglePiece(row,i);
        if(!(board.hasAnyQueensConflicts())) {
          queens(row +1);
        }
        board.togglePiece(row, i);
      }
    }
  }
  queens(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
