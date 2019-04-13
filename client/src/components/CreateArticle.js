import React, { Component } from 'react';

const url = `https://iterator.herokuapp.com/articles`

class CreateArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            // author: "",
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
            name: this.state.author,
            content: this.state.content
        }
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        console.log(this.state.author)
        return (
            <div className="create-article">
                <h2>Create A New Article</h2>
                <form onSubmit={this.onArticleSubmit} id="userArticle">
                    <div className="field">
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.onArticleCreate}
                            className="input"
                               type="text"
                               name="title"
                               placeholder="enter title"
                               value={this.state.title}
                        />
                    </div>
                   {/*  <div className="field">
                        <label htmlFor="author">By: </label>
                        <input onChange={this.onArticleCreate}
                            className="input"
                            type="text"
                            name="author"
                            placeholder="change names"
                            value={this.state.author}
                        />
                    </div> */}
                    <div className="field">
                        <label htmlFor="content">Article Body: </label>
                        <input onChange={this.onArticleCreate}
                               className="input"
                               type="text"
                               name="content"
                               placeholder="enter text here"
                               value={this.state.content}
                        />                        
                    </div>
                    <button input="field" type="submit">Create New Article</button>
                </form>
            </div>
        )
    }
}

export default CreateArticle;