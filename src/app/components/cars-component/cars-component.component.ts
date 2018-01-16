import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-cars-component',
  templateUrl: './cars-component.component.html',
  styleUrls: ['./cars-component.component.css']
})
export class CarsComponentComponent implements OnInit {

    cars = [];
    constructor(private _carsService: CarServiceService) {
      this.cars = this._carsService.getCars();
   }

  ngOnInit() {
  }

}
  