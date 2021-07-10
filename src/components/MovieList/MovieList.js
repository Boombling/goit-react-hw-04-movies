import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const MovieList = ({ movies, match }) => {
    let movieUrl = match.url.includes("movies") ? "" : "movies";
    return movies.map((movie => (
        <li key={movie.id}>
            <NavLink to={{pathname: `${match.url}${movieUrl}/${movie.id}`}}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                {movie.original_title}
                {/* {movie.release_date} */}
            </NavLink>
        </li>
    )))
}
export default withRouter(MovieList);