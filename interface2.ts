
// Optional Propety (1)

interface Person2{
  name: string;
  age?: number;         // 있을수도 있고 없을수도 있으면 ? 를 사용
}


function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({name: "Mark",age: 39});
hello2({name: "Amy"});

