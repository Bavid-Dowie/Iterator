import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Header from './Header'
import UpdateArticle from './UpdateArticle';

const url = 'http:localhost:3001/articles/'

class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      article: ""
    }
  }

  getArticle(){
    fetch(`${url}${this.props.match.params.id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.article)
        this.setState({ article: data.article })
      })
  }

  componentDidMount(){
    this.getArticle()
  }

  render() {
    return (
      <div className="article-page">
        <Header />
        <div className="article-details">
          <h3>{this.state.article.title}</h3>
          <p>{this.state.article.author}</p>
          <div>{this.state.article.content}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Article)