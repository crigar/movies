import React, { Fragment, useState, useRef } from 'react';
import { Filter } from './Filter.component';
import { Movies } from './movies/Movies.component';
import { Movie } from './movie/Movie.component';
import { NoMatch } from './NoMatch.component';
import { About } from './about/About.component';
import MovieService from '../services/movie.service';
import { createBrowserHistory } from 'history';
import Grid from '@mui/material/Grid';
import {
    HashRouter as Router,
    useRouteMatch,
    Switch,
    Redirect,
    Route
  } from "react-router-dom";
export function Landing() {
    let history = createBrowserHistory();
    let match = useRouteMatch();
    let initialParams = new URLSearchParams(history.location.search);
    

    if (initialParams.toString() !== '') {
        history.replace({
            pathname: '/',
            search: "?" + initialParams.toString()
        });
    }
    let [movies, setMovies] = useState(MovieService.getMovies(initialParams.toString()));

    const toggleMovies = (filterParams) => {
        setMovies(MovieService.getMovies(filterParams.toString()));
    }

    return (
        <Router>
            <Fragment>
                <Grid container spacing={2} padding={5}>
                    <Grid item xs={12} md={12}>
                        <h1>Watch Movies Online</h1>
                    </Grid>
                </Grid>

                <Switch>
                    <Route exact path="/">
                        <Filter movies={movies} toggleMovies={toggleMovies}/>
                        <Movies movies={movies}></Movies>
                    </Route>
                    <Route path="/movies/:movieId">
                        <Movie></Movie>
                    </Route>
                    <Route path="/about-us">
                        <About></About>
                    </Route>
                    <Route path="*">
                        <NoMatch></NoMatch>
                    </Route>
                </Switch>
            </Fragment>
        </Router>
        
    );
}