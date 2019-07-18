const mongoose = require('mongoose');
const mongoUri = 'mongodb://172.17.0.2:27017/header';
//const mongoUri = 'mongodb://172.17.0.2/header';

//mongoose.connect('mongodb://localhost/header', {useNewUrlParser: true});
const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
const Restaurant = require('./Header').Restaurant;

var getData = function(cb){
    console.log('GET DATA from db/index.js')
    Restaurant.find({"number" : Math.floor(Math.random() * (100))})
        .then((data) => cb(null, data))
}

var getOne = function(id, cb){
    console.log('GET with id: ' + id + ' from db/index.js');
    Restaurant.find({_id : id})
        .then((data) => cb(null, data))
}
/*
db.once('open', function(){
    console.log('Connected with Mongoose');
})
*/
/*
Restaurant.insertMany(seed.restaurantEntries, function(err, docs){

})
Restaurant.insertMany(seed.reviewEntries, function(err, docs){
    
})
*/
module.exports = {
    db, getData, getOne
};