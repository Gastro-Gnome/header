const express = require('express');
const bodyParser = require('body-parser');
const getData = require('../db/index.js').getData;
const getOne = require('../db/index.js').getOne;
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '../public'));

app.get('/header', (req, res) => {
    //res.send('hey');
    getData((err, result) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            res.send(result);
        }
    })
});

app.get('/header/:id', (req, res) => {
    //console.log('hi');
    //console.log(req.url)
    const url = req.url.slice(8, req.url.length);
    console.log(url);
    getOne(url, (err, result) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            res.send(result);
        }
    })
})

app.listen(port, function(){
    console.log('Header Service listening on port ' + port);
})