import {ICreate_by} from "./ICreate_by";
import {IGenresSerial} from "./IGenresSerial";
import {INetworks} from "./INetworks";
import {ILanguageSerial} from "./ILanguageSerial";
import {ICompanieSerial} from "./ICompanieSerial";
import {ICountriesSerial} from "./ICountriesSerial";
import {ISeason} from "./ISeason";


export interface ISerialDetails {
  adult: boolean,
  backdrop_path: string,
  created_by: ICreate_by[],
  episode_run_time: Array<number>,
  first_air_date: string,
  genres: IGenresSerial[],
  homepage: string,
  id: number,
  in_production: boolean,
  languages: Array<string>,
  last_air_date: string,
  last_episode_to_air: any,
  name: string,
  next_episode_to_air: any,
  networks: INetworks[],
  number_of_episodes: number,
  number_of_seasons:number,
  origin_country: Array<string>,
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: ICompanieSerial[],
  production_countries: ICountriesSerial[],
  seasons: ISeason[],
  spoken_languages: ILanguageSerial[],
  status: string,
  tagline: string,
  type: string,
  vote_average: number,
  vote_count: number
}
