const tileContainer = document.getElementById("tile-container");
const scoreValue = document.getElementById("score");

let board;
let rows = 4,
  columns = 4,
  score = 0;

window.onload = setGame;

function setGame() {
  board = [
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [4, 4, 8, 8],
    [4, 4, 8, 8],
  ];

  tileContainer.innerHTML = ""; // clear old tiles

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      let num = board[r][c];
      tile.id = `${r}-${c}`;
      updateTile(tile, num);
      tileContainer.append(tile);
    }
  }
}

function updateTile(tile, num) {
  tile.textContent = "";
  tile.className = "tile";

  if (num > 0) {
    tile.textContent = num;
    if (num <= 4096) {
      tile.classList.add(`x${num}`);
    } else {
      tile.classList.add(`x8192`);
    }
  }
}

document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowLeft") {
    slideLeft();
  } else if (e.code === "ArrowRight") {
    slideRight();
  } else if (e.code === "ArrowUp") {
    slideUp();
  }
});
function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(`${r}-${c}`);
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function filterZero(row) {
  return row.filter((num) => num != 0);
}

function slide(row) {
  row = filterZero(row);
  console.log(row);

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
      scoreValue.textContent = score;
    }
  }
  row = filterZero(row);
  while (row.lenght < columns) {
    row.push(0);
  }
  return row;
}
function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row.reverse();
    row = slide(row);
    row.reverse();
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(`${r}-${c}`);
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c]];
    row = slide(row);
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(`${r}-${c}`);
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}
