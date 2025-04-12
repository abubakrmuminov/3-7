// // let random = Math.round(Math.random() * 77);
// // let guess = "";

// // while (guess !== "ha") {
// //   guess = prompt(`sizning soningiz ${random}`);
// // }

// // if(guess === "ha") {
// //     console.log("men topdim")
// // }

// // ====== //
// // 1-mashq//
// // ====== //

// const alohida = prompt("son kiriting")

// console.log("floor"(Math.floor(alohida)))
// console.log(Math.floor(alohida))
// console.log(Math.ceil(alohida))

// // ======= //
// // 2-mashq //
// // ======= //

// // console.log(Math.round(Math.round() * 10))

// // ======= //
// // 3-mashq //
// // ======= //

// let abubakr;

// console.log(abubakr)
// console.log(null)

// // ======= //
// // 4-mashq //
// // ======= //

// // let sonlar = 0

// // sonlar = sonlar + 1;
// // while(sonlar < 10) {
// //     console.log(Math.floor(Math.random() * 100))
// //     sonlar = sonlar + 1
// // }

// // ======= //
// // 5-mashq //
// // ======= //

// const daraja = prompt("son kiriting")

// console.log(Math.pow(daraja, 2))

// ======= //
// 5-mashq //
// ======= //

// let raqam = 0;

// while (raqam <= 20) {
//   raqam = raqam + 1;
//   if (raqam % 2 === 0) continue;
//   console.log(raqam);
// }

// ======= //
// 7-mashq //
// ======= //

const topgin = Math.round(Math.random() * 10);
let toping = "";
do {
  toping = prompt("raqamni toping");
  if (+toping == topgin) {
    console.log("to'g'ri topdingiz");
  } else {
    console.log("xato. yana kiriting");
  }
} while (!(+toping == topgin));

