var add = document.getElementsByClassName('add')[0];
var inputBox = document.getElementsByClassName('input-box')[0];
var toDo = document.getElementsByClassName('toDo')[0];
//Functions
var toggleInput = function () {
  if (inputBox.style.display === "" || inputBox.style.display === "none") {
    inputBox.style.display = "unset";
    inputBox.focus();
  } else {
    inputBox.style.display = "none";
  }
}

add.onclick = function() {
  toggleInput();
}

var addItem = function(e) {
  if (e.keyCode === 13) {
    toDo.innerHTML += `<li> ${inputBox.value} </li>`;
    inputBox.value = '';
  }
}
