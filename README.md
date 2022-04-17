# Typescript_interface
타입 스크립트 인터페이스 공부

인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.
인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다. 

## Optional property
< _interface2.js_ > < _interface3.js_ >

```typescript
  interface Person2{
  name: string;
  age?: number;         // 있을수도 있고 없을수도 있으면 ? 를 사용
  }
  function hello2(person: Person2): void {
    console.log(`안녕하세요! ${person.name} 입니다.`);
  }
```

```typescript
  interface Person3 {
  name: string;
  age? : number;

  [index: string]: any;  // 스트링 배열을 넣어줄수 있다.
  }
  function hello3(person: Person3): void {
    console.log(`안녕하세요! ${person.name}`);
  }
  const p32: Person3 = {
  name : "Anna",
  systems : ['Sung','Chan'],
  };
```

## Function in interface
< _interface4.js_ >

```typescript
  interface Person4 {
  name : string;
  age : number;
  hello(): void;      // hello 함수를 넣어줬다.
  }

  const p41: Person4 = {
    name: 'Mark',
    age : 39,
    hello: function (): void {
      console.log(`안녕하세요  ${this.name}`);
    }
  }
```

## class implements interface
< _interface5.js_ >
```typescript
  interface IPerson1 {
  name : string;
  age?: number;
  hello() :void;
  }

  class Person implements IPerson1 {    // 클래스와 함께 사용할수 있다.
    name : string;
    age? : number | undefined;
    constructor(name: string){
      this.name = name;
    }
    hello() :void {
      console.log(`안녕하세요! ${this.name} 입니다.`);
    }
  }
```

## interface extends interface
< _interface6.js_ >
```typescript
  interface IPerson2 {
  name : string;
  age? : number;
  }

  interface Ikorean extends IPerson2 {
    city : string;
  }

  const k : Ikorean = {
    name : '윤태검',
    city : "울산",
  };
```

## fuction interface
< _interface7.js_ >
```typescript
  interface HelloPerson{
  (name: string, age ?: number): void;
  }

  const helloPerson: HelloPerson = function(name : string, age ?: number){
    console.log(`안녕하세요! 이름은 ${name} 이고 나이는 ${age} 입니다.`);
  };
```

## Readonly interface Properites
< _interface8.js_ >
```typescript
  interface Person8 {
    name : string;
    age?: number;
    readonly gender: string;  // 한번 정한 값은 바뀌지 않는다.
  }
```

