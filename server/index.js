const express = require('express');
const app = express();
const PORT = 3000;

const events = [
    {nume: 'meeting', ora: '12 20', ziua:"duminica"},
    {nume: 'intalnire', ora: '14 00', ziua:"duminica"},
    {nume: 'meeting', ora: '12 20',  ziua:"duminica"}
]

app.get('/events', (req, res) => {
    res.send(events);
})


app.post('/events', (req, res) => {
    events.push({nume: 'event nou', ora: '12 20',  ziua:"LUNI"})
    console.log('aici')
    res.send(events);
})

const server = app.listen(PORT, () => { console.log(`server started at port ${PORT}`) });