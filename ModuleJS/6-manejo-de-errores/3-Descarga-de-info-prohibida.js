/*
Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente
lista:
let lista = [{
id: 19310,
nombre: "Bautista",
},{
id: 90010,
nombre: "Ema",
},{
id: 0051,
nombre: "Lucas",
},{
id: 00000,
nombre: "Meison",
}
]
La funcion pedirUsuario disparar un error llamado 'ForbiddenInformation' si el usuario
elegido es el del id = 00000
Llamar a la funcion pedirUsuario dentro de la funcion pedirInformacion para cambiar el
retorno de la funcion pedirInformacion.
Considerar que la funcion pedirInformacion ahora tiene que capturar un error, cuando la
capture debe disparar un error 'NetworkError'.
*/
function pedirUsuario() {
    try {
        let randomNumber = Math.random();
        if (randomNumber <= 0.25) {
            return lista[0];
        } else if (randomNumber <= 0.5) {
            return lista[1];
        } else if (randomNumber <= 0.75) {
            return lista[2];
        } else {
            throw new Error("ForbiddenInformation");
        }
    } catch(e) {
        return e;
    }
}
function pedirInformacion() {
    try {
        let usuario = pedirUsuario();
        return usuario;
    } catch(e) {
        return "NetworkError";
    }
}