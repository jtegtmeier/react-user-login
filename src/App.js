import React, { Component } from 'react'
import Rebase from 're-base'
import './App.css'
import rebaseOptions from './rebaseOptions.json'
//enter your app apikey into rebaseOptions.json to connect firebase
//sample structure in rebaseOptions.sample.json

let base = Rebase.createClass(rebaseOptions)

let authHandler = (error, user) => {
  if(error) {console.log(error)}
  console.log("user: ", user)
}

let userHandler = (error, user) => {
  if(error) {console.log(error)}
  console.log("user: ", user)
}

class App extends Component {

  handleSubmitSignup(evt){
    evt.preventDefault()

    base.createUser({
      email: this.refs.signup_email.value,
      password: this.verifySamePassword(this.refs.signup_pw1.value, this.refs.signup_pw2.value)
    }, userHandler)
  }

  handleSubmitLogin(evt){
    evt.preventDefault()
    base.authWithPassword({
      email: this.refs.login_email.value,
      password: this.refs.login_password.value
    }, authHandler)
  }

  verifySamePassword(pw1, pw2){
    if(pw1 === pw2){
      return pw2
    }
    return undefined
  }

  render() {
    return (
      <div className="App">
        <form className="create-user-box" onSubmit={this.handleSubmitSignup.bind(this)}>
          <div>Sign Up:</div>
          <lable>Email: <input type="email" required ref="signup_email"/></lable>
          <lable>Password: <input type="password" required ref="signup_pw1"/></lable>
          <lable>Re-type Password: <input type="password" required ref="signup_pw2"/></lable>
          <input type="submit" value="Submit" />
        </form>
        <form className="login-box" onSubmit={this.handleSubmitLogin.bind(this)}>
          <div>Login:</div>
          <lable>Email: <input type="email" required ref="login_email"/></lable>
          <lable>Password: <input type="password" required ref="login_password"/></lable>
          <input type="submit" value="Submit" />
        </form>
        <div className="message-box">

        </div>
      </div>
    )
  }
}

export default App
