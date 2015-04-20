var SerialPort = require("serialport").SerialPort;
var serialport = new SerialPort("/dev/cu.usbmodemfd121", {
            baudrate: 9600,
            dataBits: 8, 
            parity: 'none', 
            stopBits: 1, 
            flowControl: false 
            });

var express = require('express');
var app = express();

app.get('/nein', function(req, res) {
    serialport.write('n');
    res.send('nein');
});

app.get('/doch', function(req, res) {
    serialport.write('d');
    res.send('doch');
});

app.get('/ohhh', function(req, res) {
    serialport.write('o');
    res.send('ohhh');
});

serialport.open(function(error) {
    if (error) {
        console.log('Error while opening the port ' + error);
        process.exit();
    }
    
    app.listen(3000, function () {
    });
});

