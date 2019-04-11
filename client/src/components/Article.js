import React, { Component } from 'react'
import Header from './Header'

class Article extends Component {
  render() {
    return (
      <div className="article">
        <Header />
        <h1>Article Title</h1>
        <h3>Byline</h3>
        <p>Lorem ipsum</p> 
      </div>
    )
  }
}

export default Article