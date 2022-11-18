import {Component, Input, OnInit} from '@angular/core';

import {ISerial} from "../../../../interfaces/interfaceSerial/ISerial";
import {IMG_URL} from "../../../../constants";

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})

export class SerialComponent implements OnInit {
  IMG_URL:string = IMG_URL;

  @Input()
  serial: ISerial;

  constructor() { }

  ngOnInit(): void {
  }

  // setNewClass(vote: number) {
  //   if (vote >= 8) {
  //     return 'green'
  //   } else if (vote >= 6) {
  //     return 'orange'
  //   } else {
  //     return 'red'
  //   }
  // };

}
