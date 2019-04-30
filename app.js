// Triangle, Pyramid, Romb dynamic creator
function triangle(number) {
  let triangle = '';
  let star = '*';
  let space = "&nbsp;";

  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      triangle += star + space;
    }
    triangle +='<br>';
  }
  document.querySelector('#output').innerHTML = triangle;
}

document.querySelector('#buttons').addEventListener('click', (event)=>{
  let number = Number(document.querySelector('#number').value);
  let pyramidType = document.querySelector('#pyramidType').value;
  let id = event.target.id;

  switch (id) {
    case 'triangle':
      triangle(number);
      break;
    case 'pyramid':
      pyramid(number, pyramidType);
      break;
    case 'romb':
      romb(number);
      break;
    default:
      break;
  }
})

function pyramid(number, reversed) {
  let pyramid = '';
  let star = '*';
  let space = "&nbsp;";

  for (let i = 0; i < number; i++) {
    if(reversed == 'true'){
      for (let k = 0; k < i; k++) {
        pyramid += space;
      }

      for (let j = 0; j < (number - i); j++) {
        pyramid += star + space;
      }
    } else {
      for (let j = 0; j < (number - i); j++) {
        pyramid += space;
      }

      for (let k = 0; k < i; k++) {
        pyramid += star + space;
      }
    }
    pyramid +='<br>';
  }
  document.querySelector('#output').innerHTML = pyramid;
}

function romb(number) {
  let pyramid = '';
  let star = '*';
  let space = "&nbsp;";

  for (let i = 0; i < number; i++) {
    let halfNumber = number/2;

    if(i <= halfNumber){
      for (let j = 0; j < (number - i); j++) {
        pyramid += space;
      }

      for (let k = 0; k < i; k++) {
        pyramid += star + space;
      }
    } else {
      for (let m = 0; m < i; m++) {
        pyramid += space;
      }

      for (let l = 0; l < (number - i); l++) {
        pyramid += star + space;
      }
    }

    pyramid +='<br>';
  }
  document.querySelector('#output').innerHTML = pyramid;
}
//---------------------------------------------------------------
//Is Pangram validation

var string = "THE quick brown fox jumps over the lazy dog."

function isPangram(string){
  let alphabet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let lowerString = string.toLowerCase();
  let correct = true;
  alphabet.forEach((char)=> {
    if(!lowerString.includes(char)){
      correct = false;
    }
  })
  return correct;
}

isPangram(string);
//---------------------------------------------------------------
// Calculator
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

//Function to get user input
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
