console.log('hola mundo');
let formularioContratista = document.getElementById('agregarContratista');

formularioContratista.addEventListener('submit', function (e) {
    e.preventDefault();
    let datosContratista = {
        identificacion: document.getElementById('cedula').value,
        tipo_documento: 'cedula',
        lugar_expedicion: document.getElementById('lugarExpedicion').value,
        nombre: document.getElementById('nombre').value +" "+document.getElementById('segundoNombre').value,
        apellido: document.getElementById('apellido').value+" "+document.getElementById('segundoApellido').value,
        direccion: document.getElementById('direccion').value,
        lugar_residencia: document.getElementById('lugarResidencia').value
    }
    console.log(datosContratista);

    insertContratista(datosContratista);
})