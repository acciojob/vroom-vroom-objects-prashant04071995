function car (make,model){
    
    this.make=make;
    this.model=model;
}


car.prototype.getMakeModel=function(){
    
    return `${this.make} ${this.model}`;
}

function sportsCar(make,model,topSpeed){
    car.call(this,make,model);
    this.topSpeed=topSpeed;
    
}

sportsCar.prototype=Object.create(car.prototype);
sportsCar.prototype.constructor=sportsCar;


sportsCar.prototype.getTopSpeed=function(){
    return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
