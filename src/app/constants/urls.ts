import {environment} from "../../environments/environment";
import {MY_KEY_API} from "./key.api";

const {API: baseURL} = environment;

export const urls = {
  movies: (page:number)=>`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${MY_KEY_API}&page=${page}`,
  singleMovie: (id: number) => `${baseURL}/movie/${id}?api_key=${MY_KEY_API}`
}

