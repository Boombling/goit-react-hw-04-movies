import React, { Component } from 'react';
import styles from './SerchForm.module.css'


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
            <form className={styles.SearchForm} onSubmit={this.handelSubmit}>
                <button type="submit" className={styles.SerchBtn}>
                    <span className={styles.BtnText}>Search</span>
                </button>

                <input
                    className={styles.SearchFormInput}
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