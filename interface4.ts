
// function in interface

interface Person4 {
  name : string;
  age : number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Mark',
  age : 39,

  hello: function (): void {
    console.log(`안녕하세요  ${this.name}`);
  }
}

const p42: Person4 = {
  name: 'Mark',
  age : 39,

  hello(): void {
    console.log(`안녕하세요  ${this.name}`);
  }
}

// const p43: Person4 = {
//   name: 'Mark',
//   age : 39,

//   hello: (): void => {
//     console.log(`안녕하세요  ${this.name}`);
//   }
// }

p41.hello();
p42.hello();
