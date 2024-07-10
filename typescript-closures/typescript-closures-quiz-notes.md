# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?

When the code is initially parsed (lexical scope). Not when it's executed.

- What allows JavaScript functions to "remember" variables from their surroundings?

Closures. Closures hold a reference to surrounding variables.

When the function is created it takes anything defined outside function and adds it to its backpack.

- What values does a closure contain?

Local variables, variables from outer function scope, and global variables.

- When is a closure created?

Every time a function is created.

- How can you tell if a function will be created with a closure?

Because it contains references to variables in its surrounding scope (outside its own scope).

- In React, what is one important case where you need to know if a closure was created?

When adding a function as a useEffect dependency.

## Notes

- A stale closure "captures" a variable but is not updated when the variable changes.
- An empty useEffect array dependency only runs once. useEffect is only running one time because of the 'Mounting' lifecycle.
