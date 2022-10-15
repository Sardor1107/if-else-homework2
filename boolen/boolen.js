// // Bool11
let a = +prompt("a butun sonini kiriting");
let b = +prompt("b butun sonini kiriting");
if (a % 2 || b % 2 ) {
    console.log("True");
}
else {
    console.log("False");
}


// //Bool12
// let a = +prompt("a sonini kiriting");
// if (a >= 10 && a < 100) {
//     console.log("true");
// }
// else if (a < 0) {
//     console.log ("musbat son kiriting");
// }
// else {
//     console.log("false");
// }


// // Bool13
// let a = +prompt(" a sonini kiriting");
// if (a >= 100 && a < 1000) {
//     console.log("true");
// }
// else if (a < 0) {
//     console.log ("musbat son kiriting");
// }
// else {
//     console.log("false");
// }


// // Bool14
// let a = +prompt(" a sonini kiriting");
// if (a < 0 ) {
//     console.log ("musbat son kiriting");
// }
// else if (a % 10 == (a - a % 10) / 10) {
//     console.log('true');
// }

// else if (a >= 100 ) {
//     console.log ("ikki xonali butun son kiriting");
// }
// else {
//     console.log("false");
// }


// // Bool15
// let a = +prompt(" a sonini kiriting");
// if (a < 0 ) {
//     console.log ("musbat son kiriting");
// }
// else if (a >= 100 || a < 10) {
//     console.log ("ikki xonali butun son kiriting");
// }
// else if (((a - a % 10) / 10 + a % 10) % 2 == 0 ) {
//     console.log("true")
// }
// else {
//     console.log("false");
// }


// //Bool16
// let a = +prompt(" a sonini kiriting");
// if (a < 0  ) {
//     console.log ("musbat son kiriting");
// }
// else if (a >= 100 || a < 10 ) {
//     console.log ("ikki xonali butun son kiriting");
// }
// else if (((a - a % 10) / 10 + a % 10) % 2 == 1) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// //Bool17
// let a = +prompt("a uch xonali butun sonini kiriting");
// let b = (a - a % 100)/100
// let c = (a % 100 - a % 10) / 10 
// if (a < 0) {
//     console.log ("musbat son kiriting");
// }
// else if (((a - a % 100) / 100 + (a % 100 - a % 10) / 10 + a % 10) % 2 == 1) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// //Bool18
// let a = +prompt("a butun sonini kiriting");
// if (a < 0) {
//     console.log("musbat son kiriting");
// }
// else if (a >= 10000 && a < 100000) {
//     console.log("true")
// }
// else {
//     console.log("false");
// }


// //Bool19
// let a = +prompt("a besh xonali butun sonini kiriting");
// b = (a - a % 10000) / 10000;
// c = (a % 10000 - a % 1000) / 1000;
// d = (a % 1000 - a % 100) / 100;
// e = (a % 100 - a % 10) / 10;
// f =  a % 10;
// if (b > c && c > d && d > e && e > f) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// //Bool20
// let a = +prompt("a besh xonali butun sonini kiriting");
// b = (a - a % 10000) / 10000;
// c = (a % 10000 - a % 1000) / 1000;
// d = (a % 1000 - a % 100) / 100;
// e = (a % 100 - a % 10) / 10;
// f =  a % 10;
// if (a < 0) {
//         console.log("musbat son kiriting");
// }
// else if (b < c && c < d && d < e && e < f) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// // Bool21
// let a = +prompt("a butun sonini kiriting");
// if (a > 0) {
//     a = a + 1
//     console.log(a);
// }
// else {
//     console.log(a);
// }


// // Bool22
// let a = +prompt("a butun sonini kiriting");
// if (a > 0) {
//     a = a + 1;
//     console.log(a);
// }
// else {
//     a = a - 2
//     console.log(a);
// }


// // Bool23
// let a = +prompt("a butun sonini kiriting");
// if (a > 0) {
//     a = a + 1;
//     console.log(a);
// }
// else if (a == 0) {
//     a = 10;
//     console.log(a);
// }
// else {
//     a = a - 2;
//     console.log(a);
// }


// //Bool24
// let a = +prompt("a sonini kiriting");
// let b = +prompt("b sonini kiriting");
// let c = +prompt("c sonini kiriting");
// if (a > 0 && b > 0 && c > 0) {
//     console.log(3);
// }
// else if (a > 0 && b > 0 && c < 0) {
//     console.log(2);
// }
// else if (a > 0 && b < 0 && c > 0) {
//     console.log(2);
// }
// else if (a > 0 && b < 0 && c < 0) {
//     console.log(1);
// }
// else if (a < 0 && b > 0 && c > 0) {
//     console.log(2);
// }
// else if (a < 0 && b > 0 && c < 0) {
//     console.log(1);
// }
// else if (a < 0 && b < 0 && c > 0) {
//     console.log(1);
// }
// else if (a < 0 && b < 0 && c < 0) {
//     console.log(0);
// }
// else {
//     console.log("butun sonlar kiriting");
// }


// //Bool25 
// let a = +prompt(" a sonini kiriting");
// let b = +prompt(" b sonini kiriting");
// let c = +prompt(" c sonini kiriting");
// if (a > 0 && b > 0 && c > 0) {
//     console.log("3 ta musbat");
//     console.log("0 ta manfiy");
// }
// else if (a > 0 && b > 0 && c < 0) {
//     console.log("2 ta musbat");
//     console.log("1 ta manfiy");
// }
// else if (a > 0 && b < 0 && c > 0) {
//     console.log("2 ta musbat");
//     console.log("1 ta manfiy");
// }
// else if (a > 0 && b < 0 && c < 0) {
//     console.log("1 ta musbat");
//     console.log("2 ta manfiy");
// }
// else if (a < 0 && b > 0 && c > 0) {
//     console.log("2 ta musbat");
//     console.log("1 ta manfiy");
// }
// else if (a < 0 && b > 0 && c < 0) {
//     console.log("1 ta musbat");
//     console.log("2 ta manfiy");
// }
// else if (a < 0 && b < 0 && c > 0) {
//     console.log("1 ta musbat");
//     console.log("2 ta manfiy");
// }
// else if (a < 0 && b < 0 && c < 0) {
//     console.log("0 ta musbat");
//     console.log("3 ta manfiy");
// }
// else {
//     console.log("butun sonlar kiriting");
// }


// //bool26 
// let a = +prompt("a butun sonini kiriting");
// let b = +prompt("b butun sonini kiriting");
// if (a > b) {
//     console.log(a);
//     console.log(b);
// }
// else if (a < b ) {
//     console.log(b);
//     console.log(a);
// }
// else if (a == b ) {
//     console.log(a);
//     console.log(b);
// }
// else {
//     console.log("butun sonlar kiriting");
// }
