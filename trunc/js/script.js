function ceil(num){
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
console.log(ceil(-2.33))