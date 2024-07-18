import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log('The date is', new Date());
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the home page.');
});

app.get('/notes', (req, res) => {
  res.send('Welcome to the notes page.');
});

app.post('/notes/123', (req, res) => {
  res.send('POST request to /notes/123.');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
