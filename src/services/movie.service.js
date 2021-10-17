module.exports = {
    
    getMovies(filter) {
        console.log(filter)
        console.log(Object.keys(filter))
        let movies = this.movies.filter(
            movie =>
                movie.name.indexOf(filter.name) > -1 ||
                filter.category === movie.category ||
                filter.rating === movie.rating ||
                filter.year === movie.year
        );
        console.log(movies)
        return movies;
    },

    getYears() {
        return this.years
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
            category: 'category',
            rating: '5',
            year: '2020',
            image: 'image',
        },
        {
            id: 3,
            name: 'Movie3',
            category: 'category',
            rating: '5',
            year: '2020',
            image: 'image',
        },
        {
            id: 4,
            name: 'Movie4',
            category: 'category',
            rating: '5',
            year: '2020',
            image: 'image',
        },
        {
            id: 5,
            name: 'Movie5',
            category: 'category',
            rating: '5',
            year: '2020',
            image: 'image',
        },
    ]
}

