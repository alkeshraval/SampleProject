var http = require('http');
var port = process.env.PORT || 8080;
var exports = module.exports = {};

var server = http.createServer(function (req, res) {
    console.log('starting server on port='+port);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
}).listen(port);

exports.stop = function(){
  server.close();
};
