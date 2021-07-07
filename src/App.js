import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MovieDetails from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import routes from './routes';
// import MoviesApi from './services/MoviesApi';

const App = () => (
  <>
    {/* <MoviesApi /> */}
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.moviesDetails} component={MovieDetails} />
    </Switch>
  </>
)

export default App;
