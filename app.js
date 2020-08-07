const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 3000

const user = "you_email_server@email.com"
const passord = "123456"

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.server.com",
    port: 587,
    auth: {user, passord}
  })

  transporter.sendMail({
    from: user,
    to: user,
    replyTo: "person@email.com",
    subject: "Hello, Welcome!",
    html: "Hello, Thanks for subscribe in my website!"
  }).then((emitter) => {
    res.send(emitter)
  }).catch((error) => {
    res.send(error)
  })
})

app.listen(port, ()=> {
  console.log(`Runnin on port ${port}`)
})
