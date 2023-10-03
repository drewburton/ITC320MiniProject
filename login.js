"use strict";

const $ = (selector) => querySelector(selector);

const login = () => {
	console.log("login");
}

document.addEventListener("DOMContentLoaded", () => {
	$("#login").addEventListener("click", login);
});