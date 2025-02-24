// if

const a = 5;
const b = 7;
const c = 2;

if (a>b) {
    console.log("A lebih besar dari B")
} else {
    console.log("B lebih besar dari A")
}

if (a % 2 === 0) {
    console.log("A habis dibagi 2")
} else if (b % 2 === 0) {
    console.log("B habis dibagi 2")
} else if (c % 2 === 0) {
    console.log("C habis dibagi 2")
} else {
    console.log("Semua variable tidak habis dibagi dibagi 2")
}

// if (2 == '2') {
//     console.log(true)
// }


// switch
let pilihan = 0

switch(pilihan){
    case 1:
        console.log("Ini pilihan 1")
        break;
    case 2:
        console.log("Ini pilihan 2")
        break;
    default:
        console.log("Gada boy")
        break;
}