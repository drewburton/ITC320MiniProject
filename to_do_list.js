"use strict";

const $ = selector => document.querySelector(selector);

var list = $("#taskList");
var id = 1;

function addItem() {
    let entry = document.createElement('li'); //New list entry for the new task.
    let taskText = document.createElement('span'); //New Text span for the task portion.
    let dateText = document.createElement('span'); //New Text span for the due date portion.
    let deleteButton = document.createElement("button"); //New Button element for deleting the task.

    taskText.textContent = "Example Task #" + id; //Set dummy text (for now).
    dateText.textContent = "Due Date: 10/02/2023"; //Set dummy text (for now).
    deleteButton.textContent = "X"; //Button text

    taskText.setAttribute("id", "task" + id);
    dateText.setAttribute("id", "date" + id);

    //add a click event to remove the current item
    deleteButton.addEventListener("click", function () {
        entry.remove();
    });

    entry.appendChild(taskText);
    entry.appendChild(dateText);
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
    $("#add").addEventListener("click", addItem);
});