export {};

//functionキーワードによる関数定義
function bim(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bim(1.68, 53));
