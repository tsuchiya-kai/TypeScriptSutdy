export {};

//ピッチャーの型
type Pitcher1 = {
  throwingSpeed: number;
};

//バッターの型
type Batter1 = {
  battingAverage: number;
};

//型を使って選手ごとのオブジェクトを生成
const sasaki: Pitcher1 = {
  throwingSpeed: 154
};

const ochiai: Batter1 = {
  battingAverage: 0.367
};

//このような属性の選手も作りたい
// type TowWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

//これのことをintersection(交差)型と呼ぶ
type TowWayPlayer = Pitcher1 & Batter1;

const OtaniSyohei: TowWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.367
};
