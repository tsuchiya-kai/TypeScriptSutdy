export {};

//classを定義(classの名前は大文字から始まる)
class Person {
  //Classのプロパティに対しての型付けはここで行う
  name: string;
  age: number;

  //基本的に初期化処理を行う
  constructor(name: string, age: number) {
    //それぞれインスタンス化した際にその実体(インスタンス)に値が与えられるようにthisを使う故初期化処理と呼ぶ
    this.name = name;
    this.age = age;

    //this.name = name;
    //この場合の処理は以下の通り
    //インスタンスにnameというkeyを用意し(this.name)
    //受け取った引数を入れる(=name)
  }

  //Classにメソッドを定義
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

//インスタンス化
let taro = new Person('Taro', 30);
console.log(taro.profile());

//コンストラクターメソッド
//new演算子の実行時に自動で発動
//new Person();のかっこのなかに入れた引数はコンストラクターに渡る
