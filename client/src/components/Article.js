import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import UpdateArticle from './UpdateArticle';
import Footer from './Footer'
import Logo from '../images/logo-dark.png'

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
      <div className="article__header">
      <div className="article__header_logo">
      <img className="article__logo" alt="Iterator logo" src={Logo} />
      </div>
      <div className="article__header__buttons">
      <Link to={`/users/${this.props.userObject.username}`}><button>Back to Profile</button></Link>
      <Link to='/articles'><button>Back to Community</button></Link>
      </div>
      </div>

        <div className="article__page-details">
          <div className="article__page-title">{this.state.article.title}</div>
          <p className="article__page-author">by {this.state.article.author}</p>
          <div className="article__page-content">{this.state.article.content}</div>
        </div>
        <UpdateArticle id={this.props.match.params.id} userObject={this.props.userObject} article={this.state.article} getArticle={this.getArticle}/>
        <button id={this.state.article.id} className="article__delete--btn" onClick={(e => {
          this.props.onArticleDelete(e)
          this.props.history.push(`/users/${this.props.userObject.username}`)
        })}>Delete Article</button>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Article)
