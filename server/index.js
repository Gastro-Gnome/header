const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('../public'));

app.get('/', (req, res) => {
  res.end('hey');
});

app.listen(port, function(){
    console.log('Header Service listening on port ' + port);
})