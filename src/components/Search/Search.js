import React, { Component } from 'react';


class Search extends Component {
    state = {
        query: '',
    }
    handelChange = e => {
        this.setState({ query: e.currentTarget.value });
    }
    handelSubmit = e => {
        e.preventDefault();
        
        this.props.onSubmit(this.state.query);
        this.setState({ query: ''})
    }

    render() {
        return (
            <form className="SearchForm" onSubmit={this.handelSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    value={this.state.query}
                    onChange={this.handelChange}
                />
            </form>
        )
    }
}

export default Search