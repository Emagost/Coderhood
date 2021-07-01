/*
Hacer una función que reciba como parámetro tres números enteros y que lo ordene de
mayor a menor.
*/
function ordenarDeMayorAMenor(a,b,c) {
    if (a < b) {
        [a,b] = [b,a];
    }
    if (b < c) {
        [b,c] = [c,b];
    }
    if (a < b) {
        [a,b] = [b,a];
    }
    console.log(`El mayor: ${a}\nEl medio: ${b}\nEl menor:${c}`);
}