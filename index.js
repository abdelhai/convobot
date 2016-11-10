var builder = require('botbuilder')
var restify = require('restify')


var server = restify.createServer()
server.listen(3000, () => {
  console.log('The server is running: ' + server.name + server.url)
})

var connector = new builder.ConsoleConnector().listen()
var bot  = new builder.UniversalBot(connector)

bot.dialog('/', (session) => {
  console.log('you are in /')
  session.beginDialog('/name')
})

bot.dialog('/name', [
  (session) => {
    session.send('Hello')
    builder.Prompts.text(session, "What's your name?")
  },
  (session, results) => {
    session.send('Nice to meet you, ' + results.response + '!')
    session.beginDialog('/language')
  }
])

bot.dialog('/language', [
  (session) => {
    builder.Prompts.choice(session, "What language do you like more?", "Python|JavaScript")
  },
  (session, results) => {
    console.log(results.response)
    session.endDialog()
  }
])
