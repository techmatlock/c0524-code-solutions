# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

Logical AND check for truthy values in variables and take action based on those checks.
Logical OR to set default values or take alternate actions when variables hold falsy values.

AND we get back second item if its truthy
OR we get first item if the second is falsy.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

The logical AND each operand gets converted to boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

?? operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

OR returns first value if second value is falsy.

OR will take falsy values.
?? only takes null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

It takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

?: you can use right side for a conditional check, if/else you cannot on the right side.

- What is the `?.` (optional chaining) operator? When would you use it?

Accesses an object's property or calls a function. Only if object is defined and value not null or undefined.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

Allows an iterable, such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.

For arrays, inside the brackets you use the dots followed by the array you want to spread.
For objects, inside the curly braces you use the dots followed by the object you want to spread.

- What data types can be spread into an array? Into an object?

For arrays: strings and numbers.

For objects: keys and value pairs.

- How does spread syntax differ from rest syntax?

Spread syntax is used to insert a new array or object.
Rest syntax allows a function to accept an indefinite number of arguments.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
