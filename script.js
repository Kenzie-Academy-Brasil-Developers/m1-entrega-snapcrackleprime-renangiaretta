function snapCrackle(maxValue){
    console.log(maxValue)
    let numeros =  ""
    for(let i = 1; i <= maxValue; i++){
        if(i%2 == 1 && i%5 === 0){
            numeros += "SnapCrackle, "
            }
        else if(i%2 != 0){
            numeros += "snap, "
        }
        else if(i%5 === 0){
            numeros += "Crackle, "
        }
        else
        {
            numeros += (`${i}, `)
        }
    }
    return numeros
}
console.log(snapCrackle(12))
console.log(snapCrackle(15))
console.log(snapCrackle(2))
console.log(snapCrackle(5))

