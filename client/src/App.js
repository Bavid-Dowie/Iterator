import React, { Component } from 'react';
import './App.css';
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
      </div>
    );
  }
}

export default App;