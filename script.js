var grid = document.createElement("div");
const gameBoard = document.querySelector("#gameBoard");

function createRow() {
  var element = document.getElementById("gameBoard");
  var row = document.createElement("div");
  row.setAttribute("id", "row");
  element.appendChild(row);
  return row;
}

function createCell(row, i, j) {
  var cell = document.createElement("div");
  cell.setAttribute("name", "cell");
  cell.setAttribute("id", "cell");
  cell.setAttribute("onmouseover", "randyColor(this)")
  cell.style.border = "1px solid black";
  row.appendChild(cell);
}

function randyColor(x) {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgbColor ="rgb(" + r + "," + g + "," + b + ")";
  console.log(rgbColor);
  x.style.backgroundColor = rgbColor;
}

function clearGrid() {
  for(let i = 0; i < cell.length; i++) {
    cell[i].style.backgroundColor = '#FFF';
  }
}

function resizeGrid() {
  clearGrid();
  gameBoard.innerHTML = "";
  let newSize = prompt("How many squares on each side of your Etch a Sketch?", "16");
  createGrid(newSize);
}

function createGrid(numRows) {
  //var grid = document.createElement("div");
  grid.setAttribute("name", "Grid");
  grid.setAttribute("id", "Grid");
  document.body.appendChild(grid);

  let numCols = numRows;
  for(let i = 0; i < numRows; i++) {
    let row = createRow();
    for(let j = 0; j < numCols; j++) {
      createCell(row, i, j);
    }
  }
}

createGrid(16);

