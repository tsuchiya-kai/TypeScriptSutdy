export {};

//抽象クラス
abstract class Animal {
  //抽象メソッド
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

//抽象メソッドを実装しないとエラーが起きる
// ユースケースとしては絶対に実装しないといけない機能があるときなどに使う
// 大規模なアプリケーション開発に置いてはよく使われる便利な機能
// あ
