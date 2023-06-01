function floor(num){
    num+=""
    let value = ""
    for (let i = 0; i < num.length; i++) {
        if(num[i] != "."){
            value = value + num[i]
        }
        else i = num.length
    }
    if(value < 0) value--
    return +value
}
console.log(floor(-5.23))