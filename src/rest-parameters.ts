export {};

//restを使う場合の型付け
// const sum: (...values: number[]) => number = (...values: number[]): number => {
//   console.log(values);
//   return 100;
// };

// sum(1, 2, 3, 4, 5, 6, 7);

//reduceのなかにいれる足し算用の関数を定義
const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
