const nota = 100;

if (nota > 80){
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
}
else if (nota >= 80 || nota >= 60) {
    console.log('Você esta na nossa lista de espera.');
}
else {
    console.log('Você reprovou.');
}