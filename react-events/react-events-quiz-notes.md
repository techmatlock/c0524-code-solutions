# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?

An action that we can listen to so that we can run some sort of code.

- What is an "event handler"? Which component declares the handler?

The event handler is the function that is called when an event occurs. The handler can be defined within the component itself or the parent component.

- How do you pass an event handler to a React component?

By passing a function on the "event handler prop" of the component that declared the event.

- What is the naming convention for event handlers?

Starts with the lowercase name 'handle' followed by the name of the event.

- What is an "event handler prop"? Which component declares the prop?

Event handler prop is a property on the component that declares the event. The parent declares the prop.

- What are some custom event handler props a component may wish to define?

onCaptionClick, onImageClick, onDescriptionClick, onSave, onCancel.

- What is the naming convention for custom event handler props?

onXxx where Xxx is the event.

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
