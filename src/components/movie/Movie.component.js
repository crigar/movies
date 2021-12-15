import React, { Fragment, useState } from 'react';
import {
    Switch,
    Link,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import { MoviePrev } from '../moviePrev/MoviePrev.component';
  import Grid from '@mui/material/Grid';
import {MovieService} from '../../services/movie.service';  
export function Movie() {
    let { movieId } = useParams();

    let movie = MovieService.getMovie(movieId);
    return (
        <Fragment>
            <Grid container spacing={2} padding={0,5,5,5}>
                <Grid item xs={12} md={12}>
                    <h2>{ movie.name }</h2>
                </Grid>
                <Grid item xs={12} md={3}>
                    <MoviePrev movie={movie}/>
                </Grid>
                <Grid item xs={12} md={9}>
                <iframe width="560" height="315" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
            </Grid>
        </Fragment>
        
    );
}