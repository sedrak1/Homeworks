const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
]
function get_usernames(arr){
    return arr.map((el) => {return el.username })
}
console.log(get_usernames(users))

