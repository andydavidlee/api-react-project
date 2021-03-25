import React, { Component } from 'react'
import { FaCocktail } from 'react-icons/fa';
import PropTypes from 'prop-types'

class Navbar extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    }
    render() {
        return (
            <nav className="navbar bg-primary">
                <FaCocktail />
                <h1>{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
