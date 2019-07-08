const mongoose = require('mongoose');
const seed = require('./seed');
const Restaurant = require('./Header').Restaurant;
const Review = require('./Header').Review;
const mongoUri = 'mongodb://localhost/header'
//mongoose.connect('mongodb://localhost/header', {useNewUrlParser: true});
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

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
module.exports = db;