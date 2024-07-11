# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

Once the component is called. React mounts a component to the DOM the first time it become visible.

- What is a React Effect?

A function that runs after the component is rendered. When it runs as a result of rendering.

- When should you use an Effect and when should you not use an Effect?

You should use effects to step out of your react code and synchronize with some external system (browser APIs, third-party widgets, and network).

If you are just adjusting state or not needing to connect to an external system, then effects are not needed.

- When do Effects run?

After the first render, dependencies change, and after screen updates.

- What function is used to declare an Effect?

useEffect hook.

- What are Effect dependencies and how do you declare them?

An array of values that the effect depends on (listen for state changes). You declare them inside brackets as the second argument after the setup function in useEffect.

- Why would you want to clean up from an Effect?

Avoids memory leaks.

- How do you clean up from an Effect?

You return the cleanup function. e.g. removeEventListener('event', callback fn).

- When does the cleanup function run?

When the component is removed from the page (unmounts).

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
