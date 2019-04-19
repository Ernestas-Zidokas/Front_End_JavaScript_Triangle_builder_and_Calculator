var string = "The quick brown fox jumps over the lazy."

let alphabet =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function isPangram(string){
    let correct = true;
    alphabet.forEach((char)=> {
        if(!string.includes(char)){
            console.log('false', correct);
            correct = false;
            console.log(char);
        }
    })
    console.log('viskas ok', correct);
    return correct;
}

isPangram(string);

document.querySelector('#submit').addEventListener('click', event => {
    event.preventDefault();
    console.log('user pressed submit');
    }
)

document.querySelector('body').addEventListener('keydown', event => {
    event.preventDefault();

    if(event.keyCode === 39){
        console.log('paspaudei ->');
    }
});

document.querySelector('#submit').addEventListener('mouseover', event => {
    document.querySelector('body').classList.add("green");
});

document.querySelector('body').addEventListener('wheel', event => {
    console.log(event);
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div>Scrolinaaaaam</div>')
})
