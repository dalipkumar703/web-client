
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware } from 'redux'
import App from './components/App'
import WebChat from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
const sagaMiddleware = createSagaMiddleware()
let store=createStore(WebChat,
  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
