# react-stopwatch-notes

## Notes

1) Create CSS circle
2) In the middle of the circle should be a variable with a value from the elapsed time.
3) Create two state variables:
  - One for elapsed time and one for the active interval ID
3) When the user clicks the play icon:
  - Start setInterval and setCount((prev) => prev + 1)
  - Change play icon to a pause icon
  - Stop the setInterval function
4) When the user clicks the pause icon:
  - Stop the setInterval function
  - Change the pause icon to a play icon
5) When the user clicks the stopwatch face and stopwatch is paused:
  - Change elapsed time to 0
