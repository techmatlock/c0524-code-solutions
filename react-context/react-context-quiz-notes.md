# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

To allow data to be managed by one component but easily shared with multiple components.

- What values can be stored in context?

Strings, functions, arrays, numbers, objects

- How do you create context and make it available to the components?

You create a context provider which is wrapped around your parent component and its child components.

- How do you access the context values?

By using the useContext hook, pass a context value, and assigning it to a variable.

- When would you use context? (in addition to the best answer: "rarely")

When a component is located on every page and you don't want to pass props to children components to render new updates on each page you visit.

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
