import { Injectable } from '@angular/core';
import { Car } from '../car';


@Injectable()
export class CarServiceService {

  private cars
  constructor() { 
   

    this.cars = [
      {
        id: '1',
        mark: 'Renault',
        model: 'Modus',
        year: '2008',
        maxSpeed: '158',
        isAuthomatic: 'false',
        engine: 'diesel',
        numberOfDoors: '5'
      },
      {
        id: '2',
        mark: 'Renault',
        model: 'Megan',
        year: '2010',
        maxSpeed: '178',
        isAuthomatic: 'false',
        engine: 'diesel',
        numberOfDoors: '5'
      },
      {
        id: '3',
        mark: 'Renault',
        model: 'Megan',
        year: '2011',
        maxSpeed: '178',
        isAuthomatic: 'false',
        engine: 'diesel',
        numberOfDoors: '5'
      },
      {
        id: '4',
        mark: 'Audi',
        model: 'S5',
        year: '2014',
        maxSpeed: '278',
        isAuthomatic: 'true',
        engine: 'diesel',
        numberOfDoors: '3'
      },

    ]

  }
  getCars(){
    return this.cars
  }
  public addCar(newCar) {
    this.cars.push(newCar);
    this.cars.id++;
  }
}
