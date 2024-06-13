# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

await is used to indicate that the JavaScript Runtime should "wait" or "pause" until the async function completes.
async indicates that it is an asynchronous function.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

Code is read sequentially.

- When do you use `async`?

The JavaScript runtime waits or pauses until teh async function completes.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

We use async on functions we want to pause or wait for a Promise to be returned.
You don't use await on functions that are not returning a Promise.

- How do you handle errors with `await`?

With a try/catch block.

- What do `try`, `catch` and `throw` do? When do you use them?

The try block calls functions who return a successful promise.  The catch block returns the Promise's 'reject' value.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

The code in the async function won't wait to execute.  The error gets logged even if the Promise is fulfilled.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

I like async/await because of less code.  Anonymous callback functions aren't as clear what the code is doing.  async/await you only need to specify the await keyword without chaining .then() and .catch methods to the function with a returned Promise.

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
