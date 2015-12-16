//1. Get Buttons and Input
var buttons = document.querySelectorAll("button");
var taskName = document.querySelector(".AddTask input");
var totalItems = 0;
var isBoxChecked;
var todoList = document.querySelector(".ToDoTasks ul");
var completedList = document.querySelector(".FinishedTasks ul");
var editButton = document.getElementById("editButton");
/*isEditButtonPressed = false;*/


for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", taskManager);
    }


function taskManager() {
	if(this.id === "addButton") {

		addTask();

	} /*else if(this.id === "editButton" && isBoxChecked === true) {
		isEditButtonPressed = true;
		editMode()
	 }*/else if(this.id === "doneButton" && isBoxChecked === true) {
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

	if (this.checked === true) {
		itemText.className = "checked";
		editButton.addEventListener("click", editMode(itemNumber));
		return isBoxChecked = true

	} else if(this.checked === false) {
		itemText.className = "unchecked";
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

function editMode(itemNumber) {
	
	alert(itemNumber)
	// Fundersam på om for loop är det rätta sättet här....
	// Måste på något sätt lösa så att inte alla inputs öppnas och stängs..
	// På något sätt skapa en identifierare för varje text block... Hmmm
	var listItems = document.getElementById('edit_' + itemNumber);
	var listItemCheckbox = document.querySelectorAll("input[type=checkbox]");
	
	if (listItems.style.display === "none") {
		listItems.style.display = "";
	} else if (listItems.style.display === "") {
		listItems.style.display = "none";
	}
	/*for (var i = 0; i < listItems.length; i++){

		if (listItems[i].style.display === "none") {
			listItems[i].style.display = ""
		} else {
			listItems[i].style.display = "none";
		}}*/
	for (var a = 0; a < listItemCheckbox.length; a++) {			
		if (listItemCheckbox[a].checked === true) {			
			listItemCheckbox[a].checked = false;
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
               listItems[i].checked = false;
           }
       }     
   }
}
