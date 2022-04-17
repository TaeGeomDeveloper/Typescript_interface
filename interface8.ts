
// Readonly interface

// 한번 정한 값은 바뀌지 않는다.

interface Person8 {
  name : string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name : 'Mark',
  gender : 'Male',
};

// p81.gender = "female";  (사용 불가)


 


