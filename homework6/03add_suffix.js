const add_suffix = (suffix) => {
    return (str) => {
        return str+suffix
    }
}

add_ly = add_suffix("ly");
add_less = add_suffix("less");

console.log(add_ly("hopeless"))
console.log(add_ly("total"))
console.log(add_less("fear"))
console.log(add_less("ruth"))