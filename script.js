let answer = 0;
let flag = -1;
let firstNum = 0;
let secondNum = 0;

const screenJS = document.querySelector("#screen_id");

const clr = document.querySelector("#clr_button");
clr.addEventListener("click",(event)=>{
    answer = 0;
    flag = -1;
    firstNum = 0;
    secondNum = 0;
    screenJS.textContent = answer;
});



const plus = document.querySelector("#button_plus");
plus.addEventListener("click",(event)=>{
    flag = 0;
});
const minus = document.querySelector("#button_minus");
minus.addEventListener("click",(event)=>{
    flag = 1;
});
const multiply = document.querySelector("#button_multiply");
multiply.addEventListener("click",(event)=>{
    flag = 2;
});
const divide = document.querySelector("#button_divide");
divide.addEventListener("click",(event)=>{
    flag = 3;
});





const number0 = document.querySelector("#button_id0");
const num0 = Number(JSON.parse(number0.textContent));
number0.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num0;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num0;
        console.log(secondNum);
    }
    
});
const number1 = document.querySelector("#button_id1");
const num1 = Number(JSON.parse(number1.textContent));
number1.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num1;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num1;
        console.log(secondNum);
    }
    
});
const number2 = document.querySelector("#button_id2");
const num2 = Number(JSON.parse(number2.textContent));
number2.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num2;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num2;
        console.log(secondNum);
    }
    
});
const number3 = document.querySelector("#button_id3");
const num3 = Number(JSON.parse(number3.textContent));
number3.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num3;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num3;
        console.log(secondNum);
    }
    
});
const number4 = document.querySelector("#button_id4");
const num4 = Number(JSON.parse(number4.textContent));
number4.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num4;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num4;
        console.log(secondNum);
    }
    
});
const number5 = document.querySelector("#button_id5");
const num5 = Number(JSON.parse(number5.textContent));
number5.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num5;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num5;
        console.log(secondNum);
    }
    
});
const number6 = document.querySelector("#button_id6");
const num6 = Number(JSON.parse(number6.textContent));
number6.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num6;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num6;
        console.log(secondNum);
    }
    
});
const number7 = document.querySelector("#button_id7");
const num7 = Number(JSON.parse(number7.textContent));
number7.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num7;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num7;
        console.log(secondNum);
    }
    
});
const number8 = document.querySelector("#button_id8");
const num8 = Number(JSON.parse(number8.textContent));
number8.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num8;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num8;
        console.log(secondNum);
    }
    
});
const number9 = document.querySelector("#button_id9");
const num9 = Number(JSON.parse(number9.textContent));
number9.addEventListener("click",(event)=> {
    if(flag===-1){
        firstNum = firstNum*10+num9;
        console.log(firstNum);
    }else if(flag===0||flag===1||flag===2||flag==3){
        secondNum = secondNum*10+num9;
        console.log(secondNum);
    }
    
});

const equalTo = document.querySelector("#button_equalTo");
equalTo.addEventListener("click",(event)=> {
    if(flag === 0 ){
        answer = firstNum + secondNum;
    }else if(flag === 1){
        answer = firstNum - secondNum;
    }else if(flag === 2){
        answer = firstNum * secondNum;
    }else if(flag === 3){
        answer = firstNum / secondNum;
    }
    console.log(answer);
    screenJS.textContent = answer.toFixed(4);
});
