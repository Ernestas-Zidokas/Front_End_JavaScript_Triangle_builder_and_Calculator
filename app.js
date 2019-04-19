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
