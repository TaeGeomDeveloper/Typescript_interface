
// interface extends interface

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

