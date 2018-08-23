const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'views')
  });
});

app.get('/userInfo', (req, res) => {
  const USER_NAME = 'kentcdodds';
  const API_URL = `https://api.github.com/users/${USER_NAME}`;

  axios.get(API_URL)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
