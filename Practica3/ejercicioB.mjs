function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {

        if(usuario === "Admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

verificarUsuario("Admin")
.then(res => console.log(res))
.catch(err => console.log(err));

verificarUsuario("Joaquin")
.then(res => console.log(res))
.catch(err => console.log(err));