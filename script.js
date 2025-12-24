const gridContainer = document.querySelector(".grid-container");

function createGrid(length, width) {
  const numOfGrids = width ? length * width : length * length;
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
