function avg(arr){
    let reducer = (acc, value) => acc + value
    const sum = arr.reduce(reducer)
    return sum / arr.length
}

function get_best_student(obj){
    let best_student
    let best_avg = 0
    for(key in obj){
        if(avg(obj[key]) > best_avg){
            best_avg = obj[key]
            best_student = key
        }
    }
    return best_student
}

console.log(get_best_student({
    John: [100, 90, 80],
    Bob: [100, 70, 80],
    }));
