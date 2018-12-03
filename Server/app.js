const express = require('express');
const bodyParser = require('body-parser');

// Mongoose Connection
const mongoose = require('./db');

// Variables
const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST,GET,OPTIONS,DELETE,PUT");
    next();
})
// Routes
const course = require('./routes/course');

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/courses', course);