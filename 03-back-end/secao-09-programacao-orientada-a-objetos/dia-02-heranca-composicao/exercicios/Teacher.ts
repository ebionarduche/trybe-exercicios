
import Person from "./Person";
import Employee from './Employee'
import Subject from "./Subject";
// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário
//       e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro



export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;
  

  constructor (name: string, birthdate: Date, private _salary: number, subject: Subject) {
    super(name, birthdate);
    this. _subject = subject;
    this.salary = _salary
    this._admissionDate = new Date()
    this._registration = this.generateRegistration()
  }

  get subject(): Subject {
    return this._subject;
  }
  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }
  set registration(value: string) {
    if(value.length < 16) throw new Error('O registro deve conter 16 VARCHAR') 
    this._registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }
  set admissionDate(value: Date) {
    if(value.getTime() > new Date().getTime()) throw new Error('Data de Adm não pode ser no futuro ') 
    this._admissionDate = value;
  }

  get salary(): number {
    return this._salary;
  }
  set salary(value: number) {
    if(value < 0) throw new Error('O salário não pode ser negativo')
    this._salary = value;
  }


  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');  
    return `PRF${randomStr}`
  }
}