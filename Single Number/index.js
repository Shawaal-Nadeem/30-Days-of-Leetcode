function singleNumber(arrPar){
let temp = 0;
    for(let i = 0; i < arrPar.length; i++){
    temp = temp^arrPar[i];
}
return temp;
}


console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([1]))
