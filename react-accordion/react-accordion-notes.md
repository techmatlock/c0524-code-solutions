# react-accordion-notes

## Notes

1. Create UI layout

- Use h3 and p JSX elements for Accordion title and content.

2. Determine which components will hold state

- The Accordion component should use state because it controls the props for the TopicCard components.
- Iterate over the topics array using map in the function return and render the TopicCard component for each topic.
- Use topic prop, isActive prop, and onClick event handler prop with an anonymous callback function that calls the handleClick event handler.
- handleClick event handler should receive one argument topic which will be used as the argument for the setter state function.
