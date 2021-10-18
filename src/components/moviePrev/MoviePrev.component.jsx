import { Fragment } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MoviePrevCss from './MoviePrev.module.scss';
import Rating from '@mui/material/Rating';
import logo from './../../assets/images/forest.jpg'
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export function MoviePrev({ movie }) {
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
                <Button variant="contained">See Movie</Button>
            </CardActions>
          </Card>
        </Fragment>
    );
}