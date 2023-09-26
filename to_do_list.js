"use strict";

const $ = selector => document.querySelector(selector);

var list = $("#taskList");
var id = 1;

function addItem(){
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode("Example Task #" + id++ + " Due Date: 10/23/2023"));
    let deleteButton = document.createElement("button");
    //add a click event to remove the current item
    deleteButton.addEventListener("click", function() {
      entry.remove()
    });
    deleteButton.textContent = "X";
    entry.appendChild(deleteButton);
    list.appendChild(entry);
}

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addItem);
});
