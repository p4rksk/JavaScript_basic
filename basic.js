console.log("Hello World");

// 숫자형 데이터 타입
Number =  1;
console.log(Number);

Number = 2;
console.log(Number);

Number = 1 + 2;
console.log(Number);

// String 데이터 타입
String = "I am";

let myName = "SunKyu";

console.log(String + " " + myName);

// Boolean 데이터 타입
const a = true;
const b = false;

console.log(a && b); //&&은 관계연산자로 둘다 true일때 true를 반환

//Symbol 데이터 타입
const sym1 = Symbol("sunkyu");
const sym2 = Symbol("sunkyu");

console.log(sym1 === sym2); //false 각각의 symbol로 생성되기 때문에 다른 값을 가진다.
