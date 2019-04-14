import React, { Component } from React

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
        this.setState({ userArticles: data.articles })
    })
}

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Articles