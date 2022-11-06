import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie} from "../../../interfaces";
import {urls} from "../../../constants/urls";


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>(urls.movies)
  }


}
