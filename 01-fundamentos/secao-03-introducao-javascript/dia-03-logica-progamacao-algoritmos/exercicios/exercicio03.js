let array = ['java', 'javascript', 'python', 'html', 'css'];

let = palavraMaior = array[0];
let = palavraMenor = array[0];

for (index = 0; index < array.length; index += 1){
    if(array[index].length > palavraMaior){
        palavraMaior = array[index];
    }
}