const persona = {
    nombre: "Joaquin Alejandro",
    edad: 22,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
}

// Destructuración
const {nombre, edad, direccion} = persona
// Imprime el mensaje
const mensaje = `Me llamo ${nombre}, tengo ${edad} años y vivo en ${direccion.ciudad}`
console.log(mensaje)