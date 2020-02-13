export {};

//静的メンバ
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atushi';
  static lastName: string = 'Ishida';

  static work() {
    // return "Hey, guys! Are you interested on TypeScript? Let's dive into TypeScript!";
    // これだとMeクラスに依存が残る
    // return `Hey, guys! This is ${Me.firstName}! Are you interested on TypeScript? Let's dive into TypeScript!`;
    return `Hey, guys! This is ${this.firstName}! Are you interested on TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
