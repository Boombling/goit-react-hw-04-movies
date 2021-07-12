import './App.css';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MovieDetails from './views/MovieDetailsPage';
// import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() => import('./views/HomePage.js' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./views/MoviesPage.js' /* webpackChunkName: "Movies-page" */));
const MovieDetails = lazy(() => import('./views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetails-page" */));

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.moviesDetails} component={MovieDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
)

export default App;
