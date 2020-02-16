export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

//上記のようなやっていることは同じだが型が違うなどの処理をなんとか共通化できないか
//ジェネリクスの宣言<> Tは抽象的な方を表す時に慣習的に使われている
// 引数の型と戻り値の方は一致していることを表している
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));

console.log(echo<string>('Hello!'));

console.log(echo<boolean>(true));

// classの場合

// class Mirror {
//   constructor(public value: number) {}

//   echo(): number {
//     return this.value;
//   }
// }

// console.log(new Mirror(123).echo());

// 上記を汎用的にすると...
// 初期化をした時のvalueがehoした時に帰ってくるようにする

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
