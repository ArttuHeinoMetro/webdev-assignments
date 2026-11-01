"use strict";

let luku1 = Number(prompt("Anna ensimmäinen luku: "));
let luku2 = Number(prompt("Anna toinen luku: "));
let luku3 = Number(prompt("Anna kolmas luku: "));

let summa = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let keskiarvo = summa / 3;

document.getElementById("target").innerHTML =
  "Sum: " + summa + "<br>" +
  "Product: " + tulo + "<br>" +
  "Average: " + keskiarvo;