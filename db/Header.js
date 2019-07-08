const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	"user" : String,
	"body" : String,
	"date" : String,
	"rating" : Number
})

const restaurantSchema =  new mongoose.Schema({
	"name" : String,
	"priceRating" : String,
	"tags" : String,
    "stars" : String,
    "address" : String,
    "latitude" : String,
    "longitude" : String,
    "phone" : String,
    "website" : String,
	"reviews" : [reviewSchema]
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Restaurant, Review,
};