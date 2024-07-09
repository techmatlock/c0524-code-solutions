# react-search-notes

## Notes

1. Create a SearchableList component to:

- Accept a list of strings as a prop called quotes
- parent of two components: search bar and list of items
- SearchableList be the component that uses state

2. The search bar component should have:

- an input JSX element
- get the e.currentTarget.value from the event handler onChange

3. The list component should have:

- a type Props with quotes
- render the list items from the quotes prop passed from SearchableList
- conditional to check if no items and display 'No items match the filter'
