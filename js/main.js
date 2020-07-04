function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function saveJSONToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get trip info from local storage OR initialize empty variables (global).
let fromValue = localStorage.getItem("fromValue")
  ? localStorage.getItem("fromValue")
  : "";
let toValue = localStorage.getItem("toValue")
  ? localStorage.getItem("toValue")
  : "";
let dateValue = localStorage.getItem("dateValue")
  ? localStorage.getItem("dateValue")
  : "";

// Load the steps from localStorage or initialize an empty list.
let steps = localStorage.getItem("steps")
  ? JSON.parse(localStorage.getItem("steps"))
  : [];
