const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cv = require('opencv4nodejs');


app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/camera_input', function (req, res) {
  console.log(req)
  res.send('Camera Input!')
})

app.post('/camera_input', function (req, res) {

  console.log(req.body)

  res.send('Camera Input!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))