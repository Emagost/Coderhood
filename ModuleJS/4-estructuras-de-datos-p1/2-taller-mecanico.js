/* un taller mecanico tiene una lista de autos para arreglar en el dia, de cada auto sabemos:
  * nombre del duenio
  * valor del arreglo
  * tiempo que tarda el arreglo (en horas)
  * lista de repuestos necesarios

el duenio del taller quiere saber
1. cual es el arreglo mas caro y los repuestos que necetia
2. todos los arreglos para personas que se llamen `juan`
  3. el precio total los arreglos */
let autos = [
    { Duenio: 'Pablo', costo:8000,tiempo:120,repuestos:['puerta','rueda','paragolpe']},
    { Duenio: 'Lucas', costo:800,tiempo:20,repuestos:['puerta']},
    { Duenio: 'Emanuel', costo:200,tiempo:3,repuestos:['rueda']},
    { Duenio: 'Juan', costo:200,tiempo:3,repuestos:['rueda']},
    { Duenio: 'Juan', costo:5000,tiempo:3,repuestos:['vidrio']},
]
let autoMasCaro = {
    costo: 0
}
let respuestosJuan = []
let precioMax = 0;

function sumarRepuestosJuan (respuestos,respuestosJuan){
    for (let i = 0; i < respuestos.length; i++){
        let repuesto = respuestos[i]

        respuestosJuan.push(repuesto)
    }

    return respuestosJuan
}
for (let i=0; i < autos.length; i++) {
    const auto = autos[i]

    if (auto.costo > autoMasCaro.costo ){
    autoMasCaro = auto
}
    if (auto.Duenio === 'Juan'){
        respuestosJuan = sumarRepuestosJuan(auto.repuestos,respuestosJuan)
    }
    precioMax = precioMax + auto.costo
}
const solucion1 ='El auto mas caro cuesta ' + autoMasCaro.costo + ' y necesita los repuestos ' + autoMasCaro.repuestos
console.log(solucion1);
const solucion2 ='Los repuestos para las personas llamdas juan es ' + respuestosJuan
console.log (solucion2);
const solucion3 = 'La suma total de todos los presupuestos es de: ' + precioMax
console.log (solucion3)