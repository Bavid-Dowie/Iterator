import React, { Component } from 'react'
import Header from './Header'
import UpdateUser from './components/UpdateUser'

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="userprofile__userinfo">
          <h2 className="userprofile__h2">User Name</h2>
          <h3 className="userprofile__h3">User Profile</h3>
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
        <UpdateUser id={this.props.match.params.id} user={this.state.article} getArticle={this.getArticle}/>
      </div>
    )
  }
}

export default UserProfile