class Students {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[] = Array();
  private _worksGrades: number[] = Array();


  constructor(enrollment: string, name: string, examsGrades: number[], worksGrades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = examsGrades;
    this.worksGrades = worksGrades;
  }

  get enrollment(): string {
  return this._enrollment;
  }
  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }
  set examsGrades(value: number[]) {
    if(value.length !== 4) {
      throw new Error("A pessoa precisa ter 04 notas de prova!");
    }
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }
  set worksGrades(value: number[]) {
    if(value.length !== 2) {
      throw new Error("A pessoa precisa ter 02 notas de Tabalho!");
    }
    this._worksGrades = value;
  }
  SumGrandes(): number {
    return [...this.examsGrades, ...this.worksGrades]
      .reduce((previousGrade, grade) => grade += previousGrade)
  }

  SumAverageGrades(): number {
    const SumGrandes = this.SumGrandes();
    const divider = [...this.examsGrades, ...this.worksGrades].length

    return  SumGrandes / divider;
  }
}

const student1 = new Students('201910664', 'Ebio', [10, 10, 10, 10], [10, 10])
const student2 = new Students('201910665', 'Beatriz', [10, 10, 10, 10], [10, 10])

console.log(student1);
console.log('Soma das notas', student1.SumGrandes());
console.log('Média das notas', student1.SumAverageGrades());
console.log(student2);
console.log('Soma das notas', student2.SumGrandes());
console.log('Média das notas', student2.SumAverageGrades());


