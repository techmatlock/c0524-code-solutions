# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

Special functions that allow components to have access to state and other React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. The function name must start with 'use' followed by and uppercase letter.
2. Hooks can only be called by React components and other hooks.
3. All hooks in a component must always be called at the top level of a component and in the same order.

- What is the purpose of state in React?

Allows React to store any values that will need to persist between component re-renders, and lets React know when it needs to schedule a component re-render.

- Why can't we just maintain state in a local variable?

The value of the local variable does not get updated by the setter function. The new value is cached by React and added to the component when re-rendered.

- What two actions happen when you call a `state setter` function?

When the state setter updates, React calculates the cache value.
React schedules a re-render (doesn't schedule immediately) of the App component.

- When does the local `state variable` get updated with the new value?

When React re-renders the component.

## Notes

How would you have all content be in sync?

By using a state setter function in the app component. And then adding index to each props value.
