let player1 = 'papel';
let player2 = 'pedra';

if (player1 == 'pedra') {
    if (player2 == 'tesoura') {
        console.log('player1 wins');
    } else if (player2 == 'papel') {
        console.log('player2 wins');
    } else {
        console.log('empate');
    }

} else if (player1 == 'tesoura') {
    if (player2 == 'pedra') {
        console.log('player2 wins');
    } else if (player2 == 'papel') {
        console.log('player1 wins');
    } else {
        console.log('empate');
    }
} else if (player1 == 'papel') {
    if (player2 == 'tesoura') {
        console.log('player2 wins')
    } else if (player2 == 'pedra') {
        console.log('player1 wins')
    } else {
        console.log('empate')
    }
}