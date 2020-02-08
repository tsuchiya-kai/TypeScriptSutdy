export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown);//number

//NOTE:この型はunknownに指定してあるのでもしかしたらエラーかもしれないという旨のエラーが出る
// let sumUnknown = numberUnknown + 10;//error

if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

//このようなロジックをタイプガードと呼ぶ
