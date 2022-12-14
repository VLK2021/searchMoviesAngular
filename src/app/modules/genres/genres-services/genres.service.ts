import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../constants/urls";
import {IGenres, IMovie} from "../../../interfaces";


@Injectable({
  providedIn: 'root'
})

export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IGenres[]> {
    return this.httpClient.get<IGenres[]>(urls.genresMovies)
  };

  getByGenre(id: number, page: number): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.genresMoviesById(id, page));
  };


}
