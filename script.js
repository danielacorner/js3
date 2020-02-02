// GLOBAL objects available in the browser
// window
// document

// "." means "class"
// ".all-todos-container" means class="todos-container"
// document.querySelector(".all-todos-container") means grab class="all-todos-container"

// grab our todos container
const todosContainer = document.querySelector(".all-todos-container");

// CRUD

// Create
/////// Read

// TODO: buttons for...
// Update - edit the text inside a TODO item
// Delete - delete a todo item

// DOM manipulation (Document Object Model manipulation)
function createNewTodo(todoText) {
  // attach a new Todo element to the todosContainer

  const todoTemplateString = `
  <div class="todo-container">
    <span>TODO:</span>
    <span>${todoText}</span>
  </div>
  `;
  // const template = "<div>" + todoText + "</div>"

  // attaching the new todo to the innerHTML of the todosContainer
  todosContainer.innerHTML = todosContainer.innerHTML + todoTemplateString;

  // shortcut.school/vs-code#extensions
  // bracket pair colorizer 2
}

// Interactive Data Visualization for the Web
// D3 - data driven documents - wrapper on top of JavaScript - simplifies JavaScript
// https://doc.lagout.org/programmation/JavaScript/Interactive%20Data%20Visualization%20for%20the%20Web_%20An%20Introduction%20to%20Designing%20with%20D3%20%5BMurray%202013-04-05%5D.pdf

// PWA Progressive Web App
// very little setup, it makes a web app act and feel exactly like a native app
// https://multi-programming.com/blog/examples-of-progressive-web-apps-in-2019
