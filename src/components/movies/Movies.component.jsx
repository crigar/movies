import React, { Fragment, useState } from 'react';

import Grid from '@mui/material/Grid';
import { MoviePrev } from './../moviePrev/MoviePrev.component';
  
export function Movies({ movies }) {

    return (
        <Fragment>
            <Grid container spacing={2} padding={5}>
                {
                    movies.map((movie) => (
                        
                            <Grid item xs={12} md={3}>
                                <MoviePrev movie={movie}/>
                            </Grid>
                        
                    ))
                }
            </Grid>
        </Fragment>
    );
}