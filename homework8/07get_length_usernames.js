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
function get_usernames_length(arr){
    return arr.map((el) => {return el.username.length })
}
console.log(get_usernames_length(users))