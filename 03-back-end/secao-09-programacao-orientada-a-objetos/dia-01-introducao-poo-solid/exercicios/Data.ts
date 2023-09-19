class Data {
  private _day: number;
  private _month: number;
  private _year: number;
  
  constructor(day: number, month: number, year: number) {
    const dateStr = `${year}-${month}-${day}`

    if(new Date(dateStr).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }
  get day(): number {
    return this._day
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this.year
  }

  set year(value: number) {
    this.year = value;
  }
}

const testDate = new Data(27, 4, 2000)

console.log(testDate);
