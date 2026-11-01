"use strict";

let nimi = prompt("Anna nimesi: ");

// Arvotaan luku 1-4
let numero = Math.floor(Math.random() * 4) + 1;

let talo;

switch (numero) {
  case 1:
    talo = "Gryffindor";
    break;
  case 2:
    talo = "Slytherin";
    break;
  case 3:
    talo = "Hufflepuff";
    break;
  case 4:
    talo = "Ravenclaw";
    break;
}

document.getElementById("target").innerHTML = nimi + ", you are " + talo + ".";