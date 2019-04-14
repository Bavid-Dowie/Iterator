import React, { Component } from 'react'

const url = 'https://iterator.herokuapp.com/articles/:userId'

class Articles extends Component {
    constructor(props){
        super(props)
        this.state = {
            userArticles: []
        }
        this.getUserArticles = this.getUserArticles.bind(this)
        this.renderUserArticles = this.renderUserArticles.bind(this)
    }

    getUserArticles() {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({ userArticles: data })
        })
    }

    componentDidMount(){
        this.getUserArticles()
    }

    renderUserArticles(){
        const userArticles = this.state.userArticles
        return userArticles.map(article => {
            return (<a href="https://medium.com/"><div>{article.title}</div></a>)
        })
    }

    render(){
        return(
            <div className="user-article">
                {this.renderUserArticles()}
            </div>
        )
    }
}

export default Articles