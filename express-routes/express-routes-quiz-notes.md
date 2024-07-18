# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

GET, PUT, POST, DELETE

No, it's not required but recommended to follow the convention.

- What is Express middleware?

A function that fulfills the requested action.

- What is Express middleware useful for?

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.

- How do you mount a middleware with an Express application?

By calling the use() method on the app object.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

request, response

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
