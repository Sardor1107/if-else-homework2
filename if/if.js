//if 1
let a = +prompt("a sonini kiriting");
let b = +prompt("b sonini kiriting");
let c = +prompt("c sonini kiriting");
if (a > b && a > c && b > c) {
    console.log(c);
}
else if (a > b && a > c && b < c) {
    console.log(b);
}
else if (b > a && b > c && a > c) {
    console.log(c);
}
else if (b > a && b > c && a < c) {
    console.log(a);
}
else if (c > a && c > b && a > b) {
    console.log(b);
}
else if (c > a && c > b && a < b) {
    console.log(a);
}
else {
    console.log("sonlar kiriting");
}


// // if 2
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");
// if (a > b && a > c && b > c) {
//     console.log(b);
// }
// else if (a > b && a > c && b < c) {
//     console.log(c);
// }
// else if (b > a && b > c && a > c) {
//     console.log(a);
// }
// else if (b > a && b > c && a < c) {
//     console.log(c);
// }
// else if (c > a && c > b && a > b) {
//     console.log(a);
// }
// else if (c > a && c > b && a < b) {
//     console.log(b);
// }


// //if 3
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// if (a > b) {
//     console.log(a);
// }
// else if (a < b) {
//     console.log(b);
// }
// else if (a = b) {
//     console.log(0);
// }
// else {
//     console.log("a va b ga sonlar kiriting");
// }


// //if 10
// let a = +prompt("a sonini kiriting")
// if (a > 0 && a % 2 == 1) {
//     console.log("musbat toq son");
// }
// else if (a > 0 && a % 2 == 0) {
//     console.log("musbat juft son");
// }
// else if (a < 0 && -a % 2 == 1) {
//     console.log("manfiy toq son");
// }
// else if (a < 0 && -a % 2 == 0) {
//     console.log("manfiy juft son");
// }
// else if (a == 0) {
//     console.log("son 0 ga teng");
// }
// else {
//     console.log("a ga son kiriting");
// }


//if 11
// let a = +prompt("a sonini kiriting")
// if (a > 0 && a < 10 && a % 2 == 1) {
//     console.log("1 xonali toq son");
// }
// if (a > 0 && a < 10 && a % 2 == 0) {
//     console.log("1 xonali juft son");
// }
// else if (a >= 10 && a < 100 && a % 2 == 1) {
//     console.log("2 xonali toq son");
// }
// else if (a >= 10 && a < 100 && a % 2 == 0) {
//     console.log("2 xonali juft son");
// }
// else if (a >= 100 && a < 1000 && a % 2 == 1) {
//     console.log("3 xonali toq son");
// }
// else if (a >= 100 && a < 1000 && a % 2 == 0) {
//     console.log("3 xonali juft son");
// }
// else {
//     console.log("a ga 1 dan katta 1000 dan kichik son bering");
// }


// //if 13
// let a = +prompt("Pulingizni kiriting");
// let b = prompt("Tanaffusda bo'lsangiz Ture qiymatini kiriting");
// if (a >= 20 && b == "Ture" ) {
//     console.log("True");
// }
// else {
//     console.log("false");
// }


// //if 14
// let n = +prompt("n ikki xonali sonini kiriting")
// if ((n % 10)*10 + (n - n % 10) / 10 <= n) {
//     console.log("True");
// }
// else {
//     console.log("False");
// }


// // if 15
// let n = +prompt("n sonini kiriting");
// if (n > 0 && n < 10) {
//     console.log(1);
// }
// else if (n >= 10 && n < 100) {
//     console.log(2);
// }
// else if (n >= 100 && n < 1000) {
//     console.log(3);
// }
// else if (n >= 1000 && n < 10000) {
//     console.log(4);
// }
// else if (n >= 10000 && n < 100000) {
//     console.log(5);
// }
// else {
//     console.log("0 dan katta 100000 dan kichik butun sonni kiriting");
// }