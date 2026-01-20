const side1 = 5
const side2 = 10
const side3 = 15

if (side1 + side2 < side3) {
    console.log("Not possible")
} else if (side1 + side3 < side2) {
    console.log("Not possible")
} else if (side2 + side3 < side1) {
    console.log("Not possible")
} else {
    console.log("Possible")
}