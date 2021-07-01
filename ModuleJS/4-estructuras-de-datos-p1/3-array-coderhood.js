//Dado un array de alumnos de coderhood, indicar quien es el que lideral ranking de participacion en discord.
let alumnos = [
    {name:'Emagost',ranking:4},
    {name:'Lucas',ranking:2},
    {name:'Leo',ranking:1},
    {name:'Mansilla',ranking:3},
]
let escala= {
    posicion : 0
}
for (let i = 0; i < alumnos.ranking;i++) {
    const posiciones = alumnos[i]
    console.log (alumnos[i])


if (posiciones.escala > escala.posicion){
escala = posiciones;
}
}
const solucion = 'El escala mas altos es ' + escala
console.log (solucion)