const CELL_LENGTH = 10;

function createGrid(length, width) {
  resetGrid();
  const gridContainer = document.querySelector(".grid-container");
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

const newGrid = document.querySelector(".new-grid");
newGrid.addEventListener("click", () => {
  let size = +prompt("Enter new grid size: ");
  createGrid(size);
});

function resetGrid() {
  let gridContainer = document.querySelector(".grid-container");
  if (gridContainer) {
    gridContainer.remove();
  }
  gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  document.body.appendChild(gridContainer);
}
