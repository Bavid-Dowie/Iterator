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
// punycode or jwt-decode??
import { decode } from 'punycode';


class App extends Component {
  constructor(props) {
    this.state = {
      users: [],
      articles: [],
      currentUser: null,
      authFormData: {
        username: "",
        password: ""
      }
    }
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
    return fetch(`${baseURL}/auth/login`, opts)
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
    return fetch(`${baseURL}/auth/register`, opts)
      .then(resp => resp.json())
  }

//handle login function, passed into Homepage, calls loginUser
  async handleLogin() {
    const userData = await loginUser(this.state.authFormData)
    this.setState({
      currentUser: decode(userData.token)
    })
    localStorage.setItem("jwt", userData.token)
  }







  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact path='/user/:id'
            render={(props) => <UserProfile {...props}/>}
          />

          <Route 
            exact path='/article/:id'
            render={(props) => <Article {...props}/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;