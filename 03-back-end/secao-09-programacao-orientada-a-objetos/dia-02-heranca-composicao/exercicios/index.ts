import Person from "./Person"
import Student from "./Student";
// const ebio = new Person('Ebio Narduche', new Date('2000/04/27'))
// const beatriz = new Person('Beatriz de Aquino', new Date('2000/11/13'))

// console.log(ebio);
// console.log(beatriz);

// const test = new Person('Anna', new Date('2030/11/13'))


const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.worksGrades = [50, 45];
tamires.worksGrades = [47, 42];

console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
console.log(fernando);