function average_age(arr){
    let age_sum = arr.reduce((acc, cur_val) => {
        acc = acc + cur_val.age
        return acc
    }, 0)
    return age_sum / arr.length
}
const users = [
    {
        username: "Yuri Gagarin",
        lang: "ru",
        age: 56,
    },
    {
        username: "Nil Armstrong",
        lang: "ENG",
        age: 54,
    },
];
console.log(average_age(users))