function hello1(str1) {
    console.log("Hello after "+str1+" seconds")
}
function hello2(str2) {
    console.log("Hello after "+str2+" seconds")
}
setTimeout(hello1, 4000, 4)
setTimeout(hello2, 8000, 8)
