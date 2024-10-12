// prompt: 사용자의 값을 입력받을 수 있는 창을 띄우는 함수
let titleOfWork =prompt("What work did you do?");

//조건문
if(titleOfWork == typeof(String)) {
    console.log("작품명을 말씀 해주셔서 감사합니다.")
} else {
    console.log("작품명을 기입 해주세요")
}
