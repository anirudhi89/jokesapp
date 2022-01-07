const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
var port = process.env.PORT || 4000;

const { MongoClient } = require('mongodb').MongoClient;


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/jokes', (req, res) => {
    console.log(req.body)
})