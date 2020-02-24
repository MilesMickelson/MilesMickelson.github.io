const express = require('express');
const morgan = require('morgan');
const compression = require('compression');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
}

app.use(compression({ filter: shouldCompress }));


app.get('/', (req, res) => {
  res.status(200);
});

app.get('*', (req, res) => {
  res.status(404).send('404 error: Sorry, no page was found at that address');
});

module.exports = app;
