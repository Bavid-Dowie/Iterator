import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Article from './components/Article'
import CreateArticle from './components/CreateArticle'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './components/Homepage'
import UpdateArticle from './components/UpdateArticle'
import UserProfile from './components/UserProfile'


class App extends Component {
  constructor(props) {
    this.state = {
      users: [],
      articles: []
    }
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