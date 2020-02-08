export {};

//typeを使ったアノテーション
type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'Hum-san',
  age: 43
};

//interface
interface ObjectInterface {
  name: string;
  age: number;
}

//interfaceとtypealiaseの差は新しく型の宣言をするのと(interface)、型に別名をつけるのの差である(typeAliase)
