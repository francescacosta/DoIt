var add = document.getElementsByClassName('add')[0];
var inputBox = document.getElementsByClassName('input-box')[0];

//Functions
var toggleInput = function () {
  if (inputBox.style.display === "" || inputBox.style.display === "none") {
    inputBox.style.display = "unset";
  } else {
    inputBox.style.display = "none";
  }
}

add.onclick = function() {
  toggleInput();
}
