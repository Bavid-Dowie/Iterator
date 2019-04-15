import React, { Component } from 'react'
// import UpdateUser from './UpdateUser'
import CreateArticle from './CreateArticle'
import { Link } from 'react-router-dom'
import Logo from '../logo-dark.png'

const url = `https://iterator.herokuapp.com/userarticles/`

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userObject: [],
      userArticles: []
    }
    this.getUserArticles = this.getUserArticles.bind(this)
    this.renderUserArticles = this.renderUserArticles.bind(this)
  }

  async componentDidMount(){
      let storage = localStorage.getItem('userInfo')
      if(storage === null) {
        storage = []
      } else {
        storage = JSON.parse(storage)
      }
      await this.setState({userObject: storage})
      this.getUserArticles()
  }

  getUserArticles() {
    fetch(`${url}${this.state.userObject.id}`)
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
          </Link>
            <p className="userprofile__article--title">{article.title}</p>
            <p className="userprofile__article--author"> by {article.author}</p>
          </div>
        )
    })
    }
  }

  render() {
    return (
      <div>

        <div className="userprofile__topnav">
        <img src={Logo} />
        <a className="userprofile__community--link" href="#">Community</a>
        <a  className="userprofile__editprofile--link" href="#">Edit Profile</a>
        </div>

        <div className="userprofile__middlediv">

        <div className="userprofile__userinfo">
          {/* <img src={this.props.match.params.photo} /> */}
          <h2 className="userprofile__name">{this.state.userObject.name}</h2>
          <h3 className="userprofile__bio">{this.state.userObject.bio}</h3>
        </div>

        <div className="userprofile__createarticle">
        <UpdateUser id={this.props.match.params.username} />

        <CreateArticle userObject={this.state.userObject} />
        </div>

        </div>

        <div className="userprofile__articlescontainer">
          {this.renderUserArticles()}
        </div>
      </div>
    )
  }
}

export default UserProfile
