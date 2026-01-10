const tileContainer = document.getElementById("tile-container");
const scoreValue = document.getElementById("score");

let board;
let rows = 4,
  columns = 4,
  score = 0;

window.onload = setGame;

function setGame() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  tileContainer.innerHTML = "";

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      updateTile(tile, 0);
      tileContainer.append(tile);
    }
  }

  setTwo();
  setTwo();
}

function updateTile(tile, num) {
  tile.textContent = "";
  tile.className = "tile";

  if (num > 0) {
    tile.textContent = num;
    tile.classList.add(num <= 4096 ? `x${num}` : "x8192");
  }
}

document.addEventListener("keyup", (e) => {
  let oldBoard = JSON.stringify(board);

  if (e.code === "ArrowLeft") slideLeft();
  else if (e.code === "ArrowRight") slideRight();
  else if (e.code === "ArrowUp") slideUp();
  else if (e.code === "ArrowDown") slideDown();

  if (oldBoard !== JSON.stringify(board)) setTwo();

  scoreValue.textContent = score;
});

function slideLeft() {
  for (let r = 0; r < rows; r++) {
    let row = slide(board[r]);
    board[r] = row;
    for (let c = 0; c < columns; c++) {
      updateTile(document.getElementById(`${r}-${c}`), row[c]);
    }
  }
}

function slideRight() {
  for (let r = 0; r < rows; r++) {
    let row = slide(board[r].slice().reverse()).reverse();
    board[r] = row;
    for (let c = 0; c < columns; c++) {
      updateTile(document.getElementById(`${r}-${c}`), row[c]);
    }
  }
}

function slideUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      updateTile(document.getElementById(`${r}-${c}`), row[r]);
    }
  }
}

function slideDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row.reverse()).reverse();
    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      updateTile(document.getElementById(`${r}-${c}`), row[r]);
    }
  }
}

function filterZero(row) {
  return row.filter((num) => num !== 0);
}

function slide(row) {
  row = filterZero(row);

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  }

  row = filterZero(row);

  while (row.length < columns) row.push(0);

  return row;
}

function hasEmptyTitle() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] === 0) return true;
    }
  }
  return false;
}

function setTwo() {
  if (!hasEmptyTitle()) return;

  let found = false;
  while (!found) {
    let r = Math.floor(Math.random() * 4);
    let c = Math.floor(Math.random() * 4);
    if (board[r][c] === 0) {
      board[r][c] = 2;
      let tile = document.getElementById(`${r}-${c}`);
      updateTile(tile, 2);
      found = true;
    }
  }
}
