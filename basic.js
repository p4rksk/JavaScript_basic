//함수를 메서드로 호출 하기
const star = {
    work: function () {
        return this.name + ":" + this.TitleOfWork}
};


const star1 = {
    name:"gangjun",
    TitleOfWork:"제3의 매력"
};

console.log(star.work.call(star1));