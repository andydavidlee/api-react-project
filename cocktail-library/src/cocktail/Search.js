import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    static propTypes = {
        clearCocktails: PropTypes.func.isRequired,
        searchCocktails: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    state= {
        text: ''
    }
    handleChange= (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit= (e) => {
        e.preventDefault();
        // console.log(this.state.text);
        if (this.state.text===''){
            this.props.setAlert('Please enter something', 'secondary')
        }else{
            this.props.searchCocktails(this.state.text);
            this.setState({text:''})
        }
        
    }
    render() {
        const {showClear, clearCocktails} = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" name="text" placeholder="Search Cocktails" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" value="search" className="btn btn-dark btn-block" />
                </form>
                {showClear && (
                     <button className="btn btn-dark" onClick={clearCocktails}>Clear</button>
                )}
            </div>
        )
    }
}

export default Search
