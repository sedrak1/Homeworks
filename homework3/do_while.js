let a = [1,2,3,4]
let length = a.length
let i = 0

do {
    console.log("for", i, a[i])
    i++
}
while (length != i + 1) {
    console.log("for", i, a[i])
    i++
}