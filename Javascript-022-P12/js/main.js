import { namesOne, namesTwo } from "./names.js";

const initApp = () => {
  document.getElementById("submitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    clearSuggestions();
    // generate names
    // display names
  });
};

document.addEventListener("DOMContentLoaded", initApp);

const clearSuggestions = () => {
  const display = document.getElementById("suggestionSection");
  if (!display.classList.contains("hidden")) display.classList.toggle("hidden");
  const list = document.querySelector(".suggestionSection ol");
  list.innerHTML = "";
  // how to use innerHTML and sanitize the input
};

const generateNames = () => {
  const randomNumberArr = [];
  for (let i = 0; i < 4; ) {
    const randomNumber = Math.floor(Math.random() * 10);
  }
};
