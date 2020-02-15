export {};

class Mahoutsukai {}
class Souryo {}

// このように複数のclassを継承することはできないが
// class Taro extends Mahoutsukai,souryo {

// }

// 複数のinterfaceを継承することは許されている
//interfaceとは全てのメソッドが抽象クラスのメソッドのようなもの
//多重継承のようなことができる,interfaceの機能を持ってくる時は継承と呼ばずに実装すると呼ぶ。

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

//interfaceを継承のように扱う時にはextendsのような感覚で、impements(実装するという意味)を使う
class jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}
