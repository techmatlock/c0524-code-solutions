# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?
    Executes a provided function once for each array element
  - What should the callback function do?
    Execute on each element. Its return value is discarded.
  - What is `Array.forEach` useful for?
    For not returning any value. Not creating a copy.
- `Array.map`:
  - What does `Array.map` do?
    Creates a new array populated with the results of calling a provided function on every element in the calling array.
  - What should the callback function return?
    A new array with each element being the result of the callback function.
  - What is `Array.map` useful for?
    When you don't want to mutate the original array. When you want a return value from the callback function.
- `Array.find`:
  - What does `Array.find` do?
    Returns the value of the first element in the array that satisfies the testing function.
  - What should the callback function return?
    The value of the first element in the array that satisfies the testing function; otherwise, undefined.
  - What is `Array.find` useful for?
    When you want to get an element with a truthy value from the provided array.
- `Array.filter`:
  - What does `Array.filter` do?
    Creates a new array with all elements that pass the test implemented by the provided function.
  - What should the callback function return?
    A new array with the elements that pass the test. If no elements pass, an empty array will be returned.
  - What is `Array.filter` useful for?

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
