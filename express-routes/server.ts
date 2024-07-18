import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log('The date is', new Date());
  next();
});

app.get('/', (req, res, next) => {
  res.send('Welcome to the home page.');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('Welcome to the notes page.');
  next();
});

app.post('/notes/123', (req, res, next) => {
  res.send('POST request to /notes/123.');
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
