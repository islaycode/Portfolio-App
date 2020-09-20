import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="ui massive three item inverted menu">
            <Link to="/" className="item">  
                <span>Home <i className="home icon"></i></span>
                 </Link>
            <Link to="/projects" className="item">
                <span>Projects <i className="chart pie icon"></i></span>
                 </Link>
            <Link to="/contact" className="item">
            <span>Contact Me <i className="envelope icon"/></span>            
             </Link>
        </div>
    )
}

export default Navbar
