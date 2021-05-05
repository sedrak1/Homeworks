let res_arr = []
let books_arr = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
    ];
for(let i = 0; i < books_arr.length; i ++){
    if(books_arr[i]["readStatus"] === true){
        res_arr.push(books_arr[i])
    }
}

let temp
for(let i = 0; i < res_arr.length; i++){
    for(let j = 1; j < res_arr.length; j++){
        if(res_arr[j]["percent"] < res_arr[j - 1]["percent"]){
            temp = res_arr[j - 1]
            res_arr[j - 1] = res_arr[j]
            res_arr[j] = temp
        }
    }
    
}
console.log(res_arr)