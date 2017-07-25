
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import WebChat from './reducers'
var DDPClient = require("ddp-client");

const SERVER_URL = 'wss://6f123c84.ngrok.io/websocket'
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

  console.log('connected!');
  ddpclient.call('addChatMessage', ["hello", "ph52Li6AkoWrmqgag", 300, true]);
  console.log("message send");
});

let store=createStore(WebChat)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
