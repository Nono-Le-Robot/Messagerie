var app = require('./app')

var http = require('http').Server(app);

//tttt

http.listen(function(){

  console.log('listening');

})