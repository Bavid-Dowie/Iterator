import React, { Component } from 'react' 
import { withRouter } from 'react-router'
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
      <div className="article-page">
        <div className="article-details">
          <h3>{this.state.article.title}</h3>
          <p>{this.state.article.author}</p>
          <div>{this.state.article.content}</div>
        </div>
        <UpdateArticle id={this.props.match.params.id} article={this.state.article} getArticle={this.getArticle}/>
        <button id={this.state.article.id} onClick={(e => {
          this.props.onArticleDelete(e)
          this.props.history.push(`/users/${this.props.currentUser}`)
        })}>Delete Article</button>
      </div>
    )
  }
}

export default withRouter(Article)