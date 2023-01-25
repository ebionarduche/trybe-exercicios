let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;


for (index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

let media = sum / numbers.length;
console.log(media);

if(media > 20){
    console.log('valor maior do que 20: ' + media)
} else {
    console.log('valor menor ou igual a 20: ' + media)
}