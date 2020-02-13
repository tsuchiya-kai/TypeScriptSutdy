export {};

// * owner
//  *所有者を管理するもの
//  *初期化時に設定できる
//  *途中で変更できない
//  *参照できる
// *secretNumber
//  *個人番号
//  *初期化時に設定できる
//  *途中で変更できる
//  *参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //ownerを参照する専用のメソッドgetterと呼ばれる
  get owner() {
    return this._owner;
  }

  //変更はできるが参照はできないメソッド
  set secretNumber(secretNumber: number) {
    this.secretNumber = secretNumber;
  }
}

let card = new MyNumberCard('ハムさん', 12345678910);

console.log(card.owner);
// console.log(card.secretNumber);
