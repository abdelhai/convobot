var express = require('express')
var bp = require('body-parser')
var request = require('request')

var app = express()
app.use(bp.json())

app.get('/hello', (rq, res) => {
  console.log('hello world')
  res.send('world')
})

app.get('/', (req, res) => {
  var challenge = req.query['hub.challenge']
  console.log(challenge)
  res.send(challenge)

})

app.post('/', (req, res) => {
  console.log('got a new post request')

  var data = req.body
  console.log('data object:' + data.object)
  console.log('data: ' + JSON.stringify(data))

  // obj is not a page
  if (data.object !== 'page') {

    console.log('event obj is not a page')
    // see comment1
    return res.sendStatus(200)

  }

  // no entry
  if (data.entry === undefined || data.entry.length < 1) {

    console.log('no `entry` or entry len is 0')
    // see comment1
    return res.sendStatus(200)
  }


  // looping through entries
  console.log('entries count: ' + data.entry.length)
  data.entry.forEach((entry) => {
    console.log('entry: ' + JSON.stringify(entry))

    // no `messeging`in `entry`
    if (entry.messaging != undefined) {

      // looping through messages
      console.log('messages count: ' + entry.messaging.length)
      entry.messaging.forEach((event) => {
        console.log('message body: ' + JSON.stringify(event.message))
      })
    }

  })
  res.sendStatus(200)
  
})



app.listen(3000, () => {
  console.log('app is running')
})