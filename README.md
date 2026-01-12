# 🎮 2048-Classic

**2048-Classic** is a simple web-based game built using **HTML, CSS, and JavaScript**. Slide numbered tiles on a 4x4 grid, combine them, and try to reach the **2048 tile**. The game tracks your score and updates tiles in real-time.

## 🌐 Demo

Open `index.html` in your browser to play the game.

## ✨ Features

- 4x4 grid gameplay
- **Arrow key controls** (Up, Down, Left, Right)
- Combine tiles with the same number
- Dynamic score tracking
- Randomly spawns new `2` tiles after each move

## 🕹 How to Play

1. Use the **arrow keys** to slide tiles in the chosen direction.
2. When two tiles with the same number touch, they **merge into one**.
3. The game ends when there are no empty spaces and no valid moves.
4. Try to reach the **2048 tile** to win!

## 💻 Installation

1. Download or copy the project files.
2. Open `index.html` in your web browser.

## 🗂 Code Overview

- `index.html` – Game structure
- `style.css` – Tile styling and layout
- `script.js` – Game logic and tile movement
  - `slideLeft()`, `slideRight()`, `slideUp()`, `slideDown()` handle tile movement
  - `slide()` merges tiles and updates score
  - `setTwo()` spawns new tiles
  - `updateTile()` updates the DOM based on tile values

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## 🤝 Contributing

Contributions are welcome! You can improve gameplay, UI, or add features like **Undo**, **Save Score**, or **High Score Tracking**.

## 📜 License

This project is open-source and free for personal or educational use.

## 👤 Author

**Fahim Faysal – Front-End Developer**

- GitHub: [https://github.com/FahimFaysalNirjhar](https://github.com/FahimFaysalNirjhar)
- Email: [fahimfaysal1995@gmail.com](mailto:fahimfaysal1995@gmail.com)
