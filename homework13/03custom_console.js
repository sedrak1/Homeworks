class Console{
    constructor(head = []){
        this.head = head
    }
    static history = []
    log(...args){
        let res = ''
        for(let i = 0; i < args.length; i++){
            if(typeof args[i] !== "object" && i !== 0){
                res += ", " +args[i]
            }
            else if(typeof args[i] !== "object"){
                res += args[i]
            }
            else{
                res += JSON.stringify(args[i])
            }
        }
        
        Console.history.push(res)

        if(this.head.length !== 0){
            return this.head + ": " + res
        }
        else{
            return res
        }
    } 
    history(){
        return Console.history
    }
    clear_history(){
        Console.history = []
        return true
    }

}

let my_console = new Console("usta")
console.log(my_console.log("Tigran", "Zhamkochyan"))
my_console.clear_history()
my_console = new Console("object:")
console.log(my_console.history())
console.log(my_console.log({ a:1, b:2 }))
console.log(my_console.log([1,2,3,4]))
console.log(my_console.history())