import React from 'react'
import Logo from '../logo-dark.png'

const AllArticles = (props) => {
    return (
        <div>
            <div className="userprofile__topnav">
                <img src={Logo} />
            </div>
            <div className="allarticles__articles--div">
                {props.renderAllArticles()}
            </div>
        </div>

    )
}

export default AllArticles
