export {};

// let profile: { name: string; age: number } = {
//   name: 'Ham',
//   age: null
// };

//上記のようなこともtsconfig.jsonのstrictNulChecks:flaseにすると可能になってしまう。
// つまりどんな値にもnullが代入可能になってしまう。(nullableな状態と言う)

// profile = null;

// しかしこれだと型安全が確保されているとは言えなくなる。

// なので、union型を使用しnullを許容する設定を付け足す
// 局所的に対応するようなイメージ

let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null
};
