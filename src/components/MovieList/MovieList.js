import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './MovieList.module.css'

const MovieList = ({ movies, match }) => {
    let movieUrl = match.url.includes("movies") ? "" : "movies";
    return movies.map((movie => (
        <li key={movie.id} className={styles.MovieItem}>
            <NavLink to={{pathname: `${match.url}${movieUrl}/${movie.id}`}} className={styles.MovieListItem}>
                <img className={styles.MovieListImg} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                <p className={styles.MovieListTitle}>{movie.title}</p>
                {/* {movie.release_date} */}
            </NavLink>
        </li>
    )))
}
export default withRouter(MovieList);