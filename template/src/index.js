import React from 'react'
import ReactDOM from 'react-dom'

function init() {
  const App = require('./App').default
  ReactDOM.render(<App />, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./App', init)
}

init()
