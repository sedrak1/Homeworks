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

let person = new Person("Michael", 50)
person.eat("asd", "qwe")
person.eat("asd", "qwe")
person.eat("asd", "qwe")
person.eat("asd", "qwe")
person.eat("asd", "qwe")
console.log(person.to_string())


console.log(person.stomach)