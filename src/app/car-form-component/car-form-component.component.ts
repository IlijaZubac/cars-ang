import { Component, OnInit } from '@angular/core';
import { Car } from '../modules/car';


@Component({
  selector: 'app-car-form-component',
  templateUrl: './car-form-component.component.html',
  styleUrls: ['./car-form-component.component.css']
})
export class CarFormComponentComponent implements OnInit {
  year;
  private cars = [];
  public newCar;
  constructor() { 
    this.year=[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
      2000,2001,200,22003,2004,2005,2006,2007,2008,2009,2010,2011,
      2012,2013,2014,2015,2016,2017,2018];
  }
  submitCar(){

  }
  ngOnInit() {
  }

}
