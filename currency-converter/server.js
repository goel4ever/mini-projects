const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();

//const API_URL = 'http://api.fixer.io';
const API_URL = 'https://api.exchangeratesapi.io';
// const ANOTHER_RESOURCE_URL = 'http://free.currencyconverterapi.com/api/v5/convert?q=USD_INR&compact=y';

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'views')
  });
});
app.get('/rate/:date', (req, res) => {
  const date = req.params.date;
  const url = `${API_URL}/${date}?base=USD`;
  axios.get(url).then(response => {
    return res.json({ rates: response.data.rates });
  }).catch(error => {
    console.log(error);
  });

});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
