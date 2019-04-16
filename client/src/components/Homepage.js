import React from 'react';
import {Redirect, Link} from 'react-router-dom'
import logo from '../images/iterator_logo.png'
import title from '../images/iterator_description.png'
import image from '../images/homepage-image.png'

const Homepage = (props) => {
    if (props.loggedin === true) {
        return <Redirect to={`/users/${props.currentUser}`} />   
       }
    return (
        <div className="homepage">
            <div className="homepage__header">
                <img src={logo} alt="" className="homepage__logo"/>
                <div className="homepage__login">
                    <form className="homepage__form" onSubmit={async (e) => {
                        e.preventDefault()
                        await props.handleLoginSubmit()
                    }}>
                        <div className="homepage__login-field">
                            <label className="homepage__login-label" htmlFor="username">Username </label>
                            <input 
                                className="input" 
                                type="text" 
                                name="username" 
                                placeholder="username" 
                                value={props.currentUser}
                                onChange={props.loginChange}
                            ></input>
                        </div>
                        <div className="homepage__login-field">
                            <label className="homepage__login-label" htmlFor="password">Password </label>
                            <input className="input" type="password" name="password" placeholder="password" value={props.userPassword}></input>
                        </div>
                        <button type="submit" className="login-button">Log in</button>
                    </form>
                </div>
            </div>
            <div className="homepage__body">
                <div className="homepage__description">
                    <div className="homepage__description-text">
                        <img src={title} alt="" className="homepage__description-title"/>
                        <p className="homepage__description-body">is a place to share new ideas<br/>and solutions on today's<br/>greatest coding challenges.</p>
                        <Link to="/create-profile"><button onClick={props.logInOut}>Sign up</button></Link>
                    </div>
                    <div className="homepage__image">
                        <img src={image} className="home-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
