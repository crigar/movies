import { Fragment } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MoviePrevCss from './MoviePrev.module.scss';
import Rating from '@mui/material/Rating';
import { Movie } from './../movie/Movie.component';
import {
  useRouteMatch,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function MoviePrev({ movie, showWatchMovie }) {

    let { path, url } = useRouteMatch();
    let logo = './../../assets/images/' + movie.image + '.jpg';

    return (
        <Fragment>
          <Card variant="outlined">
            <CardContent className={MoviePrevCss.moviePrevContainer}>
              <div className={MoviePrevCss.movieProp}>
                  <p>{movie.name}</p>
              </div>
              <div>
                <img src={logo} alt="thumbnail" className={MoviePrevCss.movieImage}></img>
              </div>
              <div className={MoviePrevCss.movieProp}>
                  <p>{movie.category}</p>
              </div>
              <div className={MoviePrevCss.movieProp}>
                  <p>{movie.year}</p>
              </div>
              <div className={MoviePrevCss.movieProp}>
              <Rating name="read-only" value={movie.rating} readOnly />
              </div>
            </CardContent>
            <CardActions className={MoviePrevCss.moviePrevContainer}>
              {
                showWatchMovie && (
                  <Button variant="contained" >
                      <Link to={`movies/${movie.id}`} >Watch Movie</Link>
                  </Button>
                  )
              }
            </CardActions>
          </Card>
        </Fragment>
    );
}