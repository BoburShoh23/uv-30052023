function ceil(num){
    num+=""
    let value = ""
    for (let i = 0; i < num.length; i++) {
        if(num[i] != "."){
            value = value + num[i]
        }
        else i = num.length
    }
    if(value > 0) value++
    return +value
}
console.log(ceil(-23.23))