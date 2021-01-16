const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes.routes');
require('./src/config/config');
//configura CORS
var cors = require('cors');



// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//Cors
app.use(cors());


app.use('/api/v1', routes);


// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});