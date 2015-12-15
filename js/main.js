//1. Get Buttons and Input
var buttons = document.querySelectorAll("button");
var taskName = document.querySelector(".AddTask input");
var totalItems = 0;
var isBoxChecked;
var todoList = document.querySelector(".ToDoTasks ul");
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
		doneTasks();
	} else if(this.id === "removeButton" && isBoxChecked === true) {
		removeTask();
	} else if(this.id === "finishButton" && isBoxChecked === true) {
		finishTask();
	}

}

function checkboxStatus() {
	var itemNumber = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + itemNumber);
	var editText = document.getElementById("edit_" + itemNumber);


	if (this.checked) {
		itemText.style.textDecoration = "line-through";
		itemText.style.color = "#F5D76E";
		return isBoxChecked = true

	} else {
		itemText.style.textDecoration = "none";
		editText.style.display = "none";
		itemText.style.color = "#333";
		return isBoxChecked = false
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
	var listItems = document.querySelectorAll('input');
	for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
               todoList.removeChild((listItems[i].parentElement));
           }
       }     
   }
}

function editTask() {
	var labelText = document.querySelectorAll(".todoList label");
	var listItems = document.querySelectorAll('input');
	var editText = document.querySelectorAll("input[type=text]");
	for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
   
               for (var a = 0; a < editText.length; a++) {
					editText[a].style.display = "";	
               }
           }
       }     
   }
}

function finishTask() {
	var listItems = document.querySelectorAll('input');
    for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
               completedList.removeChild((listItems[i].parentElement));
           }
       }     
   }
}

 
function doneTasks() {
  var listItems = document.querySelectorAll('input');
   for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
               completedList.appendChild((listItems[i].parentElement));
           }
       }     
   }
}
