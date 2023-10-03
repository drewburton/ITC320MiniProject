"use strict";

const $ = selector => document.querySelector(selector);

var list = $("#taskList");
var id = 1;

function initialItems(){
    for(let i = 0; i < 3; i++){
        addItem("", "");
    }
}

function addItem(taskExample, dateExample) {
    let entry = document.createElement('li'); //New list entry for the new task.
    let taskText = document.createElement('span'); //New Text span for the task portion.
    let taskEntry = document.createElement('input');
    let dateText = document.createElement('span'); //New Text span for the due date portion.
    let dateEntry = document.createElement('input');
    let deleteButton = document.createElement("button"); //New Button element for deleting the task.

    taskText.textContent = "Task #" + id + ": "; //Set dummy text (for now).
    dateText.textContent = " Due Date: "; //Set dummy text (for now).
    taskEntry.textContent = taskExample;
    dateEntry.textContent = dateExample;
    deleteButton.textContent = "X"; //Button text

    deleteButton.className = "delete"
    taskText.setAttribute("id", "task" + id);
    dateText.setAttribute("id", "date" + id);

    //add a click event to remove the current item
    deleteButton.addEventListener("click", function () {
        entry.remove();
    });

    entry.appendChild(taskText);
    entry.appendChild(taskEntry);
    entry.appendChild(dateText);
    entry.appendChild(dateEntry);
    entry.appendChild(deleteButton);
    list.appendChild(entry);

    $("#task" + id).addEventListener("dblclick", task);
    $("#date" + id).addEventListener("dblclick", date);
    id += 1;
}

//Implement this function to be able to modify the task text.
function task() {
    console.log("TaskText");
}

//Implement this function to be able to modify the date text.
function date() {
    console.log("DateText");
}

document.addEventListener("DOMContentLoaded", () => {
    initialItems("","");
    $("#add").addEventListener("click", addItem);
});