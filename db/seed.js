const mongoose = require('mongoose');
var faker = require('faker');
const db = require('./index.js').db
const Restaurant = require('./Header').Restaurant;

const restaurantEntries = [];

var generateReviews = function(){ //generate reviews
    const reviewEntries = [];
    const random = Math.floor(Math.random() * (1000 - 10)) + 10;
    for(var i = 0; i < random; i++){
        reviewEntries.push({"date" : faker.date.between('2015-01-01', '2019-06-30'), "rating" : faker.random.number({min:1, max:5})})
    }
    //console.log(reviewEntries.length);
    return reviewEntries;
}

for(var i = 0; i < 100; i++){//generate restaurants
    restaurantEntries.push({"name" : faker.company.companyName(), "priceRating" : faker.random.number({min:1, max:5}),"tags" : faker.random.word() + ", " + faker.random.word(), "latitude" : faker.address.latitude(), "longitude" : faker.address.longitude(), "phone" : faker.phone.phoneNumberFormat(1), "website" : faker.internet.url(), "reviews" : generateReviews()})
}

const insertRestaurant = function(){
    Restaurant.create(restaurantEntries)
        //.then(()=> db.disconnect());
};

insertRestaurant();
