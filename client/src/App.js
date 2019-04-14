import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Article from './components/Article'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import UserProfile from './components/UserProfile'
import { decode } from 'jwt-decode';

const url = "https://iterator.herokuapp.com/articles/"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      articles: [],
      currentUser: "",
      userObject: "",
      redirect: false,
      authFormData: {
        username: "",
        password: ""
      }
    }
    this.loginUser = this.loginUser.bind(this)
    this.registerUser = this.registerUser.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.loginChange = this.loginChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.getArticles = this.getArticles.bind(this)
    this.onArticleDelete = this.onArticleDelete.bind(this)
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

  handleLoginInput = (loginData) => { }
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

  loginChange(username) {
    this.setState({ currentUser: username.target.value })
  }

  handleLoginSubmit() {
    fetch(`https://iterator.herokuapp.com/users/${this.state.currentUser}`)
      .then(res => res.json())
      .then(json => this.setState({ userObject: json[0] }))
      .then(this.setState({ redirect: true }))
  }

  getArticles() {
    fetch(url)
      .then(response => response.json())
  }

  async onArticleDelete(e) {
    e.preventDefault()
    await fetch(`${url}${e.target.id}`, {
      method: 'DELETE',
    }).then(response => {
      return response.json()
    })
    this.getArticles()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={(props) =>
              <Homepage
                redirect={this.state.redirect}
                currentUser={this.state.currentUser}
                handleLoginSubmit={this.handleLoginSubmit}
                userObject={this.state.userObject}
                loginChange={this.loginChange}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
              />}
          />
          <Route
            exact path='/users/:username'
            render={(props) =>
              <UserProfile
                {...props}
                userObject={this.state.userObject}
                users={this.state.users}
              />}
          />
          <Route
            exact path='/articles/:id'
            render={(props) => 
              <Article
                currentUser={this.state.currentUser}
                onArticleDelete={this.onArticleDelete}
                getArticles={this.getArticles}
                {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;