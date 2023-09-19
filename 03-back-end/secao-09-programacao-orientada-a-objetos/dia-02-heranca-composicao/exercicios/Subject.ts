export default class Subject {
  constructor(private _name: string) {
    this.name = _name
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  validatename(value: string): void {
    if(value.length < 3) throw new Error("O nome deve conter no mínimo 3 VARCHAR");
    
  }
}


const math = new Subject('matemática')
console.log(math);

// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres