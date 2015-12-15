//1. Get Buttons and Input
var buttons = document.querySelectorAll("button");
var taskName = document.querySelector(".AddTask input");
var totalItems = 0;
var isBoxChecked;
var todoList = document.querySelector(".ToDoTasks ul")
var completedList = document.querySelector(".FinishedTasks ul");


for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", taskManager);
    }


function taskManager() {
	if(this.id === "addButton") {

		addTask();

	} else if(this.id === "editButton" && isBoxChecked === true) {
		editTask();
	} else if(this.id === "doneButton" && isBoxChecked === true) {
		finishedTasks();
	} else if(this.id === "removeButton" && isBoxChecked === true) {
		removeTask();
	}

}

function checkboxStatus() {
	var itemNumber = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + itemNumber);
	var editText = document.getElementById("edit_" + itemNumber);


	if (this.checked) {
		itemText.style.textDecoration = "line-through";
		editText.style.display = "";
		return isBoxChecked = true;

	} else {
		itemText.style.textDecoration = "none";
		editText.style.display = "none";
		return isBoxChecked = false;
	}
}
		

function addTask() {
	totalItems++;
	
	var li = document.createElement("li");
	var label = document.createElement("label");
	var checkbox = document.createElement("input");
	var textField = document.createElement("input");

	textField.type = "text";
	checkbox.type = "checkbox";

	checkbox.addEventListener("click", checkboxStatus);
	checkbox.addEventListener("click", editTask);

	checkbox.id = "cb_" + totalItems;
	label.id = "item_" + totalItems;
	textField.id = "edit_" + totalItems;

	textField.style.display = "none";

    label.innerHTML = taskName.value;
    li.appendChild(label);
   	li.appendChild(textField);
    li.appendChild(checkbox);
    todoList.appendChild(li);

    return todoList;
}

function removeTask() {
	alert("Remove");

}

function editTask() {
	alert("edit");
	/*var editLabel = todoList.querySelector("label");
	var editInput = todoList.querySelector("input[type=text]")*/

}



function finishedTasks() {
	alert("Done");	
	completedList.appendChild(todoList);

}


