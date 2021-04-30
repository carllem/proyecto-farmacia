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
                className: "btn btn-success",
            },
            {
                extend: "pdf",
                text: `<i > Exportar a PDF</i>`,
                titleAttr: "exportar a PDF",
                className: "btn btn-danger",
            },
            {
                extend: "print",
                text: `<i >Imprimir</i>`,
                titleAttr: "Imprimir",
                className: "btn btn-info",
            },
        ],
    });
});
loadFromLocalStorage()
let botonenviar = document.getElementById("botonenviar");
let botoneditar = document.getElementById("botoneditar");

botoneditar.disabled = true;

function guardar() {
    const identificacion = document.getElementById("id").value;
    const PNombre = document.getElementById("pnombre").value;
    const SNombre = document.getElementById("snombre").value;
    const PApellido = document.getElementById("papellido").value;
    const SApellido = document.getElementById("sapellido").value;
    const Email = document.getElementById("email").value;
    const Cel = document.getElementById("cel").value;
    const Tel = document.getElementById("tel").value;
    const Url = document.getElementById("url").value;
    const Barrio = document.getElementById("barrio").value;
    const Hora = document.getElementById("hora").value;




    let contactenos = {
        identificacion,
        PNombre,
        SNombre,
        PApellido,
        SApellido,
        Email,
        Cel,
        Tel,
        Url,
        Barrio,
        Hora,
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
            document.getElementById("id").value = listaContactenos[i].identificacion
            document.getElementById("pnombre").value = listaContactenos[i].PNombre;
            document.getElementById("snombre").value = listaContactenos[i].SNombre;
            document.getElementById("papellido").value = listaContactenos[i].PApellido;
            document.getElementById("sapellido").value = listaContactenos[i].SApellido;
            document.getElementById("email").value = listaContactenos[i].Email;
            document.getElementById("cel").value = listaContactenos[i].Cel;
            document.getElementById("tel").value = listaContactenos[i].Tel;
            document.getElementById("url").value = listaContactenos[i].Url;
            document.getElementById("barrio").value = listaContactenos[i].Barrio;
            document.getElementById("hora").value = listaContactenos[i].Hora;

            localStorage.setItem("editando", id);
        }
    }
}

function editando() {
    let idedit = localStorage.getItem("editando");

    let listaContactenos = JSON.parse(localStorage.getItem("listaContactenos"));
    for (let i = 0; i < listaContactenos.length; i++) {
        if (i == idedit) {
            const identificacion = document.getElementById("id").value;
            const PNombre = document.getElementById("pnombre").value;
            const SNombre = document.getElementById("snombre").value;
            const PApellido = document.getElementById("papellido").value;
            const SApellido = document.getElementById("sapellido").value;
            const Email = document.getElementById("email").value;
            const Cel = document.getElementById("cel").value;
            const Tel = document.getElementById("tel").value;
            const Url = document.getElementById("url").value;
            const Barrio = document.getElementById("barrio").value;
            const Hora = document.getElementById("hora").value;


            listaContactenos[i].identificacion = identificacion;
            listaContactenos[i].PNombre = PNombre;
            listaContactenos[i].SNombre = SNombre;
            listaContactenos[i].PApellido = PApellido;
            listaContactenos[i].SApellido = SApellido;
            listaContactenos[i].Email = Email;
            listaContactenos[i].Cel = Cel;
            listaContactenos[i].Tel = Tel;
            listaContactenos[i].Url = Url;
            listaContactenos[i].Barrio = Barrio;
            listaContactenos[i].Hora = Hora;
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
                tdIdentificacion = document.createElement("td"),
                tdPNombre = document.createElement("td"),
                tdSNombre = document.createElement("td"),
                tdPApellido = document.createElement("td"),
                tdSApellido = document.createElement("td"),
                tdEmail = document.createElement("td"),
                tdCel = document.createElement("td"),
                tdTel = document.createElement("td"),
                tdUrl = document.createElement("td"),
                tdBarrio = document.createElement("td"),
                tdHora = document.createElement("td"),
                buttons = document.createElement("td"),
                btnRemove = document.createElement("button"),
                btneditar = document.createElement("button");

            tdId.innerHTML = i + 1;
            tdIdentificacion.innerHTML = x.identificacion;
            tdPNombre.innerHTML = x.PNombre;
            tdSNombre.innerHTML = x.SNombre;
            tdPApellido.innerHTML = x.PApellido;
            tdSApellido.innerHTML = x.SApellido;
            tdEmail.innerHTML = x.Email;
            tdCel.innerHTML = x.Cel;
            tdTel.innerHTML = x.Tel;
            tdUrl.innerHTML = x.Url;
            tdBarrio.innerHTML = x.Barrio;
            tdHora.innerHTML = x.Hora;

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
            tr.appendChild(tdIdentificacion);
            tr.appendChild(tdPNombre);
            tr.appendChild(tdSNombre);
            tr.appendChild(tdPApellido);
            tr.appendChild(tdSApellido);
            tr.appendChild(tdEmail);
            tr.appendChild(tdCel);
            tr.appendChild(tdTel);
            tr.appendChild(tdUrl);
            tr.appendChild(tdBarrio);
            tr.appendChild(tdHora);
            tr.appendChild(buttons);

            taskbody.appendChild(tr);

        });
    }
}