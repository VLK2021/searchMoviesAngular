import {IGenres} from "./IGenres";
import {IProductionCompanies} from "./IProductionCompanies";
import {IProductionCountries} from "./IProductionCountries";
import {ILanguage} from "./ILanguage";


export interface IMovieDetails {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: object,
  budget: number,
  genres: IGenres,
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: "en",
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: IProductionCompanies,
  production_countries: IProductionCountries,
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ILanguage,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
