# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

To debug. Also, to print the expected values from code that we write.

- What is a "model"?

A tree of objects.

- Which "document" is being referred to in the phrase Document Object Model?

The document is the object.

- What is the word "object" referring to in the phrase Document Object Model?

The document.

- What is a DOM Tree?

Representing each element as a node in the tree.

- Give two examples of `document` methods that retrieve a single element from the DOM.

querySelector, getElementById

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll

- Why might you want to assign the return value of a DOM query to a variable?

To store the DOM element reference. Once the reference has been saved in a variable, accessing the element again does not require another search.

- What `console` method allows you to inspect the properties of a DOM element object?

The dir method.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?

A selector. It returns the first element that matches the CSS selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?

A selector. Returns a NodeList of elements in the document that match the CSS selector.

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
