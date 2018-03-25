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

var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten(name) {
  kittens_new = [...kittens, name]
  return kittens_new;
}

function prependKitten(name) {
  kittens_new = kittens.slice(0,kittens.length - 1 )
  return kittens_new;
}
