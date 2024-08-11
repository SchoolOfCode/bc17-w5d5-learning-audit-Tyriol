// Front end Javascript
// Retrieve modules and learnings from the api
// Create separated lists with the response
// Update the <h3> with the module name
// Create a list with the linked learnings

// URL to access the API from:
const URL = "http://localhost:3001";

// DOM nodes for manipulation
const moduleListing = document.querySelector(".module");
const displaySection = document.querySelector(".display");

async function getModules() {
  const response = await fetch(`${URL}/api/modules`);
  const { payload } = await response.json();
  payload.forEach((module) => {
    displaySection.innerHTML = module.module_name;
  });
}

getModules();
