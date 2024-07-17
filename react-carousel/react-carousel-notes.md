# react-carousel-component-notes

## Notes

1. Create a Carousel component which:

- Accepts image URLs via a prop. Props should be a string array.
- Uses state with state variable currentIndex and setter setCurrentIndex
- Uses setInterval to move to the next image every three seconds

2. Create a NextButton component

- Pass down a event handler prop to NextButton from Carousel which has a handleNext event handler.

3. Create a PrevButton component

- Pass down an event handler prop to PrevButton from Carousel ...

4. Create an Indicator component

- Pass prop currentIndex from Carousel to Indicator.
- Fill solid if index === currentIndex
- Pass event handler prop onClick which calls the event handler handleSelect to setCurrentIndex of indicator
