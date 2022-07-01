var app = require('./app')

var http = require('http').Server(app);


http.listen(function(){

  console.log('listening');

})