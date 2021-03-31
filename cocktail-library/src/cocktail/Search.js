import React, { Component } from 'react'

class Search extends Component {
    state= {
        text: ''
    }
    handleChange= (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit= (e) => {
        e.preventDefault();
        console.log(this.state.text);
        this.props.searchCocktails(this.state.text);
        this.setState({text:''})
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input type="text" name="text" placeholder="Search Cocktails" value={this.state.text} onChange={this.handleChange} />
                    <input type="submit" value="search" className="btn btn-dark w-100" />
                </form>
            </div>
        )
    }
}

export default Search
