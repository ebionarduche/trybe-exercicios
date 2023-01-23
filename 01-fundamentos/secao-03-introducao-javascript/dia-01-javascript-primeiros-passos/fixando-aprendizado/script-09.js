let processoSeletivo = 'lista'

switch (processoSeletivo) {
    case 'aprovado':
        console.log('Parabéns')
        break;

    case 'lista':
        console.log('Vocẽ está na nossa lista de espera')
        break;

    case 'reprovado':
        console.log('Você foi reprovado')
        break;
    
    default:
        console.log('informação incorreta')
        break;
}