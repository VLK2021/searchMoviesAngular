import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";

import {urls} from "../../../constants/urls";
import {IActor, ISerial, ISerialDetails} from "../../../interfaces";


@Injectable({
  providedIn: 'root'
})

export class SerialsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page:number): Observable<ISerial[]> {
    return this.httpClient.get<ISerial[]>(urls.serials(page))
  }

  getById(id:number): Observable<ISerialDetails>{
    return this.httpClient.get<ISerialDetails>(urls.singleSerial(id))
  }

  getSearch(word: string, page: number): Observable<ISerial[]> {
    return this.httpClient.get<ISerial[]>(urls.searchSerial(word, page));
  }


}
