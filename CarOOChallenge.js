class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep"
    }
    toString(){
        // const {a,b,c} = this;
        //Did NOT work because the keys are: make, model, year;
        const {make,model,year} = this;

        return `The vehicle is a ${make} ${model} from ${year}.`
    }
}

class Car extends Vehicle {
    constructor(make,model,year) {
        super(make,model,year)
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make,model,year)
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!'
    }
}

class Garage {
    constructor(space){
        this.space = space;
        this.vehicles = [];
    }
    add(model){
        const {space,vehicles} = this;
        if ( space  > vehicles.length && (model.constructor.name === ('Motorcycle'))){
            vehicles.push(model)
            return "Vehicle added!"
        }
        if ( space  > vehicles.length && (model.constructor.name === ('Car'))){
            vehicles.push(model)
            return "Vehicle added!"
        }
        if (space === vehicles.length){
            return "Sorry, we're full!"
        }
        else{
            return "Only vehicles are allowed in here!"
        }
    }
}

//Below is the solution code: 
//learned instanceof as a reference to constructor class name -- even referencing NESTED constructor classes. 

class Garage2 {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }