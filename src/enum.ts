export {};

// enum Months {
//   january,
//   February,
//   March,
//   April,
//   May,
//   Jun,
//   July,
//   August,
//   September,
//   October,
//   November,
//   December
// }
//jsのkey:valueの形で数字を与えていく場合にkeyのみの記述で済むようなイメージ

//しかしindex番号と同じになってしまうので最初の値にのみ値を指定することができる
enum Months {
  january = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

//また存在しないプロパティにアクセスするとエラーが出るのでプロパティを使おうとしてうまく動作しなかった時に原因に気づきやすい
//JSではエラーがでない

//このように後に付け足すこともできる
enum Months {
  test
}

//両方コンソールできる
console.log(Months.October);
console.log(Months.test);
