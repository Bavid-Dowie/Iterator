import React from 'react';
import {Redirect, Link} from 'react-router-dom'
import logo from '../images/iterator_logo.png'
import title from '../images/iterator_description.png'
import image from '../images/homepage-image.png'
import laptopIcon from '../images/laptop_icon.png'
import codeIcon from '../images/code_icon.png'
import shareIcon from '../images/share_icon.png'
import typingPhoto from '../images/typing_stock.png'

const Homepage = (props) => {
    if (props.userObject !== null) {
        return <Redirect to={`/users/${props.userObject.username}`} />   
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
                            <label className="homepage__login-label" htmlFor="username">username </label>
                            <input 
                                className="login-input" 
                                type="text" 
                                name="username" 
                                placeholder="username" 
                                value={props.username}
                                onChange={props.loginChange}
                            ></input>
                        </div>
                        <div className="homepage__login-field">
                            <label className="homepage__login-label" htmlFor="password">password </label>
                            <input className="login-input" type="password" name="password" placeholder="password" value={props.password}
                            onChange={props.loginChange}>
                            </input>
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
                        <Link to="/create-profile"><button className="homepage_signup-button" >Sign up</button></Link>
                    </div>
                    <div className="homepage__image">
                        <img src={image} alt="" className="home-image"/>
                    </div>
                </div>
                <div className="homepage__about">
                    <div className="homepage__about-howto">
                        <div className="homepage__icon">
                            <img src={laptopIcon} alt="" className="laptop"/>
                            <p className="icon-text">Create<br/>an account</p>
                        </div>
                        <div className="homepage__icon">
                            <img src={codeIcon} alt="" className="code"/>
                            <p className="icon-text">Write<br/>articles<br/>{`&`} share<br/>code</p>
                        </div>
                        <div className="homepage__icon">
                            <img src={shareIcon} alt="" className="share"/>
                            <p className="icon-text">Explore<br/>the<br/>{`{ iterator }`}<br/>community</p>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage__banner">
                <img src={typingPhoto} alt="" className="homepage__banner-photo"/>
            </div>
        </div>
    )
}

export default Homepage
