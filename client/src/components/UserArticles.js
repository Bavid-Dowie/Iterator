import React, { Component } from 'react'

class UserArticles extends Component {
    
    componentDidMount() {
        if(this.props.userObject) {
            console.log('component mounting')
            this.props.getUserArticles()
        }
    }

    render() {
        console.log(Object.keys(this.props.userObject))
        return(
            <div className="user-article">
                {this.props.renderUserArticles()}
            </div>
        )
    }
}

export default UserArticles