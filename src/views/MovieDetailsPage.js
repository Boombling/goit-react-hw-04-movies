import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";
import Button from "../components/Button/Button";


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
          
          <div key={id}>
            <div>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title} />
              ) : (
                <p>No photo</p>
              )}
            </div>
            <div>
              <h1>
                {title} ({date})
              </h1>
              <p>User Score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <NavLink to={`${match.url}/Cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`${match.url}/Reviews`}>Reviews</NavLink>
                </li>
              </ul>
            </div>
                
            <Switch>
              <Route exact path={`${match.path}/Cast`} component={Cast} />
              <Route exact path={`${match.path}/Reviews`} component={Reviews} />
            </Switch>
          </div>
          
        </>
      )
    }
}

export default MovieDetails;