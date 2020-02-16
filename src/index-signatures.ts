export {};

//インデックスシグネチャー

// let profile: { name?: string } = {};
let profile: { [index: string]: string | number } = {};

// How  to write index signatures
// { [index:typeForIndex]:typeForValue }

profile.name = 'Ham';
profile.age = 43;

interface Profile {
  [index: string]: string | number;
}

let Profile: Profile = {};
