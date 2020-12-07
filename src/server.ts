import express = require("express");
import { PROBE, ICoordinates } from "./classes/probe";

const app = express();

app.get('/', (req, res) => {
    // body: none
    // response: { value: string } as JSON
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200);
    res.send({ value: 'Hello, World!' });
});

app.get('/api/probe', (req, res) => {
    // body: none
    // response: ICoordinates as JSON
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200);
    res.send(PROBE.getCoordinates());
});

app.put('/api/probe', (req, res) => {
    // body: ICoordinates as JSON
    // response: success: boolean
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log('req.body', req.body);
    res.status(200);
    res.send({ success: true });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
