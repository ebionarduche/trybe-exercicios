
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nationality = 'brazilian' } = person

const getNationality = ({ firstName, nationality = 'Brasilizan'}) => `${firstName} is ${nationality}`;


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));