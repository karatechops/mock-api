import express from 'express';
import bodyParser from 'body-parser';
import users from './users';

const app = express();
app.use(bodyParser.json());

app.get('/api/servers', (req, res) => {
  res.status(200).send({ server: [
    { name: 'Barney', value: 50, color: 'light-3' },
    { name: 'Fred', value: 30, color: 'neutral-1' },
    { name: 'Wilma', value: 20, color: 'brand' },
    { name: 'Betty', value: 10, color: 'light-3' },
    { name: 'Bamm-Bamm', value: 5, color: 'neutral-1' },
  ] });
});

app.get('/api/users', (req, res) => {
  res.status(200).send({ users });
});

app.listen(3001, () => {
  console.log('Example app listening on port 3001!');
});
