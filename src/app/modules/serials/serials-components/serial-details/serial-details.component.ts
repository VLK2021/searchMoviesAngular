import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {SerialsService} from "../../serials-services";
import {ISerialDetails} from "../../../../interfaces";
import { IMG_URL } from 'src/app/constants';


@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.css']
})

export class SerialDetailsComponent implements OnInit {
serialDetails: ISerialDetails;
  IMG_URL: string = IMG_URL;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private serialsService:SerialsService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.serialsService.getById(id).subscribe(value => {
        this.serialDetails = value;
        console.log(value);
      })
    })
  }

  goBack(): void {
    this.location.back();
  }

}
