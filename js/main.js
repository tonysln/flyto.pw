function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function saveJSONToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function displayTripOptions() {
  // Display trip info on the page.
  document.querySelector("#fromInput").value = fromValue;
  document.querySelector("#toInput").value = toValue;
  document.querySelector("#dateInput").value = dateValue;
  document.querySelector("#fromLabel").textContent = fromValue;
  document.querySelector("#toLabel").textContent = toValue;
  document.querySelector("#dateLabel").textContent = dateValue;
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

// If variables are empty (new session) - automatically display the update info dialog.
if (!fromValue && !toValue && !dateValue) {
  new bootstrap.Modal(document.querySelector("#optionsMenu")).show();
}

// Display trip info (if there is any or not).
displayTripOptions();

document.querySelector("#updateOptions").addEventListener("click", (e) => {
  fromValue = document.querySelector("#fromInput").value;
  toValue = document.querySelector("#toInput").value;
  dateValue = document.querySelector("#dateInput").value;
  if (fromValue && toValue && dateValue) {
    saveToLocalStorage("fromValue", fromValue);
    saveToLocalStorage("toValue", toValue);
    saveToLocalStorage("dateValue", dateValue);
    displayTripOptions();
  }
});

document.querySelector("#clearTrip").addEventListener("click", (e) => {
  localStorage.clear();
  window.location.replace("/");
});
