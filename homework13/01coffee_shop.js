function Coffee_shop(name, menu = [], orders = []){
    this.name = name
    this.menu = menu
    this.orders = orders
    this.amount = 0
    this.cheap_item = this.menu[0]
}

Coffee_shop.prototype.add_orders = function(item){
    
    for(let i = 0; i < this.menu.length; i++){
        if(this.menu[i]["food_name"].includes(item)){
            this.orders.push(item)
            this.amount += this.menu[i]["price"]
            return "Order added!"
        }
        
    }
    
        return "This item is currently unavailable!"
    
}

Coffee_shop.prototype.ful_fill_order = function(){
    if(this.orders.length !== 0){
        let temp = this.orders[0]
        this.orders.shift()
        return `${temp} is ready!`
    }
    return "All orders have been fulfilled!"
}

Coffee_shop.prototype.list_orders = function(){
    return this.orders
}

Coffee_shop.prototype.due_amount = function(){
    return this.amount
}

Coffee_shop.prototype.only_food = function(){
    let only_food_obj = this.menu.filter(item => (item["food_type"] === "food"))
    return only_food_obj.map(el => el["food_name"])
}

Coffee_shop.prototype.only_drink = function(){
    let only_drink_obj = this.menu.filter(item => (item["food_type"] === "drink"))
    return only_drink_obj.map(el => el["food_name"])
}

Coffee_shop.prototype.cheapest_item = function(){
    for(let i = 0; i < this.menu.length; i++){
        if(this.menu[i].price < this.cheap_item.price){
            this.cheap_item = this.menu[i]
        }
    }
    return this.cheap_item.food_name
}

let menu = [
    {food_name: "qyabab", food_type: "food", price: 650},
    {food_name: "chalaghaj", food_type: "food", price: 1000},
    {food_name: "coca", food_type: "drink", price: 300},
    {food_name: "shawrma", food_type: "food", price: 800},
    {food_name: "fanta", food_type: "drink", price: 300},
]
let hamex_patar = new Coffee_shop("hamex patar", menu)
console.log(hamex_patar.add_orders("shawrma"))
console.log(hamex_patar.add_orders("fanta"))
console.log(hamex_patar.add_orders("pepsi"))
console.log(hamex_patar.list_orders())
console.log(hamex_patar.ful_fill_order())
console.log(hamex_patar.ful_fill_order())
console.log(hamex_patar.orders)
console.log(hamex_patar.list_orders())
console.log(hamex_patar.due_amount())
console.log(hamex_patar.only_food())
console.log(hamex_patar.only_drink())
console.log(hamex_patar.cheapest_item())