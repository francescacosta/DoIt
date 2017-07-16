var add = document.getElementsByClassName('add')[0];
var inputBox = document.getElementsByClassName('input-box')[0];
var toDo = document.getElementsByClassName('toDo')[0];
var overlay = document.getElementsByClassName('overlay')[0];
//Functions
var toggleInput = function () {
  if (inputBox.style.display === "" || inputBox.style.display === "none") {
    inputBox.style.display = "unset";
    overlay.style.display = "unset";
    inputBox.focus();
  } else {
    inputBox.style.display = "none";
    overlay.style.display = "none";
  }
}

var deleteToDo = function(inputId) {
  document.getElementById(inputId).outerHTML = '';
}

add.onclick = function() {
  toggleInput();
}

var addItem = function(e) {
  var randomId = Math.floor(Math.random() * 10000);

  if (e.keyCode === 13) {
    toDo.insertAdjacentHTML('afterbegin', `<li id="${randomId}"> <input class="checkbox" type="checkbox"> <span onclick="deleteToDo('${randomId}')">${inputBox.value}</span> </li>`);
    inputBox.value = '';
  }
}
