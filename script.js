function createGrid(width, length, numOfCellsPerSide) {
  const grid = getGridState();
  resetGrid();

  width = width ? width : grid.width;
  length = length ? length : width;
  numOfCellsPerSide = numOfCellsPerSide
    ? numOfCellsPerSide
    : Math.sqrt(grid.totalCells);

  const totalCells = numOfCellsPerSide ** 2;
  const cellLength = width / numOfCellsPerSide;

  const gridContainer = document.querySelector(".grid-container");
  gridContainer.style.width = width + "px";
  gridContainer.style.height = length + "px";

  for (let i = 0; i < totalCells; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.style.width = cellLength + "px";
    div.style.height = cellLength + "px";
    div.addEventListener("mouseout", () => {
      div.classList.add("hovered-cell");
      div.style.backgroundColor = getRandomColor();
    });
    gridContainer.appendChild(div);
  }
  console.log(getGridState());
}

createGrid(300, undefined, 50);

const gridSizeBtn = document.querySelector(".grid-size");
gridSizeBtn.addEventListener("click", () => {
  let size = +prompt("Enter new grid size: ");
  createGrid(size);
});

const cellNumBtn = document.querySelector(".cell-number");
cellNumBtn.addEventListener("click", () => {
  let cellNum = 0;
  while (!cellNum || cellNum < 1 || cellNum > 100) {
    cellNum = +prompt("Enter number of cells per side (max: 100):");
  }
  createGrid(undefined, undefined, cellNum);
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

function getGridState() {
  const gridContainer = document.querySelector(".grid-container");
  const cell = document.querySelector(".cell");
  if (!gridContainer || !cell) {
    return undefined;
  }

  return {
    width: +gridContainer.style.width.slice(0, -2),
    height: +gridContainer.style.height.slice(0, -2),
    cellLength: +cell.style.width.slice(0, -2),
    totalCells: gridContainer.getElementsByTagName("div").length,
  };
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
