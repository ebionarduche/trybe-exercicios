let peca = 'piao'
let movimento;

switch (peca) {
    case 'cavalo':
        movimento = 'Movimento em L';
        break;
    case 'bispo':
        movimento = 'Movimento Diagonallll';
        break;
    case 'rei':
        movimento = 'Uma casa em qualquer direção'
        break;
    case 'piao':
        movimento = 'Ir para CSN e dps para o bicas'
        break;

    default: 
        movimento = 'Nun tem';
        
}   
console.log(movimento)