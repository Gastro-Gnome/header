const mongoose = require('mongoose');
const mongoUri = 'mongodb://172.17.0.2/header'; //for ec2

//const mongoUri = 'mongodb://172.17.0.2/header'; //for ec2
// const mongoUri = 'mongodb://172.17.0.2:27017/header'; //for local

//mongoose.connect('mongodb://localhost/header', {useNewUrlParser: true});
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
const Restaurant = require('./Header').Restaurant;

var getData = function(cb){
    console.log('GET DATA from db/index.js')
    Restaurant.find({"number" : Math.floor(Math.random() * (100))})
        .then((data) => cb(null, data))
}

var getOne = function(id, cb){//find one with defined id number from 1-100
    console.log('GET with number ' + id + ' from db/index.js');
    Restaurant.find({name : id})
        .then((data) => cb(null, data));
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