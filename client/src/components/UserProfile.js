import React, { Component } from 'react'
import UpdateUser from './UpdateUser'
import CreateArticle from './CreateArticle'

const url = `https://iterator.herokuapp.com/userarticles/`

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userObject: "",
      userArticles: []
    }
    this.getUserArticles = this.getUserArticles.bind(this)
    this.renderUserArticles = this.renderUserArticles.bind(this)
  }

  componentDidMount(){
      console.log('component mounting')
      this.getUserArticles()
  }

  getUserArticles() {
    console.log(this.props.userObject)
    fetch(`${url}${this.props.userObject.id}`)
    .then(response => response.json())
    .then(data => {
        this.setState({ userArticles: data })
    })
  }

  renderUserArticles() {
    if(this.state.userArticles.length >= 1) {
        console.log("render running")
    return this.state.userArticles.map(article => {
        return (<a href="https://medium.com/"><div>{article.title}</div></a>)
    })
    }
  }

  render() {
    console.log(this.props.userObject)
    return (
      <div>
        <div className="userprofile__userinfo">
          <h2 className="userprofile__h2">{this.props.userObject.name}</h2>
          <h3 className="userprofile__h3">{this.props.userObject.bio}</h3>
        </div>
        <h3 className="userprofile__h3">Articles</h3>
        <UpdateUser id={this.props.match.params.username} />
        <CreateArticle />
        {/* <UserArticles 
          userObject={this.state.userObject}
          getUserArticles={this.getUserArticles}
          renderUserArticles={this.renderUserArticles}
        /> */}
        <div className="user-article">
                {this.renderUserArticles()}
        </div>
      </div>
    )
  }
}

export default UserProfile