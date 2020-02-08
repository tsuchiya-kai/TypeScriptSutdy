export {};

//順を指定したunion型のようなもの
let profile: [string, number] = ['hum', 43];

// profile = ['hum',1,1] //エラー
// profile = [1,'hum'] //エラー

console.log(profile);
