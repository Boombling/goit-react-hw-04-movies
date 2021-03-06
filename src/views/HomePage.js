import React, { Component } from "react";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";
import styles from "./Movies.module.css"

class HomePage extends Component{
    state = {
        movies: [],
    }
    async componentDidMount() {
        const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74'
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        // console.log(response.data.results);
        this.setState({movies: response.data.results})
    }

    render() {
        return (
            <>
                <ul className={styles.MovieList}>
                    <MovieList movies={this.state.movies}/>
                </ul>
            </>
        )
    }
}

export default HomePage;