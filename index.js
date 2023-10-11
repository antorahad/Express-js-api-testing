const express = require('express');
const cors = require('cors')
const mobiles = require('./mobiles.json');
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/mobiles', (req, res) => {
    res.send(mobiles)
})
app.get('/mobiles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const mobile = mobiles.find(phone => phone.id === id) || {
        'data': 'false'
    };
    res.send(mobile);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})