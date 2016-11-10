const ACCESS_TOKEN = ''

function sendTextMsg(userID) {
  var messageData = {
    recipient: {
      id: userID
    },
    message: {
      text: 'got your message'
    }
  };

  sendMsgReq(messageData);
}
function sendMsgReq(msg) {
  var data = {
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token: ACCESS_TOKEN},
    method: 'POST',
    json: msg
  }

  var cb = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s", 
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  }

  // making the request
  request(data, cb)
}