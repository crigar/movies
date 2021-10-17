module.exports = {
    
    getMovies(filterParams = undefined) {
        let movies;
        if (filterParams) {
            filterParams = new URLSearchParams(filterParams);
            
            movies = this.movies.filter(
                movie => {
                    let name = movie.name.indexOf(filterParams.get('name')) > -1;
                    if (filterParams.get('name') == null) {
                        name = true;
                    }
                    let category = this.checkValueInMovie(filterParams.get('category'), movie.category);
                    let rating = this.checkValueInMovie(filterParams.get('rating'), movie.rating);
                    let year = this.checkValueInMovie(filterParams.get('year'), movie.year);
                    return  name && rating && category && year;
                }
            )
            console.log(movies)
        } else {
            movies = this.movies;
        }
        return movies;
    },

    getYears() {
        return this.years
    },

    checkValueInMovie(paramValue, movieAttribute){
        if (paramValue && paramValue != 'undefined') {
            return paramValue == movieAttribute           
        } else {
            return true;
        }
    },

    years: Array(new Date().getFullYear() + 1 - 1888).fill().map((_, i) => (i + 1888).toString()).reverse(),
    movies: [
        {
            id: 1,
            name: 'Movie1',
            category: 'category',
            rating: 5,
            year: '2020',
            image: 'image',
        },
        {
            id: 2,
            name: 'Movie2',
            category: 'Comedia',
            rating: 3,
            year: '2020',
            image: 'image',
        },
        {
            id: 3,
            name: 'Movie3',
            category: 'Aventuras',
            rating: 3,
            year: '2021',
            image: 'image',
        },
        {
            id: 4,
            name: 'Movie4',
            category: 'category',
            rating: 3,
            year: '2020',
            image: 'image',
        },
        {
            id: 5,
            name: 'Movie5',
            category: 'category',
            rating: 2,
            year: '2020',
            image: 'image',
        },
    ]
}

