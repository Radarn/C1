//1. Get Buttons and Input
var buttons = document.querySelectorAll("button");
var input = document.querySelector(".AddTask input");
var toDoListItem = document.querySelector(".ToDoTasks ul");
var checkboxTrue = false;
var checkbox = document.querySelectorAll("input[type='checkbox']");

for (var i = 0; i < checkbox.length; i++) {
	checkbox[i].addEventListener("change", switchCheckTrue);
}

for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", taskManager);
    }


function taskManager() {
	if(this.id === "addButton") {
		addTask();

	} else if(this.id === "editButton" && checkboxTrue === true) {
		editTask();
	} else if(this.id === "doneButton" && checkboxTrue === true) {
		doneTask();
	} else if(this.id === "removeButton" && checkboxTrue === true) {
		removeTask();
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

//Check if checkbox is activated.
function switchCheckTrue() {
	if(checkboxTrue === false) {
		return checkboxTrue = true
	} else {
		return checkboxTrue = false
	}
		
}


/*function hej(toDoListItem) {
	var checkbox = toDoListItem.querySelector("input[type='checkbox']");

	checkbox.addEventListener("change", toDoListItem);
}*/ 

/*function switchCheckTrue() {
	if (checkbox.checked === true) {
        alert ("The check box is checked.");
    }
    else {
        alert ("The check box is not checked.");
    }
}*/    

