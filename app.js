const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000

app.get('/', (req, res) => {    
    res.send('Home')
})

app.listen(port, ()=> {
    console.log(`Runnin on port ${port}`)
})