function Car(model, miles_per_galon){
    this.model = model
    this.miles_per_galon = miles_per_galon
    this.tank = 0
    this.odometer = 0   
}

Car.prototype.drive = function(distance){
    if(distance <= this.miles_per_galon * this.tank){
        this.odometer += distance
        this.tank -= distance / this.miles_per_galon 
        return `I drove ${this.odometer} miles, ${this.tank.toFixed(2)} gallons of fuel left`
    }

    else{
        this.odometer += this.miles_per_galon * this.tank
        this.tank = 0
        return `I ran out of fuel at ${this.odometer} miles!`
    }
}

Car.prototype.fill = function(gallons){
    this.tank += gallons
}


let car1 = new Car("Mercedes-Benz", 25)
console.log(car1.drive(1))
car1.fill(20)
console.log(car1.drive(1))
console.log(car1.drive(7))
console.log(car1.odometer)