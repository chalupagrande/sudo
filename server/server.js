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
const port = process.env.VCAP_APP_PORT || 3000;
const host = process.env.VCAP_APP_PORT || 'localhost';



router.use((req,res,next)=>{
  res.send(express.static(__dirname + '/client'))
  next()
})
app.use('/', router)

app.listen(port)
console.log(`listening on ${port}`)