const tileContainer = document.getElementById("tile-container");

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
    }
  }
}
