//배열 만들기 
let alphabet = ["a", "b", "c", "d"];
console.log(alphabet);

//배열 특정 값 조회하기
console.log(alphabet[0]);

//배열 특정 값 추가하기
alphabet.push("e");
console.log(alphabet);

//배열 특정 값 삭제하기
alphabet.splice(2, 2);
console.log(alphabet);

//배열 특정 값 수정하기
alphabet[0] = "z";
console.log(alphabet);

//map을 이용해서 배열의 특정 값 변경
let sun = alphabet.map((a) => a === "a" ? "za" : a);
console.log(sun);