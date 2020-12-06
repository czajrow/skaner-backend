import express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200);
    res.send({
        x: 12.12,
        y: 13.45,
        z: 45.89,
        f: 12.25,
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
