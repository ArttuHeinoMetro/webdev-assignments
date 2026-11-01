"use strict";

let vuosi = Number(prompt("Anna vuosi: "));

let karkausvuosi = (vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0;

if (karkausvuosi) {
  document.getElementById("target").innerHTML = vuosi + " is a leap year.";
} else {
  document.getElementById("target").innerHTML = vuosi + " is not a leap year.";
}