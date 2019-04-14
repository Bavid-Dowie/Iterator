import React from 'react';
import {Redirect} from 'react-router-dom'

const Homepage = (props) => {
    if (props.redirect === true) {
        return <Redirect to={`/users/${props.currentUser}`} />   
       }
    return (
        <div className="homepage">
            <div className="homepage__header">
                <h1 className="homepage__logo">Iterator.</h1>
                <div className="homepage__login">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleLoginSubmit()
                    }}>
                        <div className="login-field">
                            <p>Already have an account?</p>
                            <label htmlFor="username">Username </label>
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
                            <label htmlFor="password">Password </label>
                            <input className="input" type="password" name="password" placeholder="password" value={props.userPassword}></input>
                        </div>
                        <button type="submit" className="button">Log in</button>
                    </form>
                </div>
            </div>
            <div className="homepage__body">
                <div className="homepage__description">
                    <p>Iterator is a place to <br/> share new ideas and solutions on <br/> today's greatest coding challenges. <br /> Sign up here to create an account!</p>
                </div>
                <div className="homepage__signup-form">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleRegister()
                    }}>
                        <div className="signup-field">
                            <p>Register</p>
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