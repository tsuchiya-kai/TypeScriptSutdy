export {};

//型に別名をつけることができる
type Mojiretsu = string;

//通常
let fooString: string = 'hello';

//エイリアス使用
let fooMjiretsu: Mojiretsu = 'hello';

//例えばこのようなオブジェクトの場合
const example1 = {
  name: 'Ham',
  age: 43
};

//このような型エイリアスを用意することができる
type Profile = {
  name: string;
  age: number;
};

//上記エイリアスを使用
const example2: Profile = {
  name: 'Ham',
  age: 43
};

//オブジェクトを元にしてそのオブジェクトと同じように指定させるような型エイリアスを作る
type Profile2 = typeof example1;
