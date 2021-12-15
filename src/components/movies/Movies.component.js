import React, { Fragment, useState } from 'react';

import Grid from '@mui/material/Grid';
import { MoviePrev } from './../moviePrev/MoviePrev.component';
import {
    useParams
  } from "react-router-dom";
  
export function Movies({ movies }) {

    let { movieId } = useParams();
    let showWatchMovie = movieId ? false : true;

    return (
        <Fragment>
            <Grid container spacing={10} padding={5}>
                {
                    movies.map((movie) => (
                            <Grid item xs={12} md={3}>
                                <MoviePrev movie={movie} showWatchMovie={showWatchMovie}/>
                            </Grid>
                    ))
                }
            </Grid>
        </Fragment>
    );
}