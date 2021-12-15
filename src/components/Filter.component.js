import React, { Fragment, useState } from 'react';
import { MoviePrev } from './moviePrev/MoviePrev.component';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {MovieService} from '../services/movie.service';
import {CategoryService} from '../services/category.service';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createBrowserHistory } from 'history';
import { useStore, useDispatch } from 'react-redux';
import { newFilter, cleanFilter } from '../redux/actions';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    history
  } from "react-router-dom";


export function Filter({movies, toggleMovies}) {
    const store = useStore();
    const dispatch = useDispatch();
    
    let history = createBrowserHistory();
    let filterParams = new URLSearchParams(history.location.search);

    let [name, setName] = useState();
    let [category, setCategory] = useState(filterParams.get('category'));
    let [rating, setRating] = useState(parseInt(filterParams.get('rating'), 10));
    let [year, setYear] = useState(filterParams.get('year'));

    let years = MovieService.getYears();
    let categories = CategoryService.getCategories();
    let match = useRouteMatch();

    

    const setParams = () => {
        history.replace({
            pathname: '',
            search: '?' + filterParams.toString()
        });
        toggleMovies(filterParams);
    }
    
    const handleName = (event) => {
        let value = event.target.value ? event.target.value : '';
        filterParams.set('name',value );
        setName(value);
        setParams();
        dispatch(newFilter({ type: 'name', value }));
    }
    const handleCategory = (event) => {
        let value = event.target.lastChild?.data ? event.target.lastChild?.data : '';
        console.log(value)
        filterParams.set('category', value);
        setCategory(value);
        setParams();
        dispatch(newFilter({ type: 'category', value }));
    }
    const handleRating = (event) => {
        let value = parseInt(event.target.value);
        filterParams.set('rating', value);
        setRating(value);
        setParams();
        dispatch(newFilter({ type: 'rating', value }));
    }
    const handleYear = (event) => {
        let value = event.target.lastChild?.data;
        filterParams.set('year', value);
        setYear(value);
        setParams();
        dispatch(newFilter({ type: 'year', value }));
    }

    const handleClean = () => {
        filterParams = new URLSearchParams('');
        history.replace({
            pathname: '/',
            search: ''
        });
        setName('');
        setCategory('');
        setRating(0);
        setYear('');
        toggleMovies(filterParams);
        dispatch(cleanFilter());
    }
    
    return (
        <Fragment>
            <Grid container spacing={2} padding={5}>
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
                            <Button variant="contained" onClick={handleClean}>Clean Filter</Button>
                        </Box>
                    </Grid>
            </Grid>
        </Fragment>
    );
    
}