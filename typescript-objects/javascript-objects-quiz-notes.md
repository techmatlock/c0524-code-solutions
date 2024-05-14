# typescript-objects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are objects used for?

Organizing data, reusability, encapsulation, prototypal inheritance, built-in objects.

- What are object properties?

They are containers that store values in the object.

- Describe object literal notation.

You use const followed by name of object with an equal sign. Then brackets. Then properties and their values separated with commas.

const player = {
firstName: 'Aaron',
lastName: 'Judge',
};

- How do you remove a property from an object?

Using the delete operator.

- What are the two ways to get or update the value of a property?

Dot notation and bracket notation.

- What is the purpose of interfaces in TypeScript?

To annotate your object with the types of data that will be used for each property.

- What are two different ways to describe the shape of an object in TypeScript?

Either using the keyword interface or type.

- How do optional properties in a TypeScript interface differ from mandatory properties, and why are they useful?

The optional properties have a question mark before the colon.
It allows us to create an object and skip assigning an optional property if we want to and the TypeScript compiler won't get mad.

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
