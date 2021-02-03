const express = require('express');
const app = express();
const json = express.json();
const PORT = 3000;
app.use(json);

const events = [
    {nume: 'meeting', ora: '12 20', ziua:"duminica", id: 1},
    {nume: 'intalnire', ora: '14 00', ziua:"duminica", id: 2},
    {nume: 'meeting', ora: '12 20',  ziua:"duminica", id: 3 }
]


app.get('/events', (req, res) => {
    res.send(events);
})


app.post('/events', (req, res) => {
    events.push({nume: 'event nou', ora: '12 20',  ziua:"LUNI"})
    console.log('aici')
    res.send(events);
})

app.get('/event/:id', (req, res) => {
    const id = req.params.id;
    const event = events.filter(obj => obj.id.toString() === id.toString());
    res.send(event[0]);
})


app.put('/event/:id', (req, res) => {
    const id = req.params.id;
    console.log(id, req.body);
    events.forEach((obj, index) => {
        if (obj.id.toString() === id.toString()) {
            events[index] = {
                ...obj,
                ...req.body
            }
        }
    })
    res.send(events);
})


app.post('/register', (req, res) => {
   res.send({ email: req.body.user })
})
app.post('/login', (req, res) => {
   res.send({ email: req.body.user })
})


app.post('/profile', (req, res) => {
  res.send({firstName: req.body.firstName})
})
app.put('/profile', (req, res) => {
  res.send( req.body )
})


const server = app.listen(PORT, () => { console.log(`server started at port ${PORT}`) });