//1. Get Buttons and Input
var buttons = document.querySelectorAll("button");
var input = document.querySelector(".AddTask input");
var toDoList = document.querySelector(".ToDoTasks ul");


for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", taskManager);
    }

function taskManager() {
	if(this.id === "addButton") {
		addTask();

	} else if(this.id === "removeButton") {
		removeTask();
	} else if (this.id === "editButton") {
		editTask();
	} else {
		finishedTask();
	}
}
function addTask() {
	
	var li = document.createElement("li");
	var label = document.createElement("label");
	var checkbox = document.createElement("input");
	var textField = document.createElement("input");

	textField.type = "text";
	checkbox.type = "checkbox";
    label.innerHTML = input.value;

   	li.appendChild(label);
    li.appendChild(textField);
    li.appendChild(checkbox);
    toDoList.appendChild(li);
}

function removeTask() {

}

function editTask() {

}

function finishedTask() {

}




