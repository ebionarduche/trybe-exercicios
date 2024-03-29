import Person from "./Person";

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades:  number[] = [];
  private _worksGrades: number[] = []

  constructor (name: string, birthDate: Date) {
    super(name, birthDate)
    this.enrollment = this.generateEnrollment()
  }

  get enrollment(): string {
    return this._enrollment
  }

  set enrollment(value: string) {
    if(value.length < 16) throw new Error('Matricula deve ter += 16 VARCHAR')
    this._enrollment = value
  }

  get examsGrades(): number[] {
    return this._examsGrades
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) throw new Error('Não pode ter mais que 4 notas de Prova')
    this._examsGrades = value
  }

  get worksGrades(): number[] {
    return this._worksGrades
  }

  set worksGrades(value: number[]) {
    if(value.length > 2) throw new Error('Não pode ter mais que 2 notas de Prova')
    this._worksGrades = value
  }


  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');  
    return `STU${randomStr}`
  };

  sumGrades(): number {
    const sum = this._examsGrades.reduce((previusGrades, grades) => previusGrades + grades)
    return sum
  }

  sumAvagereGrade(): number {
    const avarege = this.sumGrades() / this._examsGrades.length
    return avarege;
  }
}

// `Class`: Student - ok
// `Extends`: Person - ok
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - assignmentsGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos