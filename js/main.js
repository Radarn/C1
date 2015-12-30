//My first program ever written so please be kind!

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

var getItemsCount = function(){
	var ul = document.getElementById('ToDoTasks');
	var items = ul.querySelectorAll('li');
	if(items){
	var count = items.length;
	return count;
	} else {
		return;
	}


}

var clearInput = function(){
	var input = document.getElementById('task');
	input.value = "";
}

/*var addTodo = function(){

	var id = getItemsCount();

	var task = document.getElementById('task');
	var ul = document.getElementById('todos');
	var todoItem = document.createElement('li');
	todoItem.setAttribute('id','myId' + id);
		
	//Förhindra script
	todoItem.innerHTML = preventScripts(task.value);
	
	ul.appendChild(todoItem);
	
	createTodo(todoItem, id);

}*/
		

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

    clearInput();

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

	/*var id = getItemsCount();
	var listItem = document.querySelectorAll(".ToDoTasks input");
	for (var i = 0; i < listItem.length; i++) {
		var listItemEdit = document.getElementById("edit_" + id);
		var listItemsOkay = document.getElementById("cb_" + id);
		if (listItem[i].type === "checkbox") {
		if (listItem[i].checked === true) {
			listItemEdit.style.display = "";
		} else {
			listItemEdit.style.display = "none";
		}
	}
}
}*/
	/*var listItems = document.querySelectorAll('.ToDoTasks input');
	var listItems2 = document.querySelectorAll('.ToDoTasks input[type=text]');

	for (var i = 0; i < listItems.length; i++) {
		 if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
           	for (var a = 0; a < listItems2.length; a++) {
           		if (listItems2[a].className === "closed" && listItems[i].checked === true) {
           			listItems2[a].style.display="";
           			listItems2[a].classList.remove("closed");
           		} else if (listItems2[a].style.display === "") {
           			listItems2[a].classList.add("closed");
           			listItems2[a].style.display = "none";
           		}
           	 }
           }	
	} }
}*/
	
	var listItems = document.querySelectorAll('input');

	for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
            	var x = listItems[i].parentElement.getElementsByClassName('checked');
				var itemNumber = x[0].id.replace("item_", "");
			 
           }
   		}
    }

   // Blir inte dynamiskt eftersom att det blir fel id om man removar ett item... Kan inte hitta en lösning..
     	for (var a = 1; a <= itemNumber; a++) {
    	var listItemCheckbox = document.getElementById("cb_" + a);
		var listItems = document.getElementById('edit_' + a);		
		var label = document.getElementById("item_" + a);
		
		if (listItems !== null) {
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
}}
	var listItemCheckboxFalse = document.querySelectorAll("input[type=checkbox]");
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
 var label = document.querySelectorAll(".ToDoTasks label");

	for (var i = 0; i < listItems.length; i++ ) {
       if (listItems[i].type === 'checkbox') {
           if (listItems[i].checked === true) {
      
            	var x = listItems[i].parentElement.getElementsByClassName('closed');
				var itemNumber = x[0].id.replace("item_", "");
				for (var a = 0; a < label.length; a++) {
					label[a].classList.remove("checked");
				}
				completedList.appendChild((listItems[i].parentElement));
				listItems[i].checked = false;


           }
   		}
    }
}


