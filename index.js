"use strict";
// 問題出題先
// https://zenn.dev/tsuboi/articles/c4f17185a6181f013108
// １
const array2 = [...new Array(100).keys()].map((n) => n + 1);
const array3 = Array.from({ length: 100 }, (v, n) => n + 1);
// ２
const images = [
    { height: "20px", width: "40px" },
    { height: "34px", width: "56px" },
    { height: "28px", width: "64px" },
];
const height = images.map(({ height }) => height);
const members = [
    { name: "松井", age: 39, gender: "male" },
    { name: "今田", age: 34, gender: "female" },
    { name: "鈴木", age: 24, gender: "male" },
    { name: "山田", age: 56, gender: "male" },
    { name: "田中", age: 89, gender: "female" },
];
const getName = (array) => {
    return array.map(({ name }) => name);
};
console.log(getName(members));
