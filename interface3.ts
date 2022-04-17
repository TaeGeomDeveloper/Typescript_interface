
// Optional property

interface Person3 {
  name: string;
  age? : number;

  [index: string]: any; 
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name}`);
}

const p31: Person3 = {
  name : "Mark",
  age: 39,
};

const p32: Person3 = {
  name : "Anna",
  systems : ['Sung','Chan'],
};

const P33 : Person3 = {
  name: 'Bokdaengi',
  father: p31,
  mother: p32,
};

hello3(p32);