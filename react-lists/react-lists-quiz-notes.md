# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?

You often don't know how much data you'll receive via an API or other fetched data.

- Why is it important for React components to be data-driven?

They are easy to maintain and feel more responsive. Components display the data and are instantly updated when data changes. Components are created/removed when data is created or deleted. Only update state when needed to. The user dictates when components will change.

- What `Array` method is commonly used to create a list of React components?

map() method.

- Why do components in a list need to have unique keys?

They let us uniquely identify an item between its siblings.

- What is the best value to use as a "key" prop when rendering lists?

Database keys/IDs. increment counter (crypto.randomUUID()) or a package like uuid.

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
