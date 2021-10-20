module.exports = {
    
    getMovies(filterParams = undefined) {
        let movies;
        if (filterParams) {
            filterParams = new URLSearchParams(filterParams);
            
            movies = this.movies.filter(
                movie => {
                    let name = movie.name?.toUpperCase().indexOf(filterParams.get('name')?.toUpperCase()) > -1;
                    if (filterParams.get('name') == null) {
                        name = true;
                    }
                    let category = this.checkValueInMovie(filterParams.get('category'), movie.category);
                    let rating = this.checkValueInMovie(filterParams.get('rating'), movie.rating);
                    let year = this.checkValueInMovie(filterParams.get('year'), movie.year);
                    return  name && rating && category && year;
                }
            )
        } else {
            movies = this.movies;
        }
        return movies;
    },

    getYears() {
        return this.years
    },

    getMovie(movieId) {
        for (const movie of this.movies) {
            if (movieId == movie.id) return movie;
        }
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
            name: 'Venom',
            category: 'Action',
            rating: 5,
            year: '2018 ',
            image: 'venom',
            video: 'https://www.youtube.com/embed/-ezfi6FQ8Ds'
        },
        {
            id: 2,
            name: 'After We Fell',
            category: 'Drama',
            rating: 3,
            year: '2021',
            image: 'after',
            video: 'https://www.youtube.com/embed/J-x5WLWoZpY'
        },
        {
            id: 3,
            name: 'Shang-Chi and the Legend of the Ten Rings',
            category: 'Action',
            rating: 3,
            year: '2021',
            image: 'shang',
            video: 'https://www.youtube.com/embed/8YjFbMbfXaQ'
        },
        {
            id: 4,
            name: 'No Time To Die',
            category: 'Thriller',
            rating: 3,
            year: '2020',
            image: 'morir',
            video: 'https://www.youtube.com/embed/BIhNsAtPbPI'
        },
        {
            id: 5,
            name: 'Free guy',
            category: 'Comedy',
            rating: 4,
            year: '2021',
            image: 'free',
            video: 'https://www.youtube.com/embed/X2m-08cOAbc'
        },
        {
            id: 6,
            name: 'The Addams Family',
            category: 'Comedy',
            rating: 3,
            year: '2019',
            image: 'adams',
            video: 'https://www.youtube.com/embed/F7Ug863S8dQ'
        },
        {
            id: 7,
            name: 'Joker',
            category: 'Drama',
            rating: 5,
            year: '2019',
            image: 'joker',
            video: 'https://www.youtube.com/embed/t433PEQGErc'
        },
    ]
}

