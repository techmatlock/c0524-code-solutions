# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

When it is first added to the DOM and appears on the screen.

- What is a React Effect?

Let you specify side effects that are caused by rendering itself, rather than a particular event.

- When should you use an Effect and when should you not use an Effect?

You should use effects to step out of your react code and synchronize with some external system (browser APIs, third-party widgets, and network).

If you are just adjusting state and not needing to step outside your react code, then effects are not needed.

- When do Effects run?

After the first render and after every update.

- What function is used to declare an Effect?

useEffect

- What are Effect dependencies and how do you declare them?

An array of values that the effect depends on. You declare them inside brackets as the second argument after the callback function in useEffect.

- Why would you want to clean up from an Effect?

Avoids memory leaks.

- How do you clean up from an Effect?

Use the return statement.

- When does the cleanup function run?

When the component unmounts.

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
