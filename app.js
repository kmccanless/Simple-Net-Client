var net = require('net');
var host = process.argv[2];
var port = Number(process.argv[3]);

var client = net.connect({host : host , port: port});

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
