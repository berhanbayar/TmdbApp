import axios from 'axios';
import { apiKey } from '../constants/constans.jsx';

// Base URL
const apibaseUrl = "https://api.themoviedb.org/3"; //https://api.themoviedb.org/3/movie/939243?api_key=54e2a16537f715ecc78e330da693bc76`;

// Endpoints
const NowPlayingMoviesEndPoint = `${apibaseUrl}/movie/now_playing?api_key=${apiKey}`; 
const TrendMoviesEndPoint = `${apibaseUrl}/movie/popular?api_key=${apiKey}`;
const UpComingMoviesEndPoint = `${apibaseUrl}/movie/upcoming?api_key=${apiKey}`;
const TopRatedMoviesEndPoint = `${apibaseUrl}/movie/top_rated?api_key=${apiKey}`;

const SearchEndPoint = `${apibaseUrl}/search/movie?api_key=${apiKey}`;

const MovieDetailsEndPoint = id => `${apibaseUrl}/movie/${id}?api_key=${apiKey}`;
const MovieCreditsEndPoint = id => `${apibaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const SimilarMoviesEndPoint = id => `${apibaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

export const image500 = path=> path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = path=> path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = path=> path ? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fallbackMoviePoster = 'https://i.hizliresim.com/fdoo1kj.jpg';
export const fallbackPersonImage = 'https://i.hizliresim.com/ibrr1wd.jpg';

const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params:{}
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return {}
    }

}

export const fetchNowPlayingMovies = () => {
    return apiCall(NowPlayingMoviesEndPoint);
}


export const fetchTrendMovies = () => {
    return apiCall(TrendMoviesEndPoint);
}

export const fetchUpComingMovies = () => {
    return apiCall(UpComingMoviesEndPoint);
}

export const fetchTopRatedMovies = () => {
    return apiCall(TopRatedMoviesEndPoint);
}

export const fetchSearchMovies = () => {
    return apiCall(SearchEndPoint);
}

export const fetchMovieDetails = id => {
    return apiCall(MovieDetailsEndPoint(id));
};

export const fetchMovieCredits = id => {
    return apiCall(MovieCreditsEndPoint(id));
};

export const fetchSimilarMovies = id => {
    return apiCall(SimilarMoviesEndPoint(id));
};
