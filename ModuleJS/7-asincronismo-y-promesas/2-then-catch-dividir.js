/* Usando then y catch completar la función "programa" dada para llamar a dividirNumeros
e imprimir el resultado o imprimir unmensaje de error si ocurriera. Para provocar un error pueden enviar 0 como divisor.
function programa() {
// Tu código acá
}
programa(); */
function dividirNumeros(diviendo, divisor) {
    return new Promise(function(resolve,reject){
try{
    setTimeout(() => {
    resolve(diviendo/divisor)
    }, 3000);
}catch(error){
    reject(error)}
})
}
function programa(a,b) {
    return new Promise(function(resolve,reject){
    try{
        resolve(dividirNumeros(a,b))
    }catch(error){
        reject(error)
    }
})
}
programa(4, 2).then((x) => console.log("el resultado es", x)).catch((x)=>console.log(error));