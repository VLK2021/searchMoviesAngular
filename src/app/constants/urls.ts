import {environment} from "../../environments/environment";
import {MY_KEY_API} from "./key.api";

const {API: baseURL} = environment;

export const urls = {
  movies: (page: number) => `${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${MY_KEY_API}&page=${page}`,
  singleMovie: (id: number) => `${baseURL}/movie/${id}?api_key=${MY_KEY_API}`,
  serials: (page: number) => `${baseURL}/discover/tv?api_key=${MY_KEY_API}&language=en-US&sort_by=popularity.desc&page=${page}`,
  singleSerial: (id: number) => `${baseURL}/tv/${id}?api_key=${MY_KEY_API}`
}

