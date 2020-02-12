export {};

class Person {
  //メンバー変数
  //これらに対して
  //console.log(taro.name);
  //console.log(taro.age);
  //このような形でアクセスが可能
  //しかしアクセスされてはまずいものもあるのでそれを制御するためにアクセス修飾子というものがある(public,private,protected)
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    //親クラスのコンストラクターを引き継ぐ
    super(name, age, nationality);
  }

  profile(): string {
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'JP');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
