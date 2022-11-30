import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IActor} from "../../../interfaces";
import {urls} from "../../../constants/urls";
import {IActorDetails} from "../../../interfaces/interfaceActor/IActorDetails";


@Injectable({
  providedIn: 'root'
})

export class ActorService {

  constructor(private httpClient: HttpClient) { }

getAll(page:number): Observable<IActor[]> {
    return this.httpClient.get<IActor[]>(urls.actors(page));
}

getById(id:number): Observable<IActorDetails> {
    return this.httpClient.get<IActorDetails>(urls.singleActor(id));
}


}
