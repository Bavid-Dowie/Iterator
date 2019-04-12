import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Article from './components/Article'
import CreateArticle from './components/CreateArticle'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'
import UpdateArticle from './components/UpdateArticle'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'
import { decode } from 'jwt-decode';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      articles: [],
      currentUser: null,
      authFormData: {
        username: "",
        password: ""
      }
    }
    this.loginUser = this.loginUser.bind(this)
    this.registerUser = this.registerUser.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }

// login user post function
  loginUser = (loginData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(`http://localhost:3001/auth/login`, opts)
      .then(resp => resp.json())
  }

//register user post function
  registerUser = (registerData) => {
    const opts = {
      method: 'POST',
      body: JSON.stringify(registerData),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(`http://localhost:3001/auth/register`, opts)
      .then(resp => resp.json())
  }

//handle login function, passed into Homepage, calls loginUser
  async handleLogin() {
    const userData = await this.loginUser(this.state.authFormData)
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }

//handle register function, passed into Homepage, calls registerUser and handleLogin
  async handleRegister(e) {
    e.preventDefault()
    await this.registerUser(this.state.authFormData)
    this.handleLogin()
  }



  render() {
    return (
      <div className="App">

        <Homepage />
        <UserProfile />
        <UpdateUser />

        <Switch>
          <Route 
            exact path='/users/:id'
            render={(props) => <UserProfile {...props}/>}
          />

          <Route 
            exact path='/articles/:id'
            render={(props) => <Article {...props}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;