import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Article from './components/Article'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import AllArticles from './components/AllArticles'
import UserProfile from './components/UserProfile'
import CreateUser from './components/CreateUser';
 
const url = "https://iterator.herokuapp.com/articles/"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      articles: "",
      currentUser: "",
      userObject: "",
      redirect: false,
      authFormData: {
        username: "",
        password: ""
      }
    }
    this.loginChange = this.loginChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.getAllArticles = this.getAllArticles.bind(this)
    this.onArticleDelete = this.onArticleDelete.bind(this)
    this.renderAllArticles = this.renderAllArticles.bind(this)
  }

  loginChange(username) {
    this.setState({ currentUser: username.target.value })
  }

  handleLoginSubmit() {
    fetch(`https://iterator.herokuapp.com/users/${this.state.currentUser}`)
      .then(res => res.json())
      .then(json => localStorage.setItem('userInfo', JSON.stringify(json[0])))
      .then(this.setState({ redirect: true }))
  }

  getAllArticles() {
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({articles: json}))
  }

  componentDidMount() {
    this.getAllArticles()
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
          <Route
            exact path='/articles/'
            render={(props) => 
              <AllArticles
                currentUser={this.state.currentUser}
                onArticleDelete={this.onArticleDelete}
                getArticles={this.getArticles}
                renderAllArticles={this.renderAllArticles}
                {...props} />}
          />
          <Route 
            exact path='/create-profile'
            render={(props) => 
            <CreateUser 
              {...props}
            />
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;