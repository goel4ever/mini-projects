const express        = require('express');
const bodyParser     = require('body-parser');  // Parses incoming request bodies

// Configs
const configs = require('dotenv').config();
if (configs.error) {
  console.log(configs.error);
} else {
  console.log(configs.parsed);
}

// App Init
const app            = express();
const PORT = 8000;

// tells express to accept both JSON and url encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(PORT, () => {
  console.log('We are live on ' + PORT);
});
