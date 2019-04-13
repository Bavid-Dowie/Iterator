import React from 'react';
import {Redirect} from 'react-router-dom'

const Homepage = (props) => {
    if (props.redirect === true) {
        return <Redirect to={`/users/${props.currentUser}`} />   
       }
    return (
        <div className="homepage">
            <div className="homepage-header">
                <h1>Iterator.</h1>
                <div className="login">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        // props.handleLogin()
                        props.handleLoginSubmit()
                    }}>
                        <div className="login-field">
                            <label htmlFor="username">username</label>
                            <input 
                                className="input" 
                                type="text" 
                                name="username" 
                                placeholder="username" 
                                value={props.currentUser}
                                onChange={props.loginChange}
                            ></input>
                        </div>
                        <div className="login-field">
                            <label htmlFor="password">password</label>
                            <input className="input" type="password" name="password" placeholder="password" value={props.userPassword}></input>
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
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleRegister()
                    }}>
                        <div className="signup-field">
                            <label htmlFor="full name">Full name </label>
                            <input className="input" type="text" name="name" placeholder="enter your name" value={props.name}></input>
                        </div>
                        <div className="signup-field">
                            <label htmlFor="email">Email </label>
                            <input className="input" type="text" name="email" placeholder="enter email" value={props.email}></input>
                        </div>
                        <div className="signup-field">
                            <label htmlFor="password">Password </label>
                            <input className="input" type="password" name="password" placeholder="create password" value={props.newPassword}></input>
                        </div>
                        <button type="submit" className="button">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Homepage