function sum(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}
const mul = (num1, num2) => num1 * num2;
const mod = (num1, num2) => num1 % num2;

// document.querySelector("button[name='sum']").addEventListener('click', (event)=>{
//     let number1 = Number(document.querySelector("input[name='number1']").value);
//     let number2 = Number(document.querySelector("input[name='number2']").value);
//     document.querySelector('#result').textContent = sum(number1, number2);
// })

// document.querySelector("button[name='sub']").addEventListener('click', (event)=>{
//     let number1 = Number(document.querySelector("input[name='number1']").value);
//     let number2 = Number(document.querySelector("input[name='number2']").value);
//     document.querySelector('#result').textContent = sub(number1, number2);
// })
//
// document.querySelector("button[name='div']").addEventListener('click', (event)=>{
//     let number1 = Number(document.querySelector("input[name='number1']").value);
//     let number2 = Number(document.querySelector("input[name='number2']").value);
//     document.querySelector('#result').textContent = div(number1, number2);
// })
//
// document.querySelector("button[name='mul']").addEventListener('click', (event)=>{
//     let number1 = Number(document.querySelector("input[name='number1']").value);
//     let number2 = Number(document.querySelector("input[name='number2']").value);
//     document.querySelector('#result').textContent = mul(number1, number2);
// })
//
// document.querySelector("button[name='mod']").addEventListener('click', (event)=>{
//     let number1 = Number(document.querySelector("input[name='number1']").value);
//     let number2 = Number(document.querySelector("input[name='number2']").value);
//     document.querySelector('#result').textContent = mod(number1, number2);
// })

// 1. funkcija gauna user inputa
// 2. buttons divui deti event listeneri ir jo viduj isitikinti kad buvo paspaustas jo mygtukas ir is event objekto issiaiskinti kuria funckija kviesti

const userInput = (selector)=>{
    return Number(document.querySelector(selector).value);
}

document.querySelector('#buttons').addEventListener('click',(event)=>{
    let buttonName = event.target.name;
    let result = '';

    if(event.target.tagName == 'BUTTON'){
        switch (buttonName) {
            case 'sum':
            result = sum(userInput("input[name='number1']"), userInput("input[name='number2']"));
            break;
            case 'div':
            result = div(userInput("input[name='number1']"), userInput("input[name='number2']"));
            break;
            case 'sub':
            result = sub(userInput("input[name='number1']"), userInput("input[name='number2']"));
            break;
            case 'mul':
            result = mul(userInput("input[name='number1']"), userInput("input[name='number2']"));
            break;
            case 'mod':
            result = mod(userInput("input[name='number1']"), userInput("input[name='number2']"));
            break;
            case 'clear':
            document.querySelector("input[name='number1']").value = '';
            document.querySelector("input[name='number2']").value = '';
            document.querySelector("#result").textContent = '';
            break;
            default:
            break;
        }
        document.querySelector('#result').textContent = result;
    }
})
