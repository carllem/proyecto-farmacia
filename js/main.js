
function cargarUsuarios() {
    fetch('js/usuarios.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            var admin = document.getElementById('txtusuario').value;
            var pass = document.getElementById('txtpassword').value;

            var tipo = document.getElementsByName('Tipo');
            if (admin.length == 0 || admin.lenght < 4) {
                alert('el usuario esta vacio o el usuario tiene menos de 4 caracteres');
            } else if (pass.length == 0) {
                alert('la contraseña esta vaci0');
            } else if (admin == usuarios[0].Usuario && pass == usuarios[0].Contraseña && tipo[0].checked) {
                alert("Bienvenido Administrador\n" + usuarios[0].Nombre + " " + usuarios[0].Apellidos + "\n El Correo es: " + usuarios[0].email);
                window.open("html/principal.html", "_self")
            } else if (admin == usuarios[1].Usuario && pass == usuarios[1].Contraseña && tipo[1].checked) {
                alert("Bienvenido Asesor" + usuarios[1].Nombre + " " + usuarios[1].Apellidos + "\n El Correo es: " + usuarios[1].email);
                window.open("html/principal.html", "_self")
            } else {
                alert('usuarios, contraseña y/o tipo incorrecto');
            }
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}


cargarUsuarios();

function salir() {
    window.location = "../index.html"
    alert('ha cerrado la sesion')
}

