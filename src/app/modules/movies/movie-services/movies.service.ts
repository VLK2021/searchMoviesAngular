import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie, IMovieDetails} from "../../../interfaces";
import {urls} from "../../../constants/urls";
import {ITrailer} from "../../../interfaces/interfaceTrailer/ITrailer";


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page:number): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.movies(page))
  }

  getById(id:number): Observable<IMovieDetails>{
    return this.httpClient.get<IMovieDetails>(urls.singleMovie(id))
  }

  getSearch(word:string, page:number): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.searchMovies(word,page));
  }

  getTrailerById(id: number): Observable<ITrailer[]> {
    return this.httpClient.get<ITrailer[]>(urls.trailers(id));
  }


}
