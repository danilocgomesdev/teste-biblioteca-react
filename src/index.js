import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

ReactDOM.render(<App/>, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}