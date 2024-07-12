
 console.log("estudios previos");
let formulario = document.getElementById('formulario');
let agregarObligacion = document.getElementById('agregarObligacion');
let obligacionesContratista = document.getElementById('obligacionesContratista');
let listaObligaciones = document.getElementById('listaObligaciones');
let obligacionesValues = [];
let indice = 0;
let cantidadDeCuotas = document.getElementById('cantidadCuotas');
let valorContrato = document.getElementById('valorContrato');
let valorCuota = document.getElementById('valorCuota');
//funcion para calcular valor de cuota de pago
//recibe dos valores en string, comprueba que no esten vacios o con numero 0 luego los convierte a number y los opera y retorna
function calcularValorCuota(total, cantidad) {
    //limpia las comas del valor mostrado en el campo
    let totalClean = total.replaceAll(',', '');
    let cantidadClean = cantidad.replaceAll(',', '');

    if (cantidad == '' || total == '' || total == '0' || cantidad == '0') {
        return '';
    }
    else {

        let res = parseInt(totalClean, 0) / parseInt(cantidadClean, 0);
        res = Math.trunc(res)
        return String(formatNumber(String(res))); // vuelve a colorcar las comas con la funcion formatNumber
    }

}
//toma los valores de valor contrato y cantidad de cuotas para pasarlo a la funcion calcularValorCuota
cantidadDeCuotas.addEventListener('input', function(e) {
    e.preventDefault()
    valorCuota.value = calcularValorCuota(valorContrato.value, this.value);
})
valorContrato.addEventListener('input', function(e) {
    e.preventDefault();
    valorCuota.value = calcularValorCuota(this.value, cantidadDeCuotas.value)
})


//agregar item a la lista de obligaciones con boton de borrar
agregarObligacion.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    if (obligacionesContratista.value == '') {
        console.log('inserte datos');
    } else {
        // creacion de elementos li y button
        let nuevaObligacion = document.createElement('li');
        let botonBorrar = document.createElement('button');
        // insercion de valores en li y array para manipulacion txt de nueva obligacion
        nuevaObligacion.textContent = obligacionesContratista.value + '.';
        nuevaObligacion.className = 'list-group-item d-grid gap-2 d-md-flex';
        nuevaObligacion.id = 'obligacion' + indice.toString();
        //configuracion de boton de borrado
        botonBorrar.textContent = 'borrar';
        botonBorrar.id = 'borrar';
        botonBorrar.value = indice;
        botonBorrar.className = 'btn btn-outline-secondary btn-sm';
        botonBorrar.onclick = function(e) {
            e.preventDefault();
            let nodo = document.getElementById('listaObligaciones'); // nodo padre
            let item = document.getElementById(nuevaObligacion.id); // nodo hijo 
            nodo.removeChild(item); // eliminacion de nodo hijo del padre
        }
        indice++;
        console.log(nuevaObligacion, indice);

        //insercion de elementos en la lista "ol"
        listaObligaciones.appendChild(nuevaObligacion).appendChild(botonBorrar);
        //se borrar el valor del input para evitar entradas repetidas
        obligacionesContratista.value = '';

    }

})
//obtener datos del formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    if (document.getElementsByTagName('li').length == 0) {
        console.log('agregue al menos una obligación');
        obligacionesContratista.focus();
    }
    else {
        let fechaRealizacion = new Date();
        let mesRealizacion = mesNombre(fechaRealizacion.getMonth());
        let fechaRealizacionLetras = fechaRealizacion.getDate().toString() + ' de ' + mesRealizacion + ' de ' + fechaRealizacion.getFullYear().toString();
        let lista = document.querySelectorAll('li');
        let listaObligaciones = [];
        // obtener los valores de la lista de obligaciones para insertar en el objeto del formulario
        lista.forEach((li) => {
            let text = li.firstChild.textContent;
            listaObligaciones.push(text);
        })

        const contenidoFormulario = {

            numeroPrecontractual: document.getElementById('numeroPrecontractual').value,
            fechaRealizacion: fechaRealizacionLetras,
            dependencia: document.getElementById('dependencia').value,
            tipoContrato: document.getElementById('tipoContrato').value,
            justificacion: document.getElementById('justificacion').value,
            objetoContrato: document.getElementById('objetoContrato').value,
            plazoEjecucion: document.getElementById('plazoEjecucion').value,
            plazoEjecucionLiteral: generarNumeroEnletras(document.getElementById('plazoEjecucion').value),
            valorContrato: document.getElementById('valorContrato').value,
            valorContratoLiteral: generarNumeroEnletras(document.getElementById('valorContrato').value),
            catidadCuotas: document.getElementById('cantidadCuotas').value,
            cantidadCuotasLiteral: generarNumeroEnletras(document.getElementById('cantidadCuotas').value),
            frecuenciaPagos: document.getElementById('frecuenciaPagos').value,
            frecuenciaPagosLiteral: generarNumeroEnletras(document.getElementById('frecuenciaPagos').value),
            valorCuota: document.getElementById('valorCuota').value,
            valorCuotaLiteral: generarNumeroEnletras(document.getElementById('valorCuota').value),
            cdp: document.getElementById('cdp').value,
            fechaCdp: fechaFormat(document.getElementById('fechaCdp').value),
            cargoFuncionario: document.getElementById('cargoFuncionario').value,
            gradoFuncionario: document.getElementById('gradoFuncionario').value,
            codigoFuncionario: document.getElementById('codigoFuncionario').value,
            listaObligaciones: listaObligaciones,
            idoneidad: document.getElementById('idoneidad').value,
            experiencia: document.getElementById('experiencia').value,
            nombreOrdenador: document.getElementById('nombreOrdenador').value,
            nombreProyector: document.getElementById('proyector').value,
            nombreRevisor: document.getElementById('revisor').value,
            vigenciaFiscal: new Date().getFullYear().toString(),
            ubicacion: 'el Departamento del Quidío',
        }
        /////////////// se inserta el estudio previo a al base de datos
        insertEstudioPrevio(contenidoFormulario);
        /////////////////

    }
});