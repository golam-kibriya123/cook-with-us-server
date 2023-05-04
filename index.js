const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const chef = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('cook-with-us is running')
})
app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const findByID = chef.find(chef => chef.id === id) || {};
    res.send(findByID)
})

app.listen(port, () => {
    console.log(`cook-with-us API is running on port:  ${port}`)
})