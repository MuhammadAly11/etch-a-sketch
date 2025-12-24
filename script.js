const gridContainer = document.querySelector(".grid-container");

function createGrid(length, width) {
  const numOfGrids = width ? length * width : length * length;
  const grid = [];
  for (let i = 0; i < numOfGrids; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseout", () => {
      div.classList.add("hovered-cell");
    });
    grid.push(div);
    gridContainer.appendChild(div);
  }
}

createGrid(16);
