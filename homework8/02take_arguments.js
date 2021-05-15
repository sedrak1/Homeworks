function sum() {
    let args = Object.values(arguments)
    return args.reduce((sum, current) => {
        return sum + current;
    });
}
console.log(sum(1,2,3,4))