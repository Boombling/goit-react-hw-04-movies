import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import Button from "../components/Button/Button";
import styles from "./Movies.module.css"

class MovieDetails extends Component {
    state = {
        genres: [],
        id: null,
        title: null,
        poster_path: null,
        overview: null,
        popularity: null,
        release_date: null,
    }

    async componentDidMount() {
        const API_KEY = '4f82ed1427d5ffdf5673256bc4f7ef74';
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        this.setState({ ...response.data });
        // console.log(response.data);
    }
    render() {
        const {
            genres,
            id,
            title,
            poster_path,
            overview,
            vote_average,
            release_date,
        } = this.state;
        const { match } = this.props;
        const date = `${release_date}`.substr(0, 4);
      
      return (
        <>
          <Button />
          
          <div key={id} className={styles.MovieDetails}> 
            <div className={styles.MoviePageImgBlock}>
              {poster_path ? (
                <img className={styles.MoviePageImgBlock}
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title} />
              ) : (
                <p className={styles.MoviePageNoimg}>No photo</p>
              )}
            </div>
            <div className={styles.MoviePageBlock}>
              <h1 className={styles.MovieTitle}>
                {title} ({date})
              </h1>
              <p>User Score: {vote_average * 10}%</p>
              <h2 className={styles.MovieTitle}>Overview</h2>
              <p>{overview}</p>
              <h2 className={styles.MovieTitle}>Genres</h2>
              <ul>
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            </div>
            <div className={styles.MoviePageMenu}>
              <h2>Additional information</h2>
              <ul>
                <li className={styles.DetailsItem}>
                  <NavLink className={styles.Details} to={`${match.url}/Cast`}>Cast</NavLink>
                </li>
                <li className={styles.DetailsItem}>
                  <NavLink className={styles.Details} to={`${match.url}/Reviews`}>Reviews</NavLink>
                </li>
              </ul>
            </div>
                
            <Switch>
              <Route exact path={`${match.path}/Cast`} component={Cast} />
              <Route exact path={`${match.path}/Reviews`} component={Reviews} />
            </Switch>
          
          
        </>
      )
    }
}

export default MovieDetails;