class Author{
    constructor(name, email, gender){
        this._name = name
        this._email = email
        this._gender = gender
    }
    get name(){
        return (this._name[0].toUpperCase() + this._name.substring(1).toLowerCase())
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
        this._name = (str[0].toUpperCase() + str.substring(1).toLowerCase())
        
    }
    set email(str){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!str.match(validRegex)){
            throw new Error('Invalid email')
        }
        this._email = str
    }
    set gender(str){
        if(!(str.toLowerCase() === "female" || str.toLowerCase() === "male")){
            throw new Error("Invalid gender")
        }
        this._gender = str
    }
        
    
}
aut = new Author()
aut.name ="sET"
aut.email = "asd@asd.asd"
aut.gender = "male"
console.log(aut.name)
console.log(aut.email)
console.log(aut.gender)