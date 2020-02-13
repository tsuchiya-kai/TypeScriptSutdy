export {};

// class VisaCard {
//   //読み取り専用にする修飾子
//   readonly owner: string;

//   constructor(owner: string) {
//     this.owner = owner;
//   }
// }

class VisaCard {
  constructor(public readonly owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('ハムさん');
console.log(myVisaCard.owner);

// myVisaCard.owner = 'unnko';
