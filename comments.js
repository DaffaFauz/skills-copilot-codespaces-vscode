// create web server
// create a route for comments
// create a route for comments/new
// create a route for comments/:id

var express = require('express');
var app = express();

// route for comments
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// route for comments/new
app.get('/comments/new', function(req, res) {
  res.send('This is the new comments page');
});

// route for comments/:id
app.get('/comments/:id', function(req, res) {
  res.send('This is the comments page for id ' + req.params.id);
});

app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});