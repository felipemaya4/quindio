
//devolver su valor literal de un numero de tres cifras 000-999

function valorEnLetras(numero) {
    let cadenaNumero = Array.from(numero).reverse();
    let valorEnLetras = [];
    let unidad = cadenaNumero[0];
    let decena = cadenaNumero[1];
    let centena = cadenaNumero[2];
    switch (unidad) {
        case '0':

            break;
        case '1':
            if (decena == '1') {
                break;
            } else
                valorEnLetras.unshift('un');
            break;
        case '2':
            if (decena == '1') {
                break;
            } else
                valorEnLetras.unshift('dos');
            break;
        case '3':
            if (decena == '1') {
                break;
            } else
                valorEnLetras.unshift('tres');
            break;
        case '4':
            if (decena == '1') {
                break;
            } else
                valorEnLetras.unshift('cuatro');
            break;
        case '5':
            if (decena == '1') {
                break;
            } else
                valorEnLetras.unshift('cinco');
            break;
        case '6':
            valorEnLetras.unshift('seis');
            break;
        case '7':
            valorEnLetras.unshift('siete');
            break;
        case '8':
            valorEnLetras.unshift('ocho');
            break;
        case '9':
            valorEnLetras.unshift('nueve');
            break;
        default:
            break;
    }
    switch (decena) {
        case '1':
            switch (unidad) {
                case '0':
                    valorEnLetras.unshift('diez');
                    break;
                case '1':
                    valorEnLetras.unshift('once');
                    break;
                case '2':
                    valorEnLetras.unshift('doce');
                    break;
                case '3':
                    valorEnLetras.unshift('trece');
                    break;
                case '4':
                    valorEnLetras.unshift('catorce');
                    break;
                case '5':
                    valorEnLetras.unshift('quince');
                    break;
                default:
                    valorEnLetras.unshift('dieci')
                    break;
            }
            break;
        case '2':
            unidad == '0' ? valorEnLetras.unshift('veinte') : valorEnLetras.unshift('venti');
            break;
        case '3':
            unidad == '0' ? valorEnLetras.unshift('treinta') : valorEnLetras.unshift('treinta y ');
            break;
        case '4':
            unidad == '0' ? valorEnLetras.unshift('cuarenta') : valorEnLetras.unshift('cuarenta y ');
            break;
        case '5':
            unidad == '0' ? valorEnLetras.unshift('cincuenta') : valorEnLetras.unshift('cincuenta y ');
            break;
        case '6':
            unidad == '0' ? valorEnLetras.unshift('sesenta') : valorEnLetras.unshift('sesenta y ');
            break;
        case '7':
            unidad == '0' ? valorEnLetras.unshift('setenta') : valorEnLetras.unshift('setenta y ');
            break;
        case '8':
            unidad == '0' ? valorEnLetras.unshift('ochenta') : valorEnLetras.unshift('ochenta y ');
            break;
        case '9':
            unidad == '0' ? valorEnLetras.unshift('noventa') : valorEnLetras.unshift('noventa y ');
            break;
        case '0':

            break;
        default:
            break;
    }
    switch (centena) {
        case '1':
            if (decena == '0' && unidad == '0') {
                valorEnLetras.unshift('cien ');
            } else
                valorEnLetras.unshift('ciento ');
            break;
        case '2':
            valorEnLetras.unshift('docientos ');
            break;
        case '3':
            valorEnLetras.unshift('trecientos ');
            break;
        case '4':
            valorEnLetras.unshift('cuatrocientos ');
            break;
        case '5':
            valorEnLetras.unshift('quinientos ');
            break;
        case '6':
            valorEnLetras.unshift('seiscientos ');
            break;
        case '7':
            valorEnLetras.unshift('setecientos ');
            break;
        case '8':
            valorEnLetras.unshift('ochocientos ');
            break;
        case '9':
            valorEnLetras.unshift('novecientos ');
            break;
        case '0':
            break;
        default:
            break;
    }
    const res = valorEnLetras.join('')
    return res
}
//funcion que genera el valor de un  numero de hasta 24 cifras en su valor literal
function generarNumeroEnletras(n) {
    let arregloNumero = n.split(','); // separa el string en un arreglo de las cifras del numero a convertir
    let enLetras = [];
    let separador = [];
    let valorFinal = [];
    let res;
    arregloNumero.forEach(element => {
        enLetras.push(valorEnLetras(element)); // se llama la funcion 
    });
    enLetras.reverse();
    enLetras.forEach((value, index) => {
        // coloca el orden de cada cifra.. mil millones billones trillones cuatrillones
        switch (index) {
            case 0:
                if (value.includes('un')) {
                    // arreglo[0] = value+'o'; // si el ultimo numero es uno se adicioano al o para que diga uno en lugar de 'un'
                }
                break;
            case 1:
                separador.unshift('mil');
                break;
            case 2:
                separador.unshift('millones');
                break;
            case 3:
                separador.unshift('mil');
                break;
            case 4:
                separador.unshift('billones');
                break;
            case 5:
                separador.unshift('mil');
                break;
            case 6:
                separador.unshift('trillones');
                break;
            case 7:
                separador.push('mil');
                break;
            case 8:
                separador.push('cuatrillones');
                break;
            default:
                break;
        }
    }
    );
    enLetras.reverse();
    enLetras.forEach((value, index, arreglo) => { // si el primer valor es uno se cambia a valor singular la expresion
        if (index === 0 && value === 'un') {
            switch (separador[0]) {
                case 'cuatrillones':
                    valorFinal.push(value);
                    valorFinal.push('cuatrillón')
                    break;
                case 'trillones':
                    valorFinal.push(value);
                    valorFinal.push('trillón')
                    break;
                case 'billones':
                    valorFinal.push(value);
                    valorFinal.push('billón')
                    break;
                case 'millones':
                    valorFinal.push(value);
                    valorFinal.push('millón')
                    break;
                case 'mil':
                    valorFinal.push('mil')
                default:
                    break;
            }
        }
        else if (value == '' && arreglo[index - 1] == '') { // si no hay valores en dos cifras contiguas se el omite el valor de 'millones' o 'billones' etc

        }
        else if (value == '' && separador[index] == 'mil') { // si en un orden de mil no tiene valor se omite la insercion de 'mil'

        }
        else {
            valorFinal.push(arreglo[index]);
            valorFinal.push(separador[index]);
        }

    });
    // segun sea el caso adicionar o no la plabra "de" para escribir la expresion "de pesos" o "pesos"
    const [last] = valorFinal.slice(-1)
    switch (last) {
        case 'millones':
            valorFinal.push('de');
            break;
        case 'billones':
            valorFinal.push('de');
            break;
        case 'trillones':
            valorFinal.push('de');
            break;
        case 'cuatrillones':
            valorFinal.push('de');
            break;
        case 'millón':
            valorFinal.push('de');
            break;
        case 'billón':
            valorFinal.push('de');
            break;
        case 'trillón':
            valorFinal.push('de');
            break;
        case 'cuatrillón':
            valorFinal.push('de');
            break;
        default:
            break;
    }
    res = valorFinal.join(' ');
    return res.toUpperCase();
}
