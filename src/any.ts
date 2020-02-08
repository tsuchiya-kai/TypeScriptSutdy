import axios from 'axios';

export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function(responce) {
  //NOTE:中身がわからないものはany型(何も指定しなくても初期値でany型になる)
  //しかしany型は好ましくないのでわかっている場合は型付けをしておく
  // let data: any = responce.data;

  //中身はobjectの配列なのでこの世な指定になる
  //しかしこの指定だと空のobjectが入っている時点で通ってしまうのでこれで十分とは言えない
  // let data: object[] = responce.data;

  //そんな時に"interface"を使う
  //これを使うとオリジナルの型(条件)を任意の名前で定義することができる
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = responce.data;

  console.log(data);
});
