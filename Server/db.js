const mongoose = require('mongoose');

// Variables
const server = "localhost:32768";
const db = "courses";
const connectionString = `mongodb://${server}/${db}`;

// Configure database 
mongoose.Promise = global.Promise;
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => console.log('Connection Successs'))
.catch(() => console.error('Not Connected'));

module.exports = mongoose;