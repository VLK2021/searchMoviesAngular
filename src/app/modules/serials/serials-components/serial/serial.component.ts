import {Component, Input, OnInit} from '@angular/core';
import {ISerial} from "../../../../interfaces/interfaceSerial/ISerial";

@Component({
  selector: 'app-serial',
  templateUrl: './serial.component.html',
  styleUrls: ['./serial.component.css']
})
export class SerialComponent implements OnInit {

  @Input()
  serial: ISerial;

  constructor() { }

  ngOnInit(): void {
  }

}
