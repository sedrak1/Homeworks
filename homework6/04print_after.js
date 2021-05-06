const print_after = (fn) => {
    console.log("Hello, world")
    return fn()
}
const print = () => console.log("Elon Musk");
print_after(print);