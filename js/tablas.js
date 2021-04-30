$(document).ready(function () {
    $("#tasks").DataTable({
        language: {
            url: "../js/idioma.json",
        },
        responsive: "true",
        dom: "Bfrtilp",
        buttons: [
            {
                extend: "excelHtml5",
                text: `<i class=''>Exportar a Excel</i>`,
                titleAttr: "exportar a excel",
                className: "btn btn-success mb-2",
            },
            {
                extend: "pdf",
                text: `<i > Exportar a PDF</i>`,
                titleAttr: "exportar a PDF",
                className: "btn btn-danger mb-2",
            },
            {
                extend: "print",
                text: `<i >Imprimir</i>`,
                titleAttr: "Imprimir",
                className: "btn btn-info mb-2",
            },
        ],
    });
});
loadFromLocalStorage()
let botonenviar = document.getElementById("botonenviar");
let botoneditar = document.getElementById("botoneditar");

botoneditar.disabled = true;

function guardar() {
    const nombre = document.getElementById("txtnombre").value;
    const cantidad = document.getElementById("txtcantidad").value;
    const valor = document.getElementById("txtvalor").value;
    var total = parseInt(cantidad) * parseInt(valor);




    let contactenos = {
        nombre,
        cantidad,
        valor,
        total,
    };

    if (localStorage.getItem("listaContactenos") === null) {
        let listaContactenos = [];
        listaContactenos.push(contactenos);
        localStorage.setItem("listaContactenos", JSON.stringify(listaContactenos));
    } else {
        let listaContactenos = JSON.parse(localStorage.getItem("listaContactenos"));
        listaContactenos.push(contactenos);
        localStorage.setItem("listaContactenos", JSON.stringify(listaContactenos));
    }

    loadFromLocalStorage();
    location.reload();


}

function eliminar(id) {
    console.log(id);
    let listaContactenos = JSON.parse(localStorage.getItem("listaContactenos"));
    for (let i = 0; i < listaContactenos.length; i++) {
        if (i == id) {

            listaContactenos.splice(i, 1);
        }
    }


    localStorage.setItem("listaContactenos", JSON.stringify(listaContactenos));
    if (listaContactenos.length == 0) {
        localStorage.removeItem('listaContactenos')
        location.reload();
    }
    loadFromLocalStorage();

}

function editar(id) {
    console.log(id);
    botoneditar.disabled = false;

    botonenviar.disabled = true;
    let listaContactenos = JSON.parse(localStorage.getItem("listaContactenos"));
    for (let i = 0; i < listaContactenos.length; i++) {
        if (i == id) {
            document.getElementById("nombre").value = listaContactenos[i].nombre;
            document.getElementById("cantidad").value = listaContactenos[i].cantidad;
            document.getElementById("valor").value = listaContactenos[i].valor;


            localStorage.setItem("editando", id);
        }
    }
}

function editando() {
    let idedit = localStorage.getItem("editando");

    let listaContactenos = JSON.parse(localStorage.getItem("listaContactenos"));
    for (let i = 0; i < listaContactenos.length; i++) {
        if (i == idedit) {
            const nombre = document.getElementById("nombre").value;
            const cantidad = document.getElementById("cantidad").value;
            const valor = document.getElementById("valor").value;



            listaContactenos[i].nombre = nombre;
            listaContactenos[i].cantidad = cantidad;
            listaContactenos[i].valor = valor;
        }
    }
    localStorage.setItem("listaContactenos", JSON.stringify(listaContactenos));
    botoneditar.disabled = true;
    botonenviar.disabled = false;
    loadFromLocalStorage();
    location.reload();
}

function loadFromLocalStorage() {
    let listaContactenos = [],
        dataInLocalStorage = localStorage.getItem("listaContactenos"),
        taskthead = document.querySelector('#tasks thead'),
        taskbody = document.querySelector("#tasks tbody");


    if (dataInLocalStorage == null) {
        taskthead.innerHTML = "";
        console.log('hola')
    } else {
        listaContactenos = JSON.parse(dataInLocalStorage);
        // Draw TR from TBODY
        taskbody.innerHTML = "";

        listaContactenos.forEach(function (x, i) {
            let tr = document.createElement("tr"),
                tdId = document.createElement("td"),
                tdNombre = document.createElement("td"),
                tdCantidad = document.createElement("td"),
                tdValor = document.createElement("td"),
                tdTotal = document.createElement("td"),
                buttons = document.createElement("td"),
                btnRemove = document.createElement("button"),
                btneditar = document.createElement("button");

            tdId.innerHTML = i + 1;
            tdNombre.innerHTML = x.nombre;
            tdCantidad.innerHTML = x.cantidad;
            tdValor.innerHTML = x.valor;
            tdTotal.innerHTML = x.total;

            btnRemove.innerHTML = `<i>Eliminar</i>`;
            btnRemove.id = "botoneliminar";
            btnRemove.role = "button";

            btnRemove.className = "btn btn-danger";

            btnRemove.addEventListener("click", function () {
                eliminar(i);
            });

            btneditar.innerHTML = `<i>Editar</i>`;
            btneditar.id = "botoneditar";
            btneditar.role = "button";

            btneditar.className = "btn btn-primary";

            btneditar.addEventListener("click", function () {
                editar(i);
            });

            buttons.appendChild(btneditar);
            buttons.appendChild(btnRemove);


            tr.appendChild(tdId);
            tr.appendChild(tdNombre);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdValor);
            tr.appendChild(tdTotal);

            taskbody.appendChild(tr);

        });
    }
}