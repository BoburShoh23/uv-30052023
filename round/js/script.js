function round(num){
    num < 0 ? num -= 0.5 : num += 0.5
    num+=""
    let value = ""
    for (let i = 0; i < num.length; i++) {
        if(num[i] != "."){
            value = value + num[i]
        }
        else i = num.length
    }
    return +value
}
console.log(round(5.56))