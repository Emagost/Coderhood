// Dado un array de estudiantes de una universidad, mostrar los nombres de los estudiantes de la carrera Ingenieria en computacion.

let alumnos = [
  {
    nombre: 'Ema',
    carrera: 'Ingenieria en computacion'
  },
  {
    nombre: 'Luis',
    carrera: 'Produccion audiovisual'
  },
  {
    nombre: 'Pablo',
    carrera: 'Ingenieria en computacion'
  },
  {
    nombre: 'Meison',
    carrera: 'Ingenieria en computacion'
  }
]
console.log("Los siguientes alumonos son estudiantes de la carrera de Ingenieria en computacion:")

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].carrera === "Ingenieria en computacion") {
        console.log(alumnos[i].nombre);
    }
}