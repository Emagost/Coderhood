/*
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir al final del programa la cantidad de numeros impares
Imprimir al final del programa la cantidad de numeros menores de limite / 2
*/
console.clear ()
let x=10;

for (var i=0; i < x; i++){
console.log (i);
}
for (var i=0; i < x; i++){
if (i%2===1){
    console.log ('impares',i)
}
}
for (var i=0; i < x; i++){
if (x/2>i){
    console.log ('cantidad de numeros menos de limite / 2',i)
}
}
