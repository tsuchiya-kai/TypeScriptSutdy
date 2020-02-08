export {};

//最も単純な指定方法
let profile1: object = { name: 'ham' };
//再代入が簡単にできる
profile1 = {}; //OK

//上記と同じ意味
let profile2: {} = { name: 'ham' };

//プロパティに対しても型指定が可能
let profile3: { name: string } = { name: 'ham' };

// profile3 = {test:'test'};//Error
profile3 = { name: 'test' };
