const express = require('express')
const  app = express()
const mongoose = require('mongoose');

mongoose.promise=global.Promise;
mongoose.connect();

app.get('/', function (req, res) {
  res.send('my first app in node farhan mangi')
})

app.listen(8080,()=>
{
    console.log('listing on port 8080')
})