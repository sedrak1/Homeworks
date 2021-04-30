function salaries(obj){
    let salaries = 0
    for (let key in obj){
        salaries += obj[key]
    }
    console.log(salaries)
}
