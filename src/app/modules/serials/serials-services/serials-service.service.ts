import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";

import {ISerial} from "../../../interfaces/interfaceSerial/ISerial";
import {urls} from "../../../constants/urls";


@Injectable({
  providedIn: 'root'
})

export class SerialsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page:number): Observable<ISerial[]> {
    return this.httpClient.get<ISerial[]>(urls.serials(page))
  }


}
