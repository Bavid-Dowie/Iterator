import React from 'react'
import Logo from '../images/logo-dark.png'
import { withRouter } from 'react-router-dom';

const AllArticles = (props) => {
    return (
        <div className="allarticles__body">
            <div className="userprofile__topnav">
                <img alt="Iterator logo" src={Logo} />
                <button className="allarticles__backbtn" onClick={props.history.goBack}>Back to Profile</button>
            </div>
            <div key={Math.random()}className="allarticles__articles--div">
                {props.renderAllArticles()}
            </div>
        </div>
    )
}

export default withRouter(AllArticles)