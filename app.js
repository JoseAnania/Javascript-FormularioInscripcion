// Definimos la clase Registro

function Registo(nombre, telefono, mail, charla, certificado) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.mail = mail;
    this.charla = charla;
    this.certificado = certificado;
}

// Creamos el Arreglo de Registros

let registros = new Array();

// Definimos la clase Charla

function Charla (id, nombre) {
    this.id = id;
    this.nombre = nombre;
}

// Creamos el Arreglo Charlas e introducimos las opciones

let charlas = new Array();
charlas[0] = new Charla(1, "Charla 1");
charlas[1] = new Charla(2, "Charla 2");
charlas[2] = new Charla(3, "Charla 3");

// Función que se llama desde el método ONLOAD
function inicio() {

    // Le damos comportamiento al botón Agregar
    document.getElementById("btnAgregar").onclick = () => {

        let nombre = document.getElementById("txtNombre").value;
        let telefono = document.getElementById("txtTelefono").value;
        let mail = document.getElementById("txtMail").value;
        let charla = document.getElementById("cboCharla").value;
        let certificado = document.getElementById("chkCertificado").value;

        // Si pasa la Validación, creo u nuevo Registro
        if (!validarCampos(nombre, telefono, mail, charla)) {
            
            let registro = new Registro (nombre, telefono, mail, charla, certificado);
            // Agregamos el Registro creado al Arreglo de Registros
            registros.push(registro);

            //Muestro los Reportes
            mostrarReportes();
        }
    }

    function validarCampos(nombre, telefono, mail, charla) {
        let valida = true;

        if (nombre == "") {
            document.getElementById("txtNombre").style = "background-color: red";
            valida = false;
        }
        if (telefono == "") {
            document.getElementById("txtTelefono").style = "background-color: red";
            valida = false;
        }
        if (mail == "") {
            document.getElementById("txtMail").style = "background-color: red";
            valida = false;
        }
        if (charla == "") {
            document.getElementById("cboCharla").style = "background-color: red";
            valida = false;
        }
        return valida;
    }
    function agregarRegistroTabla(registro) {
        let tabla = document.getElementById("lstExpositores");
        let textoCertificado = "";

        if(tabla.innerHTML == "")
        tabla.innerHTML =
        "<tr><th>NOMBRE</th><th>TELEFONO</th><th>MAIL</th><th>CHARLA</th><th>REQUIERE CERTIFICADO</th></tr>";

        let fila = tabla.insertRow();
        let celdaNombre = fila.inserCell();
        let celdaTelefono = fila.inserCell();
        let celdaMail = fila.inserCell();
        let celdaCharla = fila.inserCell();
        let celdaCertificado = fila.inserCell();

        celdaNombre.innerText = registro.nombre;
        celdaTelefono.innerText = registro.telefono;
        celdaMail.innerText = registro.mail;
        celdaCharla.innerText = determinarCharla(registro.charla);
        if(registro.certificado)
        textoCertificado = "Requiere Certificado";
        else
        textoCertificado = "No Requiere Certificado";
        celdaCertificado.innerText = textoCertificado;
    }

    function determinarCharla(charla) {

        for(let i = 0; i< charlas.length; i++) {
            if(charlas[i].id == charla)
            return charlas[i].nombre;
        }
        return "";
    }
}