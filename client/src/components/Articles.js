import React, { Component } from 'react'

const url = 'https://iterator.herokuapp.com/articles/:userId'

class Articles extends Component {
    constructor(props){
        super(props)
        this.state = {
            userArticles: []
        }
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

    render(){
        return(
            <div className="user-article">
                {this.state.userArticles.map(article => {
                    <a href="#">{article.title}</a>
                })}
            </div>
        )
    }
}

export default Articles