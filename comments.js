// Create web server
// To run the server: node comments.js
// To test the server: curl -X POST -d '{"comment": "This is a comment"}' -H "Content-Type: application/json" http://localhost:3000/comments

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
