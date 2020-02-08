export {};

//(例：受け取ったメッセージをエラーとして発生させるための関数
//NOTE:neverは呼び元に戻ってこないものに指定する、returnがそもそもない(undfinedすら表示されない場合)
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// let foo:void = undefined;//Done
// let bar:never = undefined;//Error
