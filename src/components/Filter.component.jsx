import React, { Fragment, useState, useRef } from 'react';
import { Movie } from './Movie.component';
import { MoviePrev } from './MoviePrev.component';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import MovieService from '../services/movie.service';
import CategoryService from '../services/category.service';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createBrowserHistory } from 'history';
import { useSearchParams } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    history
  } from "react-router-dom";


export function Filter() {
    let history = createBrowserHistory();
    let filterParams = new URLSearchParams(history.location.search);
    console.log(filterParams.get('name'))
    let [name, setName] = useState();
    let [category, setCategory] = useState(filterParams.get('category'));
    let [rating, setRating] = useState(parseInt(filterParams.get('rating'), 10));
    let [year, setYear] = useState(filterParams.get('year')); 
    let years = MovieService.getYears();
    let categories = CategoryService.getCategories();
    let match = useRouteMatch();
    
    
    console.log(history.location)
    if (filterParams.toString() !== '') {
        history.replace({
            pathname: '/',
            search: "?" + filterParams.toString()
        });
        // setName(filterParams.get('name'));
        // setCategory(filterParams.get('name'));
        // setRating(filterParams.get('name'));
        // setYear(filterParams.get('name'));
    }
    let [movies, setMovies] = useState(MovieService.getMovies(filterParams.toString()));
    const setParams = () => {
        history.replace({
            pathname: '',
            search: "?" + filterParams.toString()
        });
        setMovies(MovieService.getMovies(filterParams.toString()));
    }
    
    const handleName = (event) => {
        let value = event.target.value;
        filterParams.set('name',value );
        setName(value);
        setParams();
    }
    const handleCategory = (event) => {
        let value = event.target.lastChild.data;
        filterParams.set('category', value);
        setCategory(value);
        setParams();
    }
    const handleRating = (event) => {
        let value = parseInt(event.target.value);
        filterParams.set('rating', value);
        setRating(value);
        setParams();
    }
    const handleYear = (event) => {
        let value = event.target.lastChild?.data;
        filterParams.set('year', value);
        setYear(value);
        setParams();
    }

    const handleClear = () => {
        filterParams = new URLSearchParams('');
        history.replace({
            pathname: '/',
            search: ''
        });
        setName('');
        setCategory('');
        setRating(0);
        setYear('');
        setMovies(MovieService.getMovies());
    }
    
    return (
        <Fragment>
            <Grid container spacing={2} padding={5}>
                    <Grid item xs={12} md={12}>
                        <h1>Movies</h1>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ minWidth: 120 }}>
                            <TextField  label="Name" onChange={handleName} value={name} />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ minWidth: 120 }}>
                            <Autocomplete
                                disablePortal
                                id="category-filter"
                                onChange={handleCategory}
                                options={categories}
                                sx={{ width: 300 }}
                                value={category}
                                renderInput={(params) => <TextField {...params} label="Category" />}
                                />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <Rating name="no-value" value={rating} onChange={handleRating}/>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <Autocomplete
                                disablePortal
                                id="year-filter"
                                options={years}
                                onChange={handleYear}
                                value={year}
                                renderInput={(params) => <TextField {...params} label="Year"  />}
                                />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <Button variant="contained" onClick={handleClear}>Clear</Button>
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