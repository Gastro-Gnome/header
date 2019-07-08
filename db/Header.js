const mongoose = require('mongoose');
const db = require('./index.js');

const restaurantSchema =  new mongoose.Schema({
	"claimed" : Boolean,
	"name" : String,
	"priceRating" : String,
	"tags" : String,
    "stars" : String,
    "address" : String,
    "latitude" : String,
    "longitude" : String,
    "phone" : String,
    "website" : String,
	//"reviews" : [reviewSchema]
})

const reviewSchema = new mongoose.Schema({
	"user" : String,
	"body" : String,
	"date" : String,
	"rating" : Number
})

/*
const googleSchema = new mongoose.Schema({
	"longitude" : Number,
	"latitude" : Number,
	"address" : String,
	"phone" : String,
	'website' : String
})
*/

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Restaurant, Review,
};