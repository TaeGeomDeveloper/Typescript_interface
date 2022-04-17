"use strict";
// function in interface
const p41 = {
    name: 'Mark',
    age: 39,
    hello: function () {
        console.log(`안녕하세요  ${this.name}`);
    }
};
const p42 = {
    name: 'Mark',
    age: 39,
    hello() {
        console.log(`안녕하세요  ${this.name}`);
    }
};
// const p43: Person4 = {
//   name: 'Mark',
//   age : 39,
//   hello: (): void => {
//     console.log(`안녕하세요  ${this.name}`);
//   }
// }
p41.hello();
p42.hello();
