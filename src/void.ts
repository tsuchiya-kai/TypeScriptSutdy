export {};

//NOTE:関数に対し行う型付けではその関数の返す値に対して型を指定するが、
//関数には必ずreturnがあるわけではないので、何も値が返ってこないものに対しvoid型の型付けを行う
function returnNothing(): void {
  console.log("I dont't return anything!");
}

console.log(returnNothing());
