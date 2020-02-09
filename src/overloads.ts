export {};

//このdouble関数をどちらも実装したい
// function double(value: number): number {
//   return value * 2;
// }

// function double(value: string): string {
//   return value + value;
// }

//シグネチャー
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  }

  if (typeof value === 'string') {
    return value + value;
  }

  //これはいらない
  if (typeof value !== 'number' || typeof value !== 'string') {
    throw 'numberでもstringでも無いので、引数の型を確認してください。';
  }
}

console.log(double(100));
console.log(double('go'));
