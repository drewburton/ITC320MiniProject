"use strict";

const $ = selector => document.querySelector(selector);

var list = $("#taskList");
var id = 1;

class ToDoItem {
    constructor(startingTaskText, startingDateText, id) {
        //Construct object using passed parameters.
        this.startingTaskText = startingTaskText;
        this.startingDateText = startingDateText;
        this.id = id;

        //Create HTML elements for the To-do Item.
        this.entry = document.createElement('li'); //New list entry for the new task.
        this.taskText = document.createElement('span'); //New Text span for the task portion.
        this.taskEntry = document.createElement('input'); //Input to store the task text.
        this.dateText = document.createElement('span'); //New Text span for the due date portion.
        this.dateEntry = document.createElement('input'); //Input to store the date text.
        this.deleteButton = document.createElement("button"); //New Button element for deleting the task.
    }

    buildItem(){
        this.taskText.textContent = "Task #" + this.id + ": "; //Set dummy text (for now).
        this.dateText.textContent = " Due Date: "; //Set dummy text (for now).
        this.taskEntry.defaultValue = "Double Click to Edit";
        this.taskEntry.value = this.startingTaskText;
        this.dateEntry.value = this.startingDateText;
        this.deleteButton.textContent = "X"; //Button text

        this.deleteButton.className = "delete"
        this.taskEntry.disabled = true;
        this.dateEntry.disabled = true;
        this.dateEntry.setAttribute("type", "date");

        //add a click event to remove the current item
        this.deleteButton.addEventListener("click", () => {
            this.entry.remove();
        });

        this.taskEntry.addEventListener("dblclick", () => {
            this.taskEntry.disabled = false;
            this.taskEntry.focus();
        });
    
        this.taskEntry.addEventListener("focusout", () => {
            this.taskEntry.disabled = true;
            if(this.taskEntry.value.length == 0){
                this.taskEntry.value = "Double Click to Edit"
            }
        });
    
        this.dateEntry.addEventListener("dblclick", () => {
            this.dateEntry.disabled = false;
            this.dateEntry.focus();
        });
    
        this.dateEntry.addEventListener("focusout", () => {
            this.dateEntry.disabled = true;
        });
    
        this.entry.appendChild(this.taskText);
        this.entry.appendChild(this.taskEntry);
        this.entry.appendChild(this.dateText);
        this.entry.appendChild(this.dateEntry);
        this.entry.appendChild(this.deleteButton);
    }

    addItemToList(list){
        list.appendChild(this.entry);
    }
}

function initialItems(){
    let tasks = ["Do Homework", "Do Laundry", "Clean Dishes", "Watch TV", "Update Computer"];
    let dueDates = ["2023-10-23", "2023-10-25", "2023-10-24", "2023-10-27", "2023-10-30"];
    for(let i = 0; i < 5; i++){
        addItem(tasks[i], dueDates[i]);
    }
}

function addItem(taskExample, dateExample) {
    let toDoItem = new ToDoItem(taskExample, dateExample, id);
    toDoItem.buildItem();
    toDoItem.addItemToList(list);
    id++;
}

function addBlankItem(){
    addItem("Double Click to Edit","");
}

document.addEventListener("DOMContentLoaded", () => {
    initialItems("","");
    $("#add").addEventListener("click", addBlankItem);
});