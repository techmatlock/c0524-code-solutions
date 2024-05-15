# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?

A special kind of object that is callable.

- Describe the parts of a function **definition**.

1. The function keyword
2. An optional name
3. A comma-separated list of zero or more parameters
4. The start of the function's code block
5. An optional return statement
6. The end of the function's code block.

- Describe the parts of a function **call**.

1. The function's name
2. A comma-separated list of zero or more arguments.

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?

A function call is the name of the function with parenthesis and the function definition is all the code that will be ran in the code block when the function is called.

- What is the difference between a **parameter** and an **argument**?

A parameter is optionally created during the function definition. An argument is optionally created during the function call.

- Why are function **parameters** useful?

We can use them as a placeholder when we need a variable whose value is not known until we call the function and pass an argument.

- What two effects does a `return` statement have on the behavior of a function?

1. Causes the function to produce a value we can use in our program.
2. Prevents any more code ein the function's code block from being run.

- What is the syntax for defining an arrow function?

No function keyword and arrow [=>] is used between the parameter list and code block.

const add = (num1, num2) => {
return num1 + num2;
};

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?

There's an implicit return statement so no return keyword is needed when defining the function.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
