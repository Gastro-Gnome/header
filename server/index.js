const express = require('express');
const getData = require('../db/index.js').getData;
const app = express();
const port = 3000;

app.use(express.static('../public'));

app.get('/header', (req, res) => {
  //res.send('hey');
    getData((err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    })
});

app.listen(port, function(){
    console.log('Header Service listening on port ' + port);
})