/*Nuestro software de reconocimiento de voz funciona de una forma un poco particualar, y el texto reconocido nos lo envía en un
arreglo de silabas. Dado el siguiente array, obtener un string con todo el texto de corrido.
const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do", "bien?", "Me", "a", "le", "gro."]
resultado esperado
"¡Hola, mundo! ¿Todo bien? Me alegro."
*/
const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do", "bien?", "Me", "a", "le", "gro."]
function sumarElementos(sumaAcumulada, silabas) {
    return sumaAcumulada + silabas
    }
const resultado = silabas.reduce (sumarElementos)
console.log (resultado);