export {};

// 名前空間
namespace Japanese {
  //export無しではこの名前空間以外からのアクセスはできない
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person('ハムさん');

console.log(me.name);

const michael = new English.Person('Michael', 'Joseph', 'jackson');

console.log(michael);
