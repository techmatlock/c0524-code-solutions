# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

The element that the event was fired on.

- What is the effect of setting an element to `display: none`?

The element is hidden.

- What does the `element.matches()` method take as an argument and what does it return?

the selector string. It returns a boolean value.

- How can you retrieve the value of an element's attribute?

getAttribute method.

- At what steps of the solution would it be helpful to log things to the console?

In the callback function.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

You would have to add event listeners on each tab and then change the view in the callback function.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

You would have to query the DOM for each view and save the reference to variables

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
