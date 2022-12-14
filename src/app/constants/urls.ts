import {environment} from "../../environments/environment";
import {MY_KEY_API} from "./key.api";

const {API: baseURL} = environment;

export const urls = {
  movies: (page: number) => `${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${MY_KEY_API}&page=${page}`,
  singleMovie: (id: number) => `${baseURL}/movie/${id}?api_key=${MY_KEY_API}`,
  searchMovies: (word: string, page: number) => `${baseURL}/search/movie?api_key=${MY_KEY_API}&language=uk-UK&query=${word}&page=${page}&include_adult=false`,

  serials: (page: number) => `${baseURL}/discover/tv?api_key=${MY_KEY_API}&language=en-US&sort_by=popularity.desc&page=${page}`,
  singleSerial: (id: number) => `${baseURL}/tv/${id}?api_key=${MY_KEY_API}`,
  searchSerial: (word: string, page: number) => `${baseURL}/search/tv?api_key=${MY_KEY_API}&language=uk-UK&query=${word}&page=${page}&include_adult=false`,

  actors: (page: number) => `${baseURL}/person/popular?api_key=${MY_KEY_API}&language=en-US&page=${page}`,
  singleActor: (id: number) => `${baseURL}/person/${id}?api_key=${MY_KEY_API}&language=en-US`,
  searchActor: (word: string, page: number) => `${baseURL}/search/person?api_key=${MY_KEY_API}&language=uk-UK&query=${word}&page=${page}&include_adult=false`,

  trailers: (id: number) => `${baseURL}/movie/${id}/videos?api_key=${MY_KEY_API}&language=en-US`,

  genresMovies: `${baseURL}/genre/movie/list?api_key=${MY_KEY_API}`,
  genresMoviesById: (id: number, page: number) => `${baseURL}/discover/movie?&language=uk-UK&api_key=${MY_KEY_API}&with_genres=${id}&page=${page}`,

  genresSerials: `${baseURL}/genre/tv/list?api_key=${MY_KEY_API}`,
  genresSerialsById: (id: number, page: number) => `${baseURL}/discover/tv?&language=uk-UK&api_key=${MY_KEY_API}&with_genres=${id}&page=${page}`
}

