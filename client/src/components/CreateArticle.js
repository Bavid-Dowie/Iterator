import React, { Component } from 'react';

class CreateArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            author: "",
            content: ""
        }
    }

    render(){
        return(
            <div>
                <h2>Create A New Article</h2>
                <form>
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