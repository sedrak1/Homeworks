const redundant = (str) => {
    const str_ret_fn = () => {
        return str
    }
    return str_ret_fn
}
console.log(redundant("appple")()) ;
