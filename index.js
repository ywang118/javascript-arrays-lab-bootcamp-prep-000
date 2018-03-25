const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {
   kittens.unshift(name)
   return kittens;
 }
 
var kittens = ["Milo", "Otis", "Garfield"]; 
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
} 
 
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
} 