export {};

//型の互換性

// 互換性あり
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

// 互換性無し
let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

// 同じ型には代入可能
let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

// string型に文字列リテラル型の代入も可能
// これは同じstringという括りのため可能になる
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(43, 'test');
