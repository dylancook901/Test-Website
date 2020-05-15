// this code adds interaction to my button element
var myButtonEl = document.getElementById('myButton');
var name = "";
console.log("test");

function ButtonClicked() {
  // if statements ask a question that must resolve to true or false
   if (myButtonEl.style.backgroundColor == "blue") {
    myButtonEl.style.backgroundColor = "orange";
  } else {
    myButtonEl.style.backgroundColor = "blue";
  } 
  // background-color backgroundColor background_color
}
myButtonEl.addEventListener('click', ButtonClicked)
