var allButtons = document.querySelectorAll("button");
var input = document.querySelector("#input");

for (const button of allButtons) {
  button.addEventListener("click", changeInput);
}

function changeInput(event) {
  let clickedText = event.target.innerText;

  if (clickedText == "AC") {
    input.value = "";
  } else if (clickedText == "=") {
    input.value = eval(input.value);
  } else {
    input.value += clickedText;
  }
}
