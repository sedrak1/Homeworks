function random_int(min, max){
    let rand = Math.floor(Math.random() * (max - min + 1))
    return rand
}
alert(random_int())