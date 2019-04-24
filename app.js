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
