import React, { Fragment, useState, useRef } from 'react';
import { Filter } from './Filter.component';
import { Movies } from './movies/Movies.component';
import MovieService from '../services/movie.service';
import { createBrowserHistory } from 'history';
import {
    useRouteMatch
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
        <Fragment>
            <Filter movies={movies} toggleMovies={toggleMovies}/>
            <Movies movies={movies}></Movies>
        </Fragment>
    );
}