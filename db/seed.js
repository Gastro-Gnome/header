const restaurantEntries = [];
const reviewEntries = [];
for(var i = 0; i < 100; i++){//generate restaurants
    restaurantEntries.push({"claimed" : faker.random.boolean(), "name" : faker.name.findName(), "priceRating" : faker.random.number({min:1, max:5}),"tags" : faker.random.words()})
}
for(var i = 0; i < Math.floor(Math.random() * (999)); i++){//generate reviews
    reviewEntries.push({"user" : faker.internet.userName(), "body" : faker.lorem.paragraph(), "date" : faker.date.between('2015-01-01', '2019-06-30'), "rating" : faker.random.number({min:1, max:5})})
}

for(var i = 0)
module.exports = {
    restaurantEntries, reviewEntries
}