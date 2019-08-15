const express = require('express')
const evts = require('./evts.js')
const app = express()
const PORT = process.env.PORT || 8080;

app.get('/events/:pid', async (req, res) => {
    let token = req.header('X-Opt-Token', '')
    let data = await evts.get(req.params.pid, token);
    let resp = {}
    data.forEach(function(evtData) {
        resp[evtData.key] = evtData.id;
    });
    res.setHeader('Content-Type', 'application/json');    
    res.send(resp)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))