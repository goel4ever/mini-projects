const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const requestPromise = require('request-promise');

const configs = require('dotenv').config();
if (configs.error) {
  console.log(configs.error);
} else {
  console.log(configs.parsed);
}

const app = express();
const PORT = 8001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/1/:city', (req, res) => {
  requestPromise({
    uri: 'http://apidev.accuweather.com/locations/v1/search',
    qs: {
      q: req.params.city,
      apikey: process.env.ACCU_WEATHER_PUBLIC_KEY
    },
    json: true
  }).then((data) => {
    res.send(data);
  });
});

app.get('/:city', (req, res) => {
  const options = {
    uri: 'http://apidev.accuweather.com/locations/v1/search',
    qs: {
      q: req.params.city,
      apikey: process.env.ACCU_WEATHER_PUBLIC_KEY
    },
    json: true
  };

  request(options, (err, resp, body) => {
    res.send(body);
  });
});

app.get('/states/:country_code', (req, res) => {
  const options = {
    uri: 'http://dataservice.accuweather.com/locations/v1/adminareas/' + req.params.country_code,
    qs: {
      apikey: process.env.ACCU_WEATHER_API_KEY
    },
    json: true
  };

  request(options, (err, resp, body) => {
    res.send(body);
  });
});

app.listen(PORT, () => {
  console.log('I am listening on port ', PORT);
});