const express = require('express'); // Framework
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); // interpretação do json


app.use(bodyParser.json());


app.listen(port);