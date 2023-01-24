
const ladoA = -60;
const ladoB = 60;
const ladoC = 60;
let soma = ladoA + ladoB + ladoC;

let ladosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0;

if(ladosPositivos){

    if (soma === 180){
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('ângulo inválido kiki!');
} 