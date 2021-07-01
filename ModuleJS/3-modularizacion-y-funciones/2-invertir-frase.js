/*
Hacer una función que reciba una serie de palabras separadas por espacios y que imprima
la misma frase pero en orden inverso.
*/
console.clear()
function invertirFrase(n) {
let frase = "";
for (let i = n.length - 1; i >= 0; i--) {
frase += n[i];
}
return frase;
}
  console.log(invertirFrase("buenas tardes")); //sedrat saneub