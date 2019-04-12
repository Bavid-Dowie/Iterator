import React, { Component } from 'react';

const url = `http://localhost:3001/articles`

class CreateArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            // author: "",
            content: ""
        }
        this.onArticleCreate = this.onArticleCreate.bind(this)
        this.onArticleCreate = this.onArticleCreate.bind(this)
    }
    // 
    onArticleCreate = event => {
        const { title, content, value } = event.target;
        this.setState({
            [title]: value,
            [content]: value
        })
    }

    onArticleSubmit = async (event) => {
        event.preventDefault()
        let data = {
            title: this.state.title,
            // name: this.state.author,
            content: this.state.content

        }
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

    render(){
        return(
            <div>
                <h2>Create A New Article</h2>
                <form onSubmit={this.onArticleSubmit}>
                    <div className="field">
                        <label htmlFor="title">Title: </label>
                        <input className="input" type="text" name="title" placeholder="enter title" value={this.state.title}></input>
                    </div>
                    <div className="field">
                        <label htmlFor="author">By: </label>
                        <input className="input" type="text" name="author" placeholder="enter names" value={this.state.author}></input>
                    </div>
                    <div className="field">
                        <label htmlFor="article">Article Body: </label>
                        <input className="input" type="text" name="article" placeholder="enter text here" value={this.state.content}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateArticle;