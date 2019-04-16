import React, { Component } from 'react'
import CreateArticle from './CreateArticle'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../images/logo-dark.png'
import Footer from '../components/Footer'

const url = `https://iterator.herokuapp.com/userarticles/`

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userArticles: []
    }
    this.getUserArticles = this.getUserArticles.bind(this)
    this.renderUserArticles = this.renderUserArticles.bind(this)
  }

  componentDidMount(){
      this.getUserArticles()
  }

  getUserArticles() {
    fetch(`${url}${this.props.userObject.id}`)
    .then(response => response.json())
    .then(data => {
        this.setState({ userArticles: data })
    })
  }

  renderUserArticles() {
    console.log(this.props.userObject.id)
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

  render() {
    if (this.props.userObject===null) {
      return <Redirect to='/home'/>
    }
    return (
      <div className="userprofile__body">
        <div className="userprofile__topnav">
        <img className="logo" alt="Iterator logo" src={Logo} />
        <Link to={`/articles`}className="userprofile__community--link"
        >Community</Link> 
        <button onClick = {this.props.logOut}>Logout</button>
        </div>
        <div className="userprofile__middlediv">
        <div className="userprofile__userinfo">
          <div className="userprofile__middle--left">
            <img className="userprofile__userphoto" alt="user" src={this.props.userObject.photo} />
            <div>
            <h2 className="userprofile__name">{this.props.userObject.name}</h2>
            <h3 className="userprofile__bio">{this.props.userObject.bio}</h3>
            </div>
          </div>
        </div>
        <div className="userprofile__createarticle">

        <CreateArticle userObject={this.props.userObject} />
        </div>
        </div>

        <div
        className="userprofile__articlescontainer">
          {this.renderUserArticles()}
        </div>
        <Footer />
    </div>
    )
  }
}

export default UserProfile