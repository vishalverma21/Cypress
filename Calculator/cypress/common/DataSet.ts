class DataSet {
  private _numbers: number[] = [];

  get getNumbers(): number[] {
    return this._numbers;
  }

  set setNumbers(newArticle: number[]) {
    this._numbers = newArticle;
  }

}
export default DataSet;
