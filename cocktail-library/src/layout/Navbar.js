import React from 'react';
import { FaCocktail } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({icon, title}) => {
  
        return (
            <nav className="navbar bg-dark">
                <div className="x-large navbar-brand">{icon}</div>
                <h1 className="large">{title}</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps = {
    title: 'Navbar',
    icon: <FaCocktail />
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
}

export default Navbar
