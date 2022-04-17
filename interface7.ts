// function interface

interface HelloPerson{
  (name: string, age ?: number): void;
}

const helloPerson: HelloPerson = function(name : string, age ?: number){
  console.log(`안녕하세요! 이름은 ${name} 이고 나이는 ${age} 입니다.`);
};

helloPerson('Amy',39);
