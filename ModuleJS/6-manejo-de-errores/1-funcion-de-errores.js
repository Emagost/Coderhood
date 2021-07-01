/*
Crear una funcion que recibe tres parametros chance, mensaje y resultado.
chance: es un numero que indica el porcentaje que tiene esa funcion de arrojar un error.
si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error
mensaje: el mensaje que tiene que tener el error que puede disparar la funcion
resultado: es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna la
funcion si no arrojo un error
 */
function problability(){
    if (Math.random() < 0.2){
        throw new Error('you dont have luck')
}
return console.log ('you have luck')
}
try {
    let result = problability();
}
catch (error){
    console.log (error.message)
}

finally{
    console.log ('dont matter if you have luck or not')
}