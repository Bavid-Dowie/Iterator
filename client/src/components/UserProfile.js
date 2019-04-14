import React, { Component } from 'react'
import Header from './Header'
import UpdateUser from './UpdateUser'
import CreateArticle from './CreateArticle'
import Articles from './Articles'

class UserProfile extends Component {
  render() {
    console.log(this.props.userObject)
    return (
      <div>
        <Header />
        <div className="userprofile__userinfo">
          <h2 className="userprofile__h2">{this.props.userObject.name}</h2>
          <h3 className="userprofile__h3">{this.props.userObject.bio}</h3>
        </div>
        <h3 className="userprofile__h3">Articles</h3>
        <button className="userprofile__btn--create">+ CREATE A NEW ARTICLE</button>
        <div className="userprofile__articlescontainer">
          <div className="userprofile__article"></div>
          <div className="userprofile__article"></div>
          <div className="userprofile__article"></div>
          <div className="userprofile__article"></div>
          <div className="userprofile__article"></div>
          <div className="userprofile__article"></div>
        </div>
        <UpdateUser id={this.props.match.params.username}/>
        <CreateArticle/>
        <Articles/>
      </div>
    )
  }
}

export default UserProfile