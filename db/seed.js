const mongoose = require('mongoose');
var faker = require('faker');
const db = require('./index.js').db
const Restaurant = require('./Header').Restaurant;

const restaurantEntries = [];

var generateReviews = function(){ //generate reviews '2019-06-30'
    const reviewEntries = [];
    const random = Math.floor(Math.random() * (500 - 250)) + 250;
    for(var i = 0; i < random; i++){
        reviewEntries.push({"date" : faker.date.between('2015-01-01', '2019-06-30'), "rating" : faker.random.number({min:1, max:5})})
    }
    //console.log(reviewEntries.length);
    return reviewEntries;
}
const restaurantNames = [
    'archive-bar-and-kitchen-san-francisco',
    'the-lavender-fox',
    'the-harborview-flower',
    'the-jungle-salmon',
    'the-electric-fish',
    'the-island-victory',
    'vista',
    'lavender',
    'the-gallery',
    'gastrognome',
    'acapella',
    'the-nifty-factory',
    'the-sailing-exchange',
    'the-copper-commander',
    'the-underwater-room',
    'the-harborview-lane',
    'paramount',
    'fluorescence',
    'intermezzo',
    'blueprint',
    'podium',
    'the-glass-bay',
    'the-coriander-garden',
    'the-island-shrimp',
    'the-juniper-lane',
    'the-cocoa-monument',
    'the-grand-fish',
    'the-japanese-after-dark',
    'maximus',
    'bambino',
    'candle',
    'the-sugar-boulevard',
    'the-harmonic-beehive',
    'the-coriander-wharf',
    'the-southern-afternoon',
    'the-kings-boar',
    'bounty',
    'twilight',
    'the-chili-angel',
    'modesty',
    'pavilion',
    'the-jade-boulevard',
    'the-amber-saloon',
    'the-malt-beehive',
    'the-autumn-dragon',
    'the-queens-orchid',
    'clarity',
    'the-noodle-cottage',
    'bones',
    'lily',
    'the-crown',
    'the-pepper-grill',
    'the-electric-diner',
    'the-jungle-block',
    'the-corner-view',
    'the-proud-elephant',
    'roots',
    'streetwise',
    'the-spring-lighthouse',
    'the-emperor',
    'the-peacock',
    'the-incredible-exhibit',
    'the-pearl-moments',
    'the-magical-brothers',
    'the-shining-night',
    'the-first-willow',
    'the-depot',
    'indigo',
    'retro',
    'prospects',
    'meadows',
    'the-summer-scarf',
    'the-paradise-oriental',
    'the-island-goddess',
    'the-bright-pizzeria',
    'the-square-beehive',
    'chance',
    'ivy',
    'whisperwind',
    'glasshouse',
    'after-dark',
    'the-cocoa-goat',
    'the-incredible-horse',
    'the-harlequin-knight',
    'the-court-walk',
    'the-chili-lane',
    'serenity',
    'shambles',
    'charm',
    'phish-shack',
    'rogue',
    'the-coriander-maple',
    'the-bamboo-lane',
    'the-square-door',
    'the-delhi-orchard',
    'the-cocoa-junction',
    'solitude',
    'catch',
    'happening',
    'chapter',
  ];
  
const prices = ["$", "$$", "$$$", "$$$$", "$$$$$"]
for(var i = 0; i < 100; i++){//generate restaurants
    restaurantEntries.push({"name" : restaurantNames[i], "priceRating" : prices[faker.random.number({min:0, max:4})],"tags" : faker.random.word() + ", " + faker.random.word(), "address" : faker.address.streetAddress(), "latitude" : faker.address.latitude(), "longitude" : faker.address.longitude(), "phone" : faker.phone.phoneNumberFormat(1), "website" : faker.internet.url(), "number" : i, "reviews" : generateReviews()})
}

const insertRestaurant = function(){
    Restaurant.create(restaurantEntries, function (err, small) {
        if (err) console.log(err);
        else{
            mongoose.connection.close();
        }
      });
};

insertRestaurant();
