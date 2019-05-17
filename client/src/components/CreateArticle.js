import React, { Component } from 'react';

const url = `https://iterator.herokuapp.com/articles`

class CreateArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            author: "",
            content: ""
        }
        this.onArticleCreate = this.onArticleCreate.bind(this)
        this.onArticleSubmit = this.onArticleSubmit.bind(this)
    }

    onArticleCreate = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onArticleSubmit = async (event) => {
        event.preventDefault()
        let data = {
            title: this.state.title,
            author: this.props.userObject.name,
            content: this.state.content,
            userId: this.props.userObject.id
        }
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await this.props.getUserArticles()
    }

    render() {
        return (
            <div className="userprofile__createarticle--container">
                <div className="userprofile__createarticle-title">Create A New Article</div>
                <form className="userprofile__createarticle--form" onSubmit={this.onArticleSubmit} id="userArticle">
                    <div className="userprofile__createarticle--field">
                        <label htmlFor="title" className="userprofile__createarticle--label">title</label>
                        <input onChange={this.onArticleCreate}
                            className="input"
                            type="text"
                            name="title"
                            placeholder="enter title"
                            value={this.state.title}
                            required
                        />
                    </div>
                    <div className="userprofile__createarticle--field">
                        <label htmlFor="author" className="userprofile__createarticle--label">author</label>
                        <input onChange={this.onArticleCreate}
                            className="input"
                            type="text"
                            name="author"
                            placeholder="enter name"
                            value={this.props.userObject.name}
                            required
                        />
                    </div>
                    <div className="userprofile__createarticle--field">
                        <label htmlFor="content" className="userprofile__createarticle--label">article content</label>
                        <textarea onChange={this.onArticleCreate}
                            className="input"
                            type="text"
                            name="content"
                            placeholder="enter text here"
                            value={this.state.content}
                            required
                        />                        
                    </div>
                    <button className="userprofile__createarticle--button" input="field" type="submit">Create New Article</button>
                </form>
            </div>
        ) 
    }
}

export default CreateArticle;
