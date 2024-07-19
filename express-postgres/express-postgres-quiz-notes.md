# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

To provide a PostgreSQL client for Node.js.

- How do you tell `pg` which database to connect to?

In the connectionString property of the new pg.Pool instance.

- How do you send SQL to PostgreSQL from your Express server?

By assigning sql code to a variable and then in your `db.query` method, add the variable as an argument.

- How do you get the rows return from the SQL query?

You take the response for the query and access the rows property.

- What must you always remember to put around your asynchronous route handlers? Why?

try/catch block. To catch thrown errors. We then use error handling middleware to report the error.

- What is a SQL Injection Attack and how do you avoid it in `pg`?

A user adds parameters in the HTTP request which is then inserted directly into our SQL code. We used parameterized queries by inserting the string $N (where N is an integer) where you want to insert values, and you provide an array of values.

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
