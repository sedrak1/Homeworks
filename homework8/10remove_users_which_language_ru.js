function remove_users_which_language_is_ru(arr){
    return arr.filter(el => el.lang !== "ru")
}

const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
    },
];
console.log(remove_users_which_language_is_ru(users))