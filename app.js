let alausKiekis = Math.floor(Math.random() * 5);
let alausBokalai = Math.floor(Math.random() * 5).toString();

if (alausKiekis == alausBokalai) {
    document.write('Isgeriau 5 alaus')
} else if (alausKiekis > alausBokalai) {
    document.write(`Isgeriau ${alausKiekis} o skarbos kazkur dingo`)
} else {
    document.write(`dar liko: ${(alausBokalai - Number(alausKiekis)).toString()} alaus`)
}

// let alus = alausKiekis === alausBokalai;
// if(alus) {
//     document.write('Laimejau')
// } else {
//     document.write('Nepasiseke')
// }
