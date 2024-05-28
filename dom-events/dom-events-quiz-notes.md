# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

To debug. Also to log expected output from the code we write.

- What is the purpose of events and event handling?

Events are actions or occurrences that happen in the browser.

- Are all possible parameters required to use a JavaScript method or function?

No.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener

- What is a callback function?

A function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?

Event

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

The element that is responsible for firing the event. You could get more information in the browser console by expanding the event object.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

The first snippet is not being called and only passing the function definition to addEventListener.
The second snippet is calling the callback function which is not correct.

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
