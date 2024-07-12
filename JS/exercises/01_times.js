let digit = prompt("Enter digit")
let times = prompt("Enter times")

if (digit != "" && times != "") {
    for (let i = 1; i <= times; i++) {
        let result = digit * i
        document.write(`${digit} * ${i} = ${result}<br>`)
    }
} else {
    document.write("Please enter digit & times")
}