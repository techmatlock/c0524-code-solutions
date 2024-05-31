'use strict';
let todos = [];
const previousTodosJSON = localStorage.getItem('javascript-local-storage');
console.log(previousTodosJSON);
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
window.addEventListener('beforeunload', () => {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
