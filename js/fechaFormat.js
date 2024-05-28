
//devuelve en letras el mes dado en numeros
function mesNombre(m) {
    switch (m) {
        case '01':
            return 'enero'
            break;
        case '02':
            return 'febrero'
            break;
        case '03':
            return 'marzo'
            break;
        case '04':
            return 'abril'
            break;
        case '05':
            return 'mayo'
            break;
        case '06':
            return 'junio'
            break;
        case '07':
            return 'julio'
            break;
        case '08':
            return 'agosto'
            break;
        case '09':
            return 'septiembre'
            break;
        case '10':
            return 'octubre'
            break;
        case '11':
            return 'noviembre'
            break;
        case '12':
            return 'diciembre'
            break;
        case 0:
            return 'enero'
            break;
        case 1:
            return 'febrero'
            break;
        case 2:
            return 'marzo'
            break;
        case 3:
            return 'abril'
            break;
        case 4:
            return 'mayo'
            break;
        case 5:
            return 'junio'
            break;
        case 6:
            return 'julio'
            break;
        case 7:
            return 'agosto'
            break;
        case 8:
            return 'septiembre'
            break;
        case 9:
            return 'octubre'
            break;
        case 10:
            return 'noviembre'
            break;
        case 11:
            return 'diciembre'
            break;
        default:
            break;
    }
}
// fecha en formato " dia de mes de año"
function fechaFormat(fecha) {

    let year = fecha.slice(0, 4);
    let month = fecha.slice(5, 7);
    let day = fecha.slice(8);
    let fechaFormat;
    let mesLetras = mesNombre(month);
    fechaFormat = day + ' de ' + mesLetras + ' de ' + year;
    return fechaFormat
}