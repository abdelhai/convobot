var request = require('request')
var reqpro = require('request-promise')

const data = {
    "object": "page",
    "entry": [
        {
            "id": "205796816526121",
            "time": "1478782296608",
            "messaging": [
                {
                    "sender": {
                        "id": "1150260248396885"
                    },
                    "recipient": {
                        "id": "205796816526121"
                    },
                    "timestamp": 1478782296198,
                    "message": {
                        "mid": "mid.1478782296198:82570a9e23",
                        "seq": "342",
                        "text": "not real data"
                    }
                },
                {
                    "sender": {
                        "id": "1150260248396885"
                    },
                    "recipient": {
                        "id": "205796816526121"
                    },
                    "timestamp": 1478782296397,
                    "message": {
                        "mid": "mid.1478782296397:ab586af891",
                        "seq": 343,
                        "text": "not real data 2"
                    }
                }
            ]
        }
    ]
}


var options = {
    method: 'POST',
    uri: 'https://6e1957a7.ngrok.io/',
    body: data,
    json: true
  }

reqpro(options)
  .then(function (data) {
    console.log(data)
  })
  .catch(function (err) {
    console.log(err)
  })


// just a get test
// reqpro('https://6e1957a7.ngrok.io/hello')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
