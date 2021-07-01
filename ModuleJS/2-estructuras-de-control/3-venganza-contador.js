/*
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
Se llega a limite
La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
termine el recorrido
*/
console.clear ()
let x=10;
let contador=0;
let pares=0;
let suma=0;
let final=4;
for (var i= 0; i<x;i++){
    if (i%2===0){
    pares++
    }
}
while ((contador < x) && (pares>final)){
contador++
if (contador%3===0){
    console.log('Cantidad num x3',contador)
}
suma = suma + contador;
}
console.log ('La suma total de todos los numeros es: ',suma)