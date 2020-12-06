"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.send({
        x: 12.12,
        y: 13.45,
        z: 45.89,
        f: 12.25
    });
});
app.listen(3000, function () { return console.log('Example app listening on port 3000!'); });
