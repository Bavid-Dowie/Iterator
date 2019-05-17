import React from 'react'
import Logo from '../images/logo-dark.png'
import articleTech from '../images/articles_test_banner.png'
import { withRouter, Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer'

const token = localStorage.getItem('jwt')

const AllArticles = (props) => {
    return (
        <div className="allarticles__body">
        {!token && <Redirect to="/home" />}
        {props.userObject && 
            <React.Fragment>
                <div className="userprofile__topnav">
                <Link to={`/users/${props.userObject.username}`}><img className="allarticles__logo" alt="Iterator logo" src={Logo} /></Link>
                    <Link to={`/users/${props.userObject.username}`}><button className="allarticles__backbtn">Back to Profile</button></Link>
                </div>
                <div className="articles_banner">
                    <img src={articleTech} alt="" className="articles__banner-photo" />
                </div>
                <div className="allarticles__articles--div">
                    {props.renderAllArticles()}
                </div>
                <Footer />
            </React.Fragment>
        }
        </div>
    )
}

export default withRouter(AllArticles)