function Person(name,age){
    this.name = name
    this.age = age
    this.stomach = []
}

Person.prototype.eat = function(...args){
    for (let food in args) {
        this.stomach.push(args[food])
    }
    if(this.stomach.length > 10){
        this.poop()
    }
}

Person.prototype.poop = function(){
    this.stomach = []
}

Person.prototype.to_string = function(){
    return this.name + ", " + this.age
}

function Baby(name, age, favorite_toy){
    Person.call(this,name,age)
    this.favorite_toy = favorite_toy
}
Baby.prototype = Object.create(Person.prototype)
Baby.prototype.play = function(){
    return this.favorite_toy
}

baby = new Baby("Vrezh", 22, "macbook")
console.log(baby.eat("asd"))
console.log(baby.stomach)
console.log(baby.name)