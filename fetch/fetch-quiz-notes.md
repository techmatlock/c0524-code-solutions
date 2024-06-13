# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

A promise that resolves to the Response object representing the outcome of the request.

- What is the default request method used by `fetch()`?

GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

You pass the fetch function a second argument, a object { method: POST }

- How does `fetch` report errors?

It sets the ok property to false. So you need to check the response.ok property with the response handling logic.

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
