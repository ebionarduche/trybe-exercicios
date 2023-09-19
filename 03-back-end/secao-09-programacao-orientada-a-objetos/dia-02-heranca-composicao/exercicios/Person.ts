export default class Person {

  constructor(private _name: string, private _birthDate: Date) {
      this.name = _name;
      this.birthDate = _birthDate;
    }

    get name(): string {
      return this._name
    }

    set name(value: string) {
      this.validateName(value)
      this._name = value
    }

    get birthDate(): Date {
      return this._birthDate
    }

    set birthDate(value: Date) {
      this.validateBirthDate(value)
      this._birthDate = value
    }

    getAge(value: Date): number {
      const diff = Math.abs(new Date().getTime() - value.getTime())
      const yearMs = 31_563_000_000
      return Math.floor(diff / yearMs)
    }

    private validateName(value: string): void {
      if(value.length < 3) throw new Error('Nome deve ter pelo menos 03 caracteres')
    }

    private validateBirthDate(value: Date): void {
      if(value.getTime() > new Date().getTime()) throw new Error ('A Data de Nascimento não pode estar no futuro');
      if(this.getAge(value) > 120) throw new Error ('Pessoa deve ter no máximo 120 anos');
    }
}