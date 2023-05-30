//콜백함수
const add =(a,b) => a+b;
const multifly = (a,b) => a*b;

function calculator(a, b, action){ //action 이라는 콜백함수 외부에서 부터 전달되는 함수 
    let result = action(a,b);
    console.log(result);
    return result;
}