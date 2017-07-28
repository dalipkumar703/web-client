import React from 'react'

var DDPClient = require("ddp-client");

const SERVER_URL = 'wss:///be77b069.ngrok.io/websocket'
export function Message(text)
{
  console.log("text:",text);
  var ddpclient = new DDPClient({
    // All properties optional, defaults shown
    url: SERVER_URL
  });

  ddpclient.connect(function(error, wasReconnect) {
    // If autoReconnect is true, this callback will be invoked each time
    // a server connection is re-established
    if (error) {
      console.log('DDP connection error!');
      return;
    }

    if (wasReconnect) {
      console.log('Reestablishment of a connection.');
    }


    ddpclient.subscribe(
     'Chat.messagesList',                  // name of Meteor Publish function to subscribe to
     ["ph52Li6AkoWrmqgag","123"],function(error,result){
       if(!error)
       {
         console.log("success");
         var observer = ddpclient.observe("chat");
          observer.added = function(id) {
          console.log("id:",id);
          };
       }
       else {
         console.log("error:",error);
       }
     });


  ddpclient.call('addChatMessage',[text,"ph52Li6AkoWrmqgag","123",true]);
    console.log("method call");

  });
}
export default Message
