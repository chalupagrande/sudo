'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const EntryModel = require('./entryModel')

const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//FOR BLUEMIX
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

//Middleware example
// router.use((req,res,next)=>{
//   next()
// })

router.use(express.static('client'))
app.use('/', router)

app.post('/api', (req, res)=>{
  console.log(req.body)
  res.send("You typed this: " + req.body.value)
})

app.post('/api/entry', (req, res)=>{
  let entry = new EntryModel(req.body)
  entry.save((err, entry) =>{
    if(err) res.send({
      success: false,
      msg: err
    })
    else {
      res.send({
        success: true,
        msg: 'Entry Saved',
        entry,
      })
    }
  })
})

app.listen(port)
console.log(`listening on ${port}`)