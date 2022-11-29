import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IActor} from "../../../interfaces/interfaceActor/IActor";
import {urls} from "../../../constants/urls";


@Injectable({
  providedIn: 'root'
})

export class ActorService {

  constructor(private httpClient: HttpClient) { }

getAll(page:number): Observable<IActor[]> {
    return this.httpClient.get<IActor[]>(urls.actors(page));
}

}
