import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class BehaviorSubjectService {
  storage = new BehaviorSubject('');

  constructor() {
  }
}
