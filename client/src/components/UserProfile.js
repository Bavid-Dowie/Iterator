import React, { Component } from 'react'
// import UpdateUser from './UpdateUser'
import CreateArticle from './CreateArticle'
import { Link } from 'react-router-dom'

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
        return (<div key={article.id}><Link to={`/articles/${article.id}`}>{article.title}</Link> </div>)
    })
    }
  }

  render() {
    return (
      <div>
        <div className="userprofile__userinfo">
          <h2 className="userprofile__h2">{this.state.userObject.name}</h2>
          <h3 className="userprofile__h3">{this.state.userObject.bio}</h3>
        </div>
        <h3 className="userprofile__h3">Articles</h3>
        {/* <UpdateUser id={this.props.match.params.username} /> */}
        <CreateArticle userObject={this.state.userObject} />
        <div className="user-article">
                {this.renderUserArticles()}
        </div>
      </div>
    )
  }
}

export default UserProfile