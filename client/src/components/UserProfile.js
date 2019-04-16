import React, { Component } from 'react'
import CreateArticle from './CreateArticle'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../images/logo-dark.png'
import Footer from '../components/Footer'

class UserProfile extends Component {

  componentDidMount(){
      this.props.getUserArticles()
  }

  render() {
    if (this.props.userObject===null) {
      return <Redirect to='/home'/>
    }
    return (
      <div className="userprofile__body">
        <div className="userprofile__topnav">
        <img alt="Iterator logo" src={Logo} />
        <Link to={`/articles`}className="userprofile__community--link"
        >Community</Link> 
        <button onClick = {this.props.logOut}>Logout</button>
        </div>

        <div className="userprofile__middlediv">

        <div className="userprofile__userinfo">
          <img className="userprofile__userphoto" alt="user" src={this.props.userObject.photo} />
          <h2 className="userprofile__name">{this.props.userObject.name}</h2>
          <h3 className="userprofile__bio">{this.props.userObject.bio}</h3>
        </div>
        <div className="userprofile__createarticle">

        <CreateArticle userObject={this.props.userObject} getUserArticles={this.props.getUserArticles} />
        </div>
        </div>

        <div
        className="userprofile__articlescontainer">
          {this.props.renderUserArticles()}
        </div>
        <Footer />
    </div>
    )
  }
}

export default UserProfile