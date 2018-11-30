const express = require('express');

// Mongoose Connection
const mongoose = require('./db');

// Variables
const app = express();
const port = 3001;

// Routes
const course = require('./routes/course');

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use('/courses', course);