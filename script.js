var grid = document.createElement("div");

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

 /*
 const container = document.getElementById("container");
  let randyRGB = randomRGB();

  function randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgbColor ="rgb(" + r + "," + g + "," + b + ")";
    console.log(rgbColor);
    return rgbColor;
}
  function makeRows(rows, cols) {
      container.style.setProperty('grid-rows', rows);
      container.style.setProperty('grid-cols', cols);
      for (let c = 0; c < (rows * cols); c++) {
          let cell = document.createElement("div");
          
          cell.innerText = (c + 1);
          cell.classList.add("griditem");
         griditem.setAttribute("onmouseover", randomRGB())
         cell.appendChild(griditem);
          container.appendChild(cell);
          
      };
      
  };

  /*
  griditems = document.querySelectorAll(".griditem")

  function addHover() {
    griditems.forEach((griditem) => {
      griditem.addEventListener("mouseover", function (event) {
        event.target.classList.add("hover");
      })
    })
  }

/*

function test() {
  var mytest = document.getElementById("tester")
  var cells = document.createElement("div")
  cells.setAttribute()

  mytest.appendChild(cells);

}


/*



document.getElementsByClassName("griditem").addEventListener("mouseover", mouseOver);
document.getElementsByClassName("griditem").addEventListener("mouseout", mouseOut);

function mouseOver() {  
  document.getElementsByClassName("griditem").style.background = "red";
}

function mouseOut() {
  document.getElementsById("container").style.background = "blue";
}
  

*/

  
  /*
  document.getElementByClassName("grid-item").addEventListener("mouseenter", mouseEnter);
  document.getElementByClassName("grid-item").addEventListener("mouseleave", mouseLeave);
  
  function mouseEnter() {
    grid-item.style.background = randomRGB();
  }
  



 
  
  console.log('hello');
  makeRows(16, 16);

   */