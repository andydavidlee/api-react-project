import React from 'react'
import { FaCocktail } from 'react-icons/fa';
import PropTypes from 'prop-types'

const Navbar = ({icon, title}) => {
  
        return (
            <nav className="navbar bg-dark">
                <div className="navbar-brand x-large">{icon}</div>
                <h1>{title}</h1>
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
