import React from 'react';
import {Redirect, Link} from 'react-router-dom'

const Homepage = (props) => {
    if (props.loggedin === true) {
        return <Redirect to={`/users/${props.currentUser}`} />   
       }
    return (
        <div className="homepage">
            <div className="homepage__header">
                <h1 className="homepage__logo">Iterator.</h1>
                <div className="homepage__login">
                    <form onSubmit={async (e) => {
                        e.preventDefault()
                        await props.handleLoginSubmit()
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
            </div>
            <Link to="/create-profile"><button onClick={props.logInOut}>Sign up</button></Link>
        </div>
    )
}

export default Homepage
