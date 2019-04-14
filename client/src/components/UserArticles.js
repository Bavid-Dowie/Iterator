import React, { Component } from 'react'

const url = `https://iterator.herokuapp.com/userarticles/`

class UserArticles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userArticles: [],
            user: ""
        }
        this.getUserArticles = this.getUserArticles.bind(this)
        this.renderUserArticles = this.renderUserArticles.bind(this)
    }

    setUser(){
        this.setState({ user: this.props.userObject })
    }

    getUserArticles() {
        fetch(`${url}${this.props.userObject.id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({ userArticles: data })
        })
    }

    renderUserArticles() {
        if(this.state.userArticles.length >= 1) {
        return this.state.userArticles.map(article => {
            return (<a href="https://medium.com/"><div>{article.title}</div></a>)
        })
        }
    }

    render() {
        console.log(Object.keys(this.props.userObject))
        return(
            <div className="user-article">
                {this.renderUserArticles()}
            </div>
        )
    }
}

export default UserArticles