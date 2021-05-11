const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        isAstronaut: true,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        isAstronaut: true,
    },
    {
        username: "Elon Musk",
        isAstronaut: false,
    },
];

function filter_by_field(arr, field){
    return arr.filter(el => {
        if(el[field]){
            return el
        }
    })
}
console.log(filter_by_field(users, "isAstronaut"))