import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Article from './components/Article'
import Homepage from './components/Homepage'
import AllArticles from './components/AllArticles'
import UserProfile from './components/UserProfile'
import CreateUser from './components/CreateUser';
import decode from 'jwt-decode'
import axios from 'axios'

const url = "https://iterator.herokuapp.com/articles/"
const userArticlesURL = `https://iterator.herokuapp.com/userarticles/`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: "",
      userObject: null,
      username: "",
      password: "",
      userArticles: []
    }
    this.loginChange = this.loginChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.getAllArticles = this.getAllArticles.bind(this)
    this.onArticleDelete = this.onArticleDelete.bind(this)
    this.renderAllArticles = this.renderAllArticles.bind(this)
    this.decodeToken = this.decodeToken.bind(this)
    this.logOut = this.logOut.bind(this)
    this.renderUserArticles = this.renderUserArticles.bind(this)
    this.getUserArticles = this.getUserArticles.bind(this)
  }

  decodeToken(token) {
    const userData = decode(token)
    this.setState({
      userObject: userData
    })
  }

  loginChange(e) {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  async handleLoginSubmit() {

    const resp = await axios.post(`https://iterator.herokuapp.com/users/login`, {
      username: this.state.username,
      password: this.state.password
    })
    localStorage.setItem('jwt', resp.data.token)
    this.decodeToken(resp.data.token)
  }

  getAllArticles() {
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({articles: json}))
  }

  componentDidMount() {
    this.getAllArticles()
    const token = localStorage.getItem('jwt')
    if (token) {
      const decodedToken = decode(token)
      this.setState({ userObject: decodedToken })
    }
  }

  async onArticleDelete(e) {
    e.preventDefault()
    await fetch(`${url}${e.target.id}`, {
      method: 'DELETE',
    }).then(response => {
      return response.json()
    })
    this.getAllArticles()
    this.getUserArticles()
  }

  renderAllArticles () {
    if (Array.isArray(this.state.articles) === true)
    return this.state.articles.map(article => {
      return (
        <div className="allarticles__article">
          <Link to={`articles/${article.id}`}><div>
            <p className="allarticles__article--title">{article.title}</p>
            <p className="allarticles__article--author"> by {article.author}</p>
            </div></Link>
        </div>
      )
    })
  }

  getUserArticles() {
    fetch(`${userArticlesURL}${this.state.userObject.id}`)
    .then(response => response.json())
    .then(data => {
        this.setState({ userArticles: data })
    })
  }

  renderUserArticles() {
    if(this.state.userArticles.length >= 1) {
    return this.state.userArticles.map(article => {
        return (
          <div className="userprofile__article" 
          key={article.id}>
            <Link to={`/articles/${article.id}`}>
            <div>
              <p className="userprofile__article--title">{article.title}</p>
              <p className="userprofile__article--author"> by {article.author}</p>
            </div>
            </Link>
          </div>
        )
      })
    }
  }
 
  logOut () {
    localStorage.removeItem("jwt");
    this.setState({
      userObject: null
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/'
            render={(props) =>
              <Homepage
                handleLoginSubmit={this.handleLoginSubmit}
                userObject={this.state.userObject}
                loginChange={this.loginChange}
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
                username={this.state.username}
                password={this.state.password}
              />}
          />
          <Route
            exact path='/users/:username'
            render={(props) =>
              <UserProfile
                {...props}
                getUserArticles={this.getUserArticles}
                renderUserArticles={this.renderUserArticles}
                userObject={this.state.userObject}
                logOut={this.logOut}
              />}
          />
          <Route 
            exact path='/home'
            render={() => <Redirect to="/" />}
          />
          <Route 
            exact path='/users'
            render={() => <Redirect to="/" />}
          />
          <Route
            exact path='/articles/:id'
            render={(props) => 
              <Article
                userObject={this.state.userObject}
                onArticleDelete={this.onArticleDelete}
                getAllArticles={this.getAllArticles}
                {...props} />}
          />
          <Route
            exact path='/articles/'
            render={(props) => 
              <AllArticles
                onArticleDelete={this.onArticleDelete}
                getAllArticles={this.getAllArticles}
                renderAllArticles={this.renderAllArticles}
                {...props} 
              />}
          />
          <Route 
            exact path='/create-profile'
            render={(props) => 
            <CreateUser 
              {...props}
              decodeToken={this.decodeToken}
              userObject={this.state.userObject}
            />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;