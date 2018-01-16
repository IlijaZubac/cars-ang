export class Car {
        
    id: string;
    mark: string;
    model: string;
    year: string;
    maxSpeed: string;
    isAuthomatic: boolean;
    engine: string;
    numberOfDoors: string;
    

    constructor(id: string, mark: string, model: string, year: string, maxSpeed: string, isAuthomatic: boolean,
        engine: string, numberOfDoors: string) {

        this.id = id;
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.isAuthomatic = isAuthomatic;
        this.engine = engine;
        this.numberOfDoors = numberOfDoors;
    }

}

