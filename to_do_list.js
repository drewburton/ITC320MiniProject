"use strict";

const $ = selector => document.querySelector(selector);

var list = $("#taskList");
var id = 1;

function initialItems(){
    let tasks = ["Do Homework", "Do Laundry", "Clean Dishes", "Watch TV", "Update Computer"];
    let dueDates = ["2023-10-23", "2023-10-25", "2023-10-24", "2023-10-27", "2023-10-30"];
    for(let i = 0; i < 5; i++){
        addItem(tasks[i], dueDates[i]);
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
    taskEntry.value = taskExample;
    dateEntry.value = dateExample;
    deleteButton.textContent = "X"; //Button text

    deleteButton.className = "delete"
    taskEntry.disabled = true;
    dateEntry.disabled = true;
    dateEntry.setAttribute("type", "date");

    //add a click event to remove the current item
    deleteButton.addEventListener("click", function () {
        entry.remove();
    });

    taskEntry.addEventListener("dblclick", function () {
        taskEntry.disabled = false;
        taskEntry.focus();
    });

    taskEntry.addEventListener("focusout", function (){
        taskEntry.disabled = true;
    });

    dateEntry.addEventListener("dblclick", function (){
        dateEntry.disabled = false;
        dateEntry.focus();
    });

    dateEntry.addEventListener("focusout", function (){
        dateEntry.disabled = true;
    });

    entry.appendChild(taskText);
    entry.appendChild(taskEntry);
    entry.appendChild(dateText);
    entry.appendChild(dateEntry);
    entry.appendChild(deleteButton);
    list.appendChild(entry);

    id += 1;
}

function addBlankItem(){
    addItem("","");
}

document.addEventListener("DOMContentLoaded", () => {
    initialItems("","");
    $("#add").addEventListener("click", addBlankItem);
});