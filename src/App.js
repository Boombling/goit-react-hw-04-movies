import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetails from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';
import routes from './routes';
// import MoviesApi from './services/MoviesApi';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Search movies</NavLink>
      </li>
      {/* <li>
        <NavLink to="/movies/:movieId">Movies details</NavLink>
      </li> */}
    </ul>
    {/* <MoviesPage /> */}
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.moviesDetails} component={MovieDetails} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
)

export default App;
