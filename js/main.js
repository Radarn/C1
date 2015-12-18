//1. Get Buttons and Input
var buttons = document.querySelectorAll("button");
var taskName = document.querySelector(".AddTask input");
var totalItems = 0;
var todoList = document.querySelector(".ToDoTasks ul");
var completedList = document.querySelector(".FinishedTasks ul");



for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", taskManager);
    }


function taskManager() {
	if(this.id === "addButton") {

		addTask();

	}  else if(this.id === "editButton") {
		editMode();
	 } else if(this.id === "doneButton") {
		doneTasks();
	} else if(this.id === "removeButton") {
		removeTask();
	} else if(this.id === "finishButton") {
		finishTask();
	}

}

function checkboxStatus() {
	var id = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + id);
	var editText = document.getElementById("edit_" + id);

	if (this.checked === true) {
		itemText.className = "checked";	
	} else if (this.checked === false)
		itemText.classList.remove("checked");
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
	textField.className = "closed";

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

function editMode() {

	var listItems = document.querySelectorAll('input');

	for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
            	var x = listItems[i].parentElement.getElementsByClassName('checked');
				var itemNumber = x[0].id.replace("item_", "");
			 
           }
   		}
    }
   
    for (var a = 1; a <= itemNumber; a++) {
    	var listItemCheckbox = document.getElementById("cb_" + a);
		var listItems = document.getElementById('edit_' + a);
		
		var label = document.getElementById("item_" + a);
		
		if (listItems.style.display === "none" && listItemCheckbox.checked === true) {
			listItems.value = label.innerHTML;
			listItems.style.display = "";
			label.classList.remove("checked");
			listItems.classList.remove("closed");

		} else if (listItems.style.display === "" && listItemCheckbox.checked === true) {
			label.innerHTML = listItems.value;
			listItems.style.display = "none";
			label.classList.remove("checked");
			listItems.classList.add("closed")
		}
}	
	var listItemCheckboxFalse = document.querySelectorAll("input[type=checkbox");
	for (var a = 0; a < listItemCheckboxFalse.length; a++) {			
		if (listItemCheckboxFalse[a].checked === true) {			
			listItemCheckboxFalse[a].checked = false;
			
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
	// Försöker hitta lösning så att det inte går att skicka iväg ett element som befinner sig i editMode
	//Just nu fungerar det endast med första elementet.. Måste hitta unik identifier eller liknande.
 var listItems = document.querySelectorAll('input');
 var textOpen = document.querySelectorAll(".ToDoTasks input[type=text]");
	for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
            	var x = listItems[i].parentElement.getElementsByClassName('closed');
				var itemNumber = x[0].id.replace("item_", "");
				completedList.appendChild((listItems[i].parentElement));
				listItems[i].checked = false;
			 
           }
   		}
    }
}