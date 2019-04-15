import React from 'react'
import {Link} from 'react-router-dom' 

const AllArticles = (props) => {
    return (
        <div>
            {props.renderAllArticles()}
        </div>
    )
}

export default AllArticles