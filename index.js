const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json')

app.get('/', (req, res) => {
    res.send('cook-with-us is running')
})


app.listen(port, () => {
    console.log(`cook-with-us API is running on port:  ${port}`)
})