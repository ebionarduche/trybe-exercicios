let word = 'tryber';
let reverseWord = '';

for(index = 0; index > word.length; index += 1){
    reverseWord += word.length[index]
}
console.log(reverseWord);

// word.length - 1 pega o último item da string. Na primeira vez que o loop for executado, como o index é 0, vai pegar esse último elemento e adicionar como o primeiro elemento da string da palavra invertida. Na segunda vez, como o index será 1, será word.length -1 -1, ou seja, vai pegar o penúltimo elemento da palavra e colocar como segundo elemento da palavra invertida. Entendeu a lógica?