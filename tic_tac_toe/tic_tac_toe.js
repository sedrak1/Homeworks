//with Aramayis Sargsyan


function tic_tac_toe(size) {
    let arr = [];
    let inner_arr = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        inner_arr.push("_");
      }
      arr.push(inner_arr);
      inner_arr = [];
    }
    let determin_winner = 0;
    function generate_num() {
      return Math.floor(Math.random() * arr.length);
    }
    let check_turn = 1;
    for (let i = 0; i < arr.length ** 2; i++) {
      let index_arr = [generate_num(), generate_num()];
      if (arr[index_arr[0]][index_arr[1]] === "_") {
        if (check_turn === 1) {
          arr[index_arr[0]][index_arr[1]] = "x";
        } else {
          arr[index_arr[0]][index_arr[1]] = "0";
        }
        check_turn *= -1;
      } else {
        i--;
        continue;
      }
      //rows
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length - 1; k++) {
          if (arr[j][k] === arr[j][k + 1] && arr[j][k] === "x") {
            determin_winner++;
          }
        }
        if (determin_winner === arr.length - 1) {
          console.log(arr);
          return "Player 1 win";
        }
        determin_winner = 0;
        for (let k = 0; k < arr.length - 1; k++) {
          if (arr[j][k] === arr[j][k + 1] && arr[j][k] === "0") {
            determin_winner++;
          }
        }
        if (determin_winner === arr.length - 1) {
          console.log(arr);
          return "Player 2 win";
        }
        determin_winner = 0;
      }
      //columns
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length - 1; k++) {
          if (arr[k][j] === arr[k + 1][j] && arr[k][j] === "x") {
            determin_winner++;
          }
        }
        if (determin_winner === arr.length - 1) {
          console.log(arr);
          return "Player 1 win";
        }
        determin_winner = 0;
        for (let k = 0; k < arr.length - 1; k++) {
          if (arr[k][j] === arr[k + 1][j] && arr[k][j] === "0") {
            determin_winner++;
          }
        }
        if (determin_winner === arr.length - 1) {
          console.log(arr);
          return "Player 2 win";
        }
        determin_winner = 0;
      }
      //diagonals
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length - 1; k++) {
          if (arr[k][k] === arr[k + 1][k + 1] && arr[k][k] === "x") {
            determin_winner++;
          }
          if (determin_winner === arr.length - 1) {
            console.log(arr);
            return "Player 1 win";
          }
        }
        determin_winner = 0;
        for (let k = 0; k < arr.length - 1; k++) {
          if (
            arr[k][arr.length - 1 - k] === arr[k + 1][arr.length - k - 2] &&
            arr[k][arr.length - 1 - k] === "x"
          ) {
            determin_winner++;
          }
          if (determin_winner === arr.length - 1) {
            console.log(arr);
            return "Player 1 win";
          }
        }
        determin_winner = 0;
        for (let k = 0; k < arr.length - 1; k++) {
          if (arr[k][k] === arr[k + 1][k + 1] && arr[k][k] === "0") {
            determin_winner++;
          }
          if (determin_winner === arr.length - 1) {
            console.log(arr);
            return "Player 2 win";
          }
        }
        determin_winner = 0;
        for (let k = 0; k < arr.length - 1; k++) {
          if (
            arr[k][arr.length - 1 - k] === arr[k + 1][arr.length - k - 2] &&
            arr[k][arr.length - 1 - k] === "0"
          ) {
            determin_winner++;
          }
          if (determin_winner === arr.length - 1) {
            console.log(arr);
            return "Player 2 win";
          }
        }
        determin_winner = 0;
      }
    }
    console.log(arr);
    return "Draw";
  }
  console.log(tic_tac_toe(4));