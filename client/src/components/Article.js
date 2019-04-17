import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import UpdateArticle from './UpdateArticle';

const url = 'https://iterator.herokuapp.com/articles/'

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: ""
    }
  }

  getArticle() {
    console.log('This works')
    fetch(`${url}${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ article: data })
      })
  }

  componentDidMount() {
    this.getArticle()
  }
  
  render() {
    return (
      <div className="article__page">
      <Link to={`/users/${this.props.userObject.username}`}><button>Back to Profile</button></Link>
      <Link to='/articles'><button>Back to Community</button></Link>
        <div className="article__page-details">
          <div className="article__page-title">{this.state.article.title}</div>
          <p className="article__page-author">{this.state.article.author}</p>
          <div className="article__page-content">{this.state.article.content}</div>
        </div>
        <UpdateArticle id={this.props.match.params.id} article={this.state.article} getArticle={this.getArticle}/>
        <button id={this.state.article.id} className="delete-article-button" onClick={(e => {
          this.props.onArticleDelete(e)
          this.props.history.push(`/users/${this.props.userObject.username}`)
        })}>Delete Article</button>
      </div>
    )
  }
}

export default withRouter(Article)
