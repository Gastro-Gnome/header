const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/header'
//mongoose.connect('mongodb://localhost/header', {useNewUrlParser: true});
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });
const Restaurant = require('./Header').Restaurant;

var getData = function(cb){
    console.log('GET DATA from db/index.js')
    Restaurant.find({name : "Harris, McDermott and Franecki"})
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
    db, getData
};