import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie, IMovieDetails} from "../../../interfaces";
import {urls} from "../../../constants/urls";


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.movies(page))
  }

  getById(id:number): Observable<IMovieDetails>{
    return this.httpClient.get<IMovieDetails>(urls.singleMovie(id))
  }
}
