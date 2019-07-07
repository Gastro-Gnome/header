const mongoose = require('mongoose');
const seed = require('./seed');
//const mongoSeedFaker = require("mongo-seed-faker")
mongoose.connect('mongodb://localhost/header', {useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', function(){
    console.log('Connected with Mongoose');
    
})

module.exports = db;