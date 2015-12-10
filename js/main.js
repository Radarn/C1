//1. Get Buttons and Input
var buttons = document.querySelectorAll("button");
var taskName = document.querySelector(".AddTask input");
var totalItems = 0;


for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", taskManager);
    }


function taskManager() {
	if(this.id === "addButton") {

		addTask(toDoListItem = document.querySelector(".ToDoTasks ul"));

	} else if(this.id === "editButton") {
		editTask();
	} else if(this.id === "doneButton") {
		doneTask();
	} else if(this.id === "removeButton") {
		removeTask();
	}

}

function checkboxStatus() {
	var itemNumber = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + itemNumber);

	if (this.checked) {
		itemText.style.textDecoration = "line-through";
	} else {
		itemText.style.textDecoration = "none";
	}
	

	

}

function addTask(list) {
	totalItems++;
	
	var li = document.createElement("li");
	var label = document.createElement("label");
	var checkbox = document.createElement("input");
	var textField = document.createElement("input");

	textField.type = "text";
	checkbox.type = "checkbox";
	checkbox.addEventListener("click", checkboxStatus);

	checkbox.id = "cb_" + totalItems;
	label.id = "item_" + totalItems;
	textField.id = "cb _" + totalItems;

    label.innerHTML = taskName.value;
    li.appendChild(label)
   	li.appendChild(textField);
    li.appendChild(checkbox);
    toDoListItem.appendChild(li);

    return toDoListItem;
}

function removeTask() {

}

function editTask() {

}

function doneTask() {
	alert("hej");
}


