const CELL_LENGTH = 10;
const gridContainer = document.querySelector(".grid-container");

function createGrid(length, width) {
  width = width ? width : length;
  gridContainer.style.width = width * CELL_LENGTH + "px";
  gridContainer.style.height = length * CELL_LENGTH + "px";
  const numOfGrids = length * width;
  for (let i = 0; i < numOfGrids; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseout", () => {
      div.classList.add("hovered-cell");
    });
    gridContainer.appendChild(div);
  }
}

createGrid(16);
