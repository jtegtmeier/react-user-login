import React, { Component } from 'react'
import base from 're-base'
import './App.css'

var authHandler = function(error, user) {
  if(error) {console.log(error)}
  console.log("user: ", user)
}

class App extends Component {
  componentDidMount() {
    console.log
    base.authWithPassword({
      email: 'jcbtegtmeier@gmail.com',
      password: 'reacttest042'
    }, authHandler)
  }

  render() {
    return (
      <div className="App">
        <div className="create-user-box">
          <input/>
          <input/>
          <input/>
        </div>
        <div className="login-box">
          <input/>
          <input/>
        </div>
        <div className="message-box">

        </div>
      </div>
    )
  }
}

export default App
