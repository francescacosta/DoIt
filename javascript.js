var add = document.getElementsByClassName('add')[0];
var inputBox = document.getElementsByClassName('input-box')[0];
var toDo = document.getElementsByClassName('toDo')[0];
var completedToDo = document.getElementsByClassName('completed-to-do')[0];
var overlay = document.getElementsByClassName('overlay')[0];
var completed = document.getElementsByClassName('completed')[0];
var current = document.getElementsByClassName('current')[0];

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

var addItem = function(e) {
  var randomId = Math.floor(Math.random() * 10000);

  if (toDo.children.length >= 14) {
    inputBox.value = 'Task Limit Reached!'
    return;
  }

  if (e.keyCode === 13) {
    toDo.insertAdjacentHTML('afterbegin', `<li id="${randomId}"> <input class="checkbox" type="checkbox" onclick='checkedBox(this);'> <span onclick="deleteToDo('${randomId}')">${inputBox.value}</span> </li>`);
    inputBox.value = '';
  }
}

function checkedBox(cb) {
  var li = cb.parentElement;
  cb.outerHTML = '';
  completedToDo.append(li);
  completedToDo.style.display = "none";
}

//Events
completed.onclick = function() {
  toDo.style.display = "none";
  completedToDo.style.display = "block";
}

current.onclick = function() {
  toDo.style.display = "block";
  completedToDo.style.display = "none";
}

add.onclick = function() {
  toggleInput();
}
