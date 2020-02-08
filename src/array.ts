export {};

//推奨
let numbers: number[] = [1, 2, 3];
//非推奨
let numbers2: Array<number> = [1, 2, 3];

let strings: string[] = ['JavaScript', 'TypeScript', 'CoffeeScript'];

let strings2: Array<string> = ['JavaScript', 'TypeScript', 'CoffeeScript'];

//二次元配列(配列の中に配列)
let nizigenArray: number[][] = [
  [50, 100],
  [150, 300]
];

//複数型が混在する配列
let multiArray: (number | boolean | string)[] = [1, false, 'javascript'];
