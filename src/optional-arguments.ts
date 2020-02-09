export {};

// let bmi: (height: number, weight: number) => number = (
//   height: number,
//   weight: number
// ): number => weight / (height * height);

// console.log(bmi(1.68, 53));

//bmi(身長、体重、console．logで出力するかどうか)
//bmi(1.68, 53,true);出力あり
//bmi(1.68, 53,false);出力無し
//bmi(1.68, 53);出力無し

//オプショナル無引数にしたい場合は?をつける
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

bmi(1.68, 53, true);
