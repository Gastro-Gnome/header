const express = require('express');
const bodyParser = require('body-parser');
const getData = require('../db/index.js').getData;
const getOne = require('../db/index.js').getOne;
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(":id"+ __dirname + '/../public'));
app.use("/:id", express.static( __dirname + '/../public'));

app.use(bodyParser.text());

app.get('/header', (req, res) => {
    //res.send('hey');
    console.log('On server/index.js GET for all Restaurant Data')
    getData((err, result) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            //console.log(result)
            res.send(result);
        }
    })
});

app.get('/:id/header', (req, res) => {
    //console.log('hi');
    //console.log(req.url)
    console.log('On server/index.js GET for one Restaurant Data value')
    const url = req.url.slice(8, req.url.length-1);
    console.log(url);
    getOne(url, (err, result) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            //console.log(result)
            res.send(result);
        }
    })
})

app.listen(port, function(){
    console.log('Header Service listening on port ' + port);
})