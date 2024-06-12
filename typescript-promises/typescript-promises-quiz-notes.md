# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

Promises in JS follow a EQM where callback functions associated with asynchronous operations are placed into a queue when the operation completes.

- What are the three states a Promise can be in?

Pending, fulfilled, rejected.

- How do you handle the fulfillment of a Promise?

By using the .then() method to the Promise object. The method takes a callback function that will be called when the Promise is resolved.

- How do you handle the rejection of a Promise?

By attaching a .catch() method to the Promise object. The method is used to define a callback that will be executed if the Promise is rejected.

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
