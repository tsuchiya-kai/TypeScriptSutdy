export {};

let name: any = 'ham';

// let length = name.length as number;

// let length = (name as string).length;

let length = (<string>name).length;

console.log(length);

// length = 'num';
