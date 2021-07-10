import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieList from "../components/MovieList/MovieList";
import Search from "../components/Search/Search";



class MoviesPage extends Component{
    state = {
        query: '',
        movies: [],
    }
    componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.serchMovie();
    }
  }
     
    changeQuery = (query) => {
        this.setState({ query: query });
    }
    async serchMovie() {
        const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74'
        const response = await axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`)
        // console.log(response.data.results);
        this.setState({movies: response.data.results})

    }
    render() {
        const { match } = this.props;
        return (
            <>
                <Search onSubmit={this.changeQuery} />
                <ul>
                    <MovieList movies={this.state.movies}/>
                </ul>
            </>
        )
    }
}
    

export default MoviesPage;
// {this.state.movies.map(movie => (
//                         <li key={movie.id}>
//                             <Link to={`${match.url}/${movie.id}`}>{movie.original_title}</Link>
//                             {/* <Link to={'/movies/${movie.id}'}>{movie.original_title}</Link> */}
//                         </li>
//                     ))}