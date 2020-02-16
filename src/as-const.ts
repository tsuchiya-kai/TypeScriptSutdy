export {};

let name = 'Ham' as const;

// name = 'unko'; // error

let profile = {
  name: 'Ham',
  height: 178
} as const;

// profile.height = 111; //error

// 型安全をこのようにきつくすることができる
// profileのプロパティは全てreadonlyになっている

// let profile { name: string; height: number }  = {
//   name: 'Ham',
//   height: 178
// } as const;

// profile.height = 111; //done

// しかし上記のようにオブジェクト型と併用するとオブジェクト型の方が優先され代入が可能になってしまうみたい？
