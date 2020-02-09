export {};

//無名関数に対するアノテーション
let bmi: (height: number, weight: number) => number = function(
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.68, 53));
