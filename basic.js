// 1. var
// var는 함수 스코프를 가짐, 재선언과 재할당이 모두 가능
var x = 10;
console.log(x); // 10

x = 20; // 재할당 가능
console.log(x); // 20

var x = 30; // 재선언 가능
console.log(x); // 30


// 2. let
// let은 블록 스코프를 가짐, 재할당은 가능하지만 재선언은 불가
let y = 10;
console.log(y); // 10

y = 20; // 재할당 가능
console.log(y); // 20

//let y = 30; // 같은 스코프 내에서 재선언 불가 (오류 발생)

// 3. const
// const는 블록 스코프를 가짐, 선언과 동시에 초기화해야 하며, 재할당 불가
const z = 10;
console.log(z); // 10

// z = 20; // const 변수는 재할당 불가 (오류 발생)

// const z = 30; // 재선언도 불가 (오류 발생)