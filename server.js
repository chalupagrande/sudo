'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//FOR BLUEMIX
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

router.use((req,res,next)=>{
  next()
})

router.use(express.static('client'))
app.use('/', router)

app.post('/api', (req, res)=>{
  console.log(req.body)
  res.send("You typed this: " + req.body.value)
})

app.listen(port)
console.log(`listening on ${port}`)