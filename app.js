const express = require('express');
const { dirname } = require('path');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/' + req.url);
  });

app.listen(3001, () => console.log('Estamos corriendo en el puerto 3001'));