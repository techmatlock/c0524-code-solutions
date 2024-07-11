# react-stopwatch-notes

## Notes

1. Create CSS circle
2. In the middle of the circle should be a the state variable count which gets updated from the setInterval function.
3. Create three states:

- One for count, interval, and visibility of icons.

4. For the JSX elements:

- Add a onClick handler prop to stopwatch, play icon, and pause icon. Pass the count event handler functions to the event handler.

5. When the user clicks the play icon:

- Create an event handler function called handlePlay
- Use state to create a state variable intervalId and setIntervalId. The setInterval function should start a setCount function which takes the current state count and adds one second.
- Change the play icon to a pause icon in the JSX element with a ternary condition.

6. When the user clicks the pause icon:

- Create an event handler function called handlePause.
- Stop the setInterval function with clearInterval (and the intervalId).
- Change the pause icon to a play icon in the JSX element with a ternary condition.

7. When the user clicks the stopwatch face and stopwatch is paused:

- Create an event handler function called handleFace.
- Change state variable count to 0
