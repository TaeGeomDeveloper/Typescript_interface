"use strict";
// Optional property
function hello3(person) {
    console.log(`안녕하세요! ${person.name}`);
}
const p31 = {
    name: "Mark",
    age: 39,
};
const p32 = {
    name: "Anna",
    systems: ['Sung', 'Chan'],
};
const P33 = {
    name: 'Bokdaengi',
    father: p31,
    mother: p32,
};
hello3(p32);
