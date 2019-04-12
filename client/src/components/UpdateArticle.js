import React, { Component } from 'react';

const url = 'http:localhost:3001/articles/'

class UpdateArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            title: "",
            author: "",
            content: ""
        }
        this.onUpdateChange = this.onUpdateChange.bind(this)
        this.onUpdateSubmit = this.onUpdateSubmit.bind(this)
    }
    
    onUpdateChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onUpdateSubmit = async (e) => {
        e.preventDefault()
        let data = {
            id: this.props.id,
            title: this.state.title || this.props.article.title,
            author: this.state.author || this.props.article.author,
            content: this.state.content || this.props.article.content
        }

        await fetch(`${url}${this.props.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        })
    }

    render(){
        return(
            <div>
                <h2>Update Your Article</h2>
                <form onSubmit={async (e) => {
                    await this.onUpdateSubmit(e)
                    this.props.getArticle()
                    this.setState({
                        title: "",
                        author: "",
                        content: ""
                    })
                }}>
                    <div className="field">
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.onUpdateChange} className="input" type="text" name="title" placeholder="change title" value={this.state.title}></input>
                    </div>
                    <div className="field">
                        <label htmlFor="author">By: </label>
                        <input onChange={this.onUpdateChange} className="input" type="text" name="author" placeholder="change names" value={this.state.author}></input>
                    </div>
                    <div className="field">
                        <label htmlFor="content">Article Body: </label>
                        <textarea onChange={this.onUpdateChange} className="input" type="text" name="content" placeholder="update text here" value={this.state.content}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateArticle
