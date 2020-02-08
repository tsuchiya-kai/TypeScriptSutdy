//NOTE:この記述によってjavascriptは本来変数宣言をするとglobalScopeになるが、
//exportすることによりモジュール化できるため他の箇所での変数宣言とかぶらないようにすることができる
export {};

let name = 'typescript';

let isFinished: boolean = true;
isFinished = false;
console.log({ isFinished });
