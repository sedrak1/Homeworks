class Author{
    constructor(name, email, gender){
        this._name = name
        this._email = email
        this._gender = gender
    }
    to_string(){
        if(this.gender === "male"){
            return `Mr. ${this.name}`
        }
        return `Ms. ${this.name}`
        
    }
    get name(){
        return this._name
    }
    get email(){
        return this._email
    }
    get gender(){
        return this._gender
    }
    set name(str){  
        if(!/^[a-zA-Z]/.test(str)){
            throw new Error('Invalid name')
        }
        this._name = ""
        let splited_str = str.split(" ")
        for (const value of splited_str) {
            this._name += (value[0].toUpperCase() + value.substring(1).toLowerCase() + " ")
        }
        
        
    }
    set email(str){
        let email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  //my research skills helped me 
        if (!str.match(email_regex)){
            throw new Error('Invalid email')
        }
        this._email = str
    }
    set gender(str){
        if(!(str.toLowerCase() === "female" || str.toLowerCase() === "male")){
            throw new Error("Invalid gender")
        }
        this._gender = str.toLowerCase()
    }
        
    
}

class book{
    constructor(title, author, price, quantity){
        this._title = title
        this._author = author 
        this._price = price
        this._quantity = quantity
    }
    get title(){
        return this._title
    }
    get author(){
        return this._author
    }
    get price(){
        return this._price
    }
    get quantity(){
        return this._quantity
    }
    set price(num){
        if(typeof num !== "number" || Number.isNaN(num)){
            throw TypeError("Price is not a number")
        }
        this._price = num
    }
    set quantity(num){
        if(typeof num !== "number" || Number.isNaN(num)){
            throw TypeError("Quantity is not a number")
        }
        this._quantity = num
    }

    get_profit(){
        let price_is_true = (typeof this.price !== "number" || Number.isNaN(this.price))
        let quantity_is_true = (typeof this.quantity !== "number" || Number.isNaN(this.quantity))
        if(price_is_true || quantity_is_true){

            throw TypeError("Invalid types of price or quantity")
        }
        return this.price * this.quantity
    }
    to_string(){
        return {
            Title: this._title,
            Author: this._author.name,
            Price: this._price,
            Quantity: this._quantity,
            Profit: this.get_profit()
        }
    }
     
}


aut = new Author("sET","asd.asd", "male")
aut.name ="Agata Qristi"
aut.email = "agataqristi@email.com"
aut.gender = "female"
console.log(aut.name)
console.log(aut.email)
console.log(aut.gender)
console.log(aut.to_string())


asd = new book("asd", aut, 3, 7)
console.log(asd.price)
console.log(asd.get_profit())
console.log(asd.to_string())
