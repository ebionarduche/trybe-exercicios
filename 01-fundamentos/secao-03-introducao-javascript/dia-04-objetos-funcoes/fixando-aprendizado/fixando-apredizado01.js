let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

console.log('O cantor '+ singer.name + ' ' + singer.lastName + ' ' + 'possui ' + singer.age + ' anos.');

console.log('O cantor '+ singer['name'] + ' ' + singer['lastName'] + ' ' + 'possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.name + ' ' + singer.lastName;

// console.table(singer);
// console.log(singer);

console.log(singer.bornInfo.city);
console.log(singer['bornInfo']['city']);
console.log(singer.bestAlbuns[0]);