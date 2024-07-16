# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

Create, Read, Update, and Delete

- How do you add a row to a SQL table?

Create (insert)

- How do you add multiple rows to a SQL table at once?

By specifying more than one tuple of values separated by commas.

- How do you update rows in a database table?

The update statement.

- How do you delete rows from a database table?

The delete statement.

- Why is it important to include a `where` clause in your `update` and `delete` statements?

To prevent deleting all rows.

- How do you accidentally delete or update all rows in a table?

By not using a where clause.

- How do you get back the modified row without a separate `select` statement?

Using the returning clause at the end.

- Why did you get an error when trying to delete certain films?

psql:puritanical.sql:4: ERROR: update or delete on table "films" violates foreign key constraint "film_actor_film_id_fkey" on table "castMembers"
DETAIL: Key (filmId)=(384) is still referenced from table "castMembers".

There's a filmId that has a foreign key associated with it in a different table.

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
