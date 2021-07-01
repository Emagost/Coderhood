/*
Emanuel quiere cocinar galletitas y quiere un programa que lo ayude a saber que debe
comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las
galletas. La receta pide los siguientes ingredientes
3 huevos
1 barra de chocolate
0.5 kilos de harina
5 cucharadas de azucar
Los ingredientes que tiene Ema tienen que ser variables al inicio del programa que sean
faciles de editar
 */
console.clear();
let huevos = 3;
let barraDeChocolate = 5;
let harina = 0.5;
let azucar = 3;
let comprar = "hay que comprar:\n";

if (huevos >= 3 && barraDeChocolate >= 1 && harina >= 0.5 && azucar >= 5) {
console.log("se pueden hacer las galletitas");
} else{
if (huevos < 3) {
    comprar = comprar + "-" + (3 - huevos) + " huevo(s)\n";
}
if (barraDeChocolate < 1) {
    comprar = comprar + "-" + 1 + " Barra de chocolate\n";
}
if (harina < 0.5) {
    comprar = comprar + "-Harina\n";
}
if (azucar < 5) {
    comprar = comprar + "-Azucar\n";
}
console.log(comprar);
}