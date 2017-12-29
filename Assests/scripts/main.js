


const gridNumber = document.getElementById("number");
const gridColorChanger = document.getElementById("color");
const container = document.querySelector(".container");
var gridColor = gridColorChanger.value;





function setGrid(gridSize){
  var gridBox;

  container.style.cssText = "grid-template-columns: repeat("+gridSize+",1fr);";
                             // grid-template-cols: repeat("+ gridY + ",1fr);";
  populateGrid(gridSize*gridSize);

  var boxs = container.querySelectorAll("div");
  boxs.forEach(box => {
    box.addEventListener("mouseenter",function(event){
      event.target.style.background = gridColor;
    });
  });
}

function populateGrid(totalBoxes){

  for(var i = 0;i<totalBoxes;i++){
    gridBox = document.createElement("div");

    container.appendChild(gridBox);

  }

}

function clearGrid(){
  while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


}

setGrid(gridNumber.value);

gridNumber.addEventListener("change",function(){
  clearGrid();
  setGrid(gridNumber.value);
})

gridColorChanger.addEventListener("change",function(){

  gridColor = gridColorChanger.value;

})
