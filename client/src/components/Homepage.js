import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props)

        }
    }
    render() {
        return (
            <div className="homepage">
                <div className="homepage-header">
                    <h1>Iterator.</h1>
                    <div className="login">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            props.handleLogin()
                        }}>
                            <div className="login-field">
                                <label htmlFor="username">username</label>
                                <input className="input" type="text" name="username" placeholder="username" value={this.state.username}></input>
                            </div>
                            <div className="login-field">
                                <label htmlFor="password">password</label>
                                <input className="input" type="text" name="password" placeholder="password" value={this.state.userPassword}></input>
                            </div>
                            <button type="submit" className="button">Log in</button>
                        </form>
                    </div>
                </div>
                <div className="homepage-body">
                    <div className="signup-description">
                        <p>Iterator is a place to share new ideas and solutions on today's greatest coding challenges. <br /> Sign up here to create an account!</p>
                    </div>
                    <div className="signup-form">
                        <form>
                            <div className="signup-field">
                                <label htmlFor="full name">Full name </label>
                                <input className="input" type="text" name="name" placeholder="enter your name" value={this.state.name}></input>
                            </div>
                            <div className="signup-field">
                                <label htmlFor="email">Email </label>
                                <input className="input" type="text" name="email" placeholder="enter email" value={this.state.email}></input>
                            </div>
                            <div className="signup-field">
                                <label htmlFor="password">Password </label>
                                <input className="input" type="text" name="password" placeholder="create password" value={this.state.newPassword}></input>
                            </div>
                            <button type="submit" className="button">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage