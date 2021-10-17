import React, { Fragment, useState, useRef } from 'react';
import { Movie } from './Movie.component';
import { MoviePrev } from './MoviePrev.component';
import Grid from '@mui/material/Grid';
import MovieService from '../services/movie.service';
import CategoryService from '../services/category.service';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";


export function Filter() {
    let [movies, setMovies] = useState(MovieService.getMovies({}));
    let [categories, setCategories] = useState(CategoryService.getCategories());
    let [currentRating, setRating] = useState(); 
    let years = MovieService.getYears();
    let match = useRouteMatch();

    const handleFilter = (event) => {
        const target = event.target;
        const filter = {
            name: target.value,
            category: target.lastChild ? target.lastChild.data: undefined,
            rating: parseInt(target.value, 10),
            year: target.lastChild ? target.lastChild.data: undefined
        };
        console.log(target.value)
        setRating(filter.rating);
        setMovies(MovieService.getMovies(filter));
    }
    
    return (
        <Fragment>
            <Grid container spacing={2} padding={5}>
                    <Grid item xs={12} md={12}>
                        <h1>Movies</h1>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ minWidth: 120 }}>
                        <TextField  label="Name" onChange={handleFilter} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ minWidth: 120 }}>
                            <Autocomplete
                                disablePortal
                                id="category-filter"
                                onChange={handleFilter}
                                options={categories}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Category" />}
                                />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ minWidth: 120 }}>
                            <Rating name="no-value" value={currentRating} onChange={handleFilter}/>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ minWidth: 120 }}>
                            <Autocomplete
                                disablePortal
                                id="year-filter"
                                options={years}
                                sx={{ width: 300 }}
                                onChange={handleFilter}
                                renderInput={(params) => <TextField {...params} label="Year" onChange={handleFilter} />}
                                />
                        </Box>
                    </Grid>
                                    
                        {
                            movies.map(movie => (
                                <Grid item xs={12} md={3}>
                                    <MoviePrev movie={movie}/>
                                </Grid>
                            ))
                        }
                    

                    <Switch>
                        <Route path={`${match}/movie/:movieId`}>
                            <Movie/>
                        </Route>
                    </Switch>
            </Grid>
        </Fragment>
    );
    
}