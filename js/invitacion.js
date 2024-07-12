let contenidoInvitacion = {
    nombre: 'nombre contratista',
    apellido: 'apellido',
    fechaCreacionEstudio: 'igual al estudio previo',
    identificacionContratista: 'identificacion contratista',
    objetoContrato: 'objeto de contrato',
    plazoEjecucion: 'plazo de ejecucion',
    valorFormadePago: 'valor y forma de pago',
    obligacionesContrato: 'obligaciones de contrato',
    idoneidadContrato: 'idoneidad',
    experienciaContrato: 'experiencia',
    nombreSecretario: 'nombre de secretario encargado',
    nombreDeSecretaria: 'nombre de secretaria'

}
let pdfInvitacion = {
    pageSize: 'FOLIO',
    pageMargins: [83, 100, 83, 80],
    // [left, top, right, bottom]
    footer: function(currentPage, pageCount, pageSize) { },
    header: function(currentPage, pageCount, pageSize) {
        return [
            {
                image: invitacionQuindio,
                alignment: 'right',
                width: 245,
                margin: [0, 24, 12, 0]
            }
        ]
    },
    content: [
        {
            text: [
                { text: 'Armenia,Q. ' },
                { text: contenidoInvitacion.fechaCreacionEstudio, color: 'red' },
                '\n\nSeñor(a).\n\n'
            ],
            alignment: 'left'
        },
        {
            text: [{ text: 'nombre y cédula de contratista', color: 'red' },
                '\n\n',
            { text: 'Asunto: INVITACIÓN PARA PROCESO DE CONTATACIÓN DIRECTA.' },
                '\n\n\n',
            ],
            alignment: 'left', bold: 'true'
        },
        {
            text: [
                { text: 'EL DEPARTAMENTO DEL QUINDIO, de conformidad con lo dispuesto en el artículo 2, numeral 4), literal h) de la ley 1150 de 2007, en concordancia con lo establecido en el artículo 2.2.1.2.1.4.9 del Decreto 1082 del 2015, se permite invitarlo a presentar oferta para participar en el proceso de contratación Directa para el Contrato, cuyo objeto es ' },
                { text: 'objeto del contrato', color: 'red' },// objeto del contrato del estudio previo
                '\n\n',
                { text: 'SU OFERTA DEBERA SUJETARSE A LOS SIGUIENTES PARAMETROS:' },
                '\n\n',
            ],
            alignment: 'justify'
        },
        {
            table: {
                widths: [150, '*'],
                body: [
                    [{ text: 'PLAZO DE EJECUCIÓN', bold: 'true' }, { text: 'según el estudio previo', color: 'red' }],
                    [{ text: 'VALOR Y FORMA DE PAGO', bold: 'true' }, { text: 'según el estudio previo', color: 'red' }],
                    [{ text: 'OBLIGACIONES A DESARROLAR', bold: 'true' }, { text: 'según el estudio previo', color: 'red' }]
                ]
            }
        },
        {
            text: '\n\nDOCUMENTOS QUE DEBE CONTENER LA OFERTA.\n\n', bold: 'true'
        },
        {
            table: {
                widths: [150, '*'],
                body: [
                    [{ text: 'DOCUMENTOS QUE DEBERÁ ENTREGAR EL OFERENTE.', bold: 'true', colSpan: 2, fillColor: '#cccccc' }, {}],
                    [{ text: 'Oferta y/o propuesta técnica y económica..', colSpan: 2 }, {}],
                    [{ text: '1)\nDOCUMENTOS PRIVADOS', bold: 'true', rowSpan: 5 }, { text: 'Formato Único de Hoja de Vida de la Función Pública SIGEP II debidamente validada por el funcionario designado en cada dependencia y/o Secretaría.' }],
                    [{}, { text: ['Publicación proactiva de Bienes, Rentas y Conflicto de Intereses ', { text: '(Aplicativo por la integridad pública) ', bold: 'true' }, 'conforme con lo señalado en la Ley 2013 de año 2019 y Decreto Reglamentario 830 del año 2021: Reporte PDF que arroja la plataforma.'] }],
                    [{}, { text: 'Copia de la cédula de ciudadanía legible.' }],
                    [{}, { text: 'Libreta militar legible (Será solicitada a los hombres menores de 50 años)' }],
                    [{}, { text: 'Examen médico ocupacional con fecha de expedición no mayor a tres (3) años.' }],
                    [{ text: '2)\nEDUCACIÓN Y EXPERIENCIA', bold: 'true', rowSpan: 3 }, { text: 'Documentos o certificados académicos (Título profesional, tecnólogo, técnico, bachiller).' }],
                    [{}, { text: 'Tarjeta profesional para las profesiones reguladas o profesiones que requieran algún tipo de autorización para ejercer la profesión, tecnólogo o técnico expedida por la entidad competente. (Si aplica).' }],
                    [{}, { text: 'Documentos por medio de los cuales se pueda validar la experiencia general y/o experiencia especifica con sus correspondientes soportes.' }],
                    [{ text: '3)\nCERTIFICADOS Y ANTECEDENTES', bold: 'true', rowSpan: 12 }, { text: 'Certificado de antecedentes Fiscales expedido por la Contraloría General de la República.' }],
                    [{}, { text: 'Certificado de antecedentes Disciplinarios expedido por la Procuraduría General de la Nación.' }],
                    [{}, { text: 'Certificado de antecedentes judiciales expedidos por la Policía Nacional de Colombia.' }],
                    [{}, { text: 'Certificados de Medidas Correctivas expedidos por la Policía Nacional de Colombia.' }],
                    [{}, { text: 'Certificados de Inhabilidades por Delitos sexuales cometidos contra menores de 18 años Ley 1918 de 2018.' }],
                    [{}, { text: 'Certificado de Registro de Deudores Alimentarios Morosos.' }],
                    [{}, { text: 'Certificado del Boletín de deudores morosos del Estadoexpedido por la Contaduría General de la Nación.' }],
                    [{}, { text: 'Certificados de antecedentes disciplinarios de la profesión expedido por la autoridad competente (En caso de profesiones que aplique).' }],
                    [{}, { text: 'Certificado de vigencia de la tarjeta profesional expedido por la autoridad competente (En caso de profesiones que aplique).' }],
                    [{}, { text: ['Certificado de afiliación al Sistema General de Seguridad Social Seguridad Social por concepto de ', { text: 'Salud.', bold: 'true' }] }],
                    [{}, { text: ['Certificado de afiliación al Sistema General de Seguridad Social Seguridad Social por concepto de ', { text: 'Pensión.', bold: 'true' }] }],
                    [{}, { text: 'Certificado de Registro Único Tributario (RUT) expedido por la DIAN.' }],
                ]
            }
        },
        {
            text: [
                '\n\n',
                { text: 'GARANTÍAS QUE DEBERÁN CONSTITUIRSE', bold: 'true' },
                '\n\n',
                { text: 'En consideración al tipo de procedimiento de selección, esto es Contratación Directa, teniendo en cuenta lo señalado en el artículo 2.2.1.2.1.4.5 del Decreto 1082 de 2015 y lo estipulado en los Estudios Previos en el presente caso No se requerirá de la constitución de Garantía Única.' },
                '\n\n',
                { text: 'VERIFICACIÓN DE IDONEIDAD Y EXPERIENCIA:', bold: 'true' },
                '\n\n',
                { text: 'Para el presente proceso de contratación directa, de conformidad con el objeto del contrato a desarrollar y de acuerdo con lo indicado en los estudios previos, el oferente deberá acreditar con los documentos señalados las condiciones requeridas para el ejercicio de su contrato.' },
                '\n\n',
                { text: 'IDONEIDAD', bold: 'true', color: 'red' },
                '\n\n',
                { text: 'EXPERIENCIA', bold: 'true', color: 'red' },
                '\n\n',
                { text: 'Tales condiciones serán verificadas por la entidad al momento de analizar la oferta y podrán ser solicitadas aclaraciones a los documentos no presentados o la presentación de documentos no incluidos en la oferta. En caso de no cumplir con las condiciones señaladas en la presente invitación la oferta será rechazada. Atentamente,' },
                '\n\n',
                { text: 'nombre secretario', color: 'red' },
                '\nSecretario',
                { text: 'nombre de secretaria', color: 'red' }

            ]
        }
    ],
    defaultStyle: {

        fontSize: 11.5,
        lineHeight: 1,
        alignment: 'justify'
    },
    styles: {

        titulo: {
            fontSize: 12,
            bold: true,
        },
        comillas: {
            fontSize: 12,
            alignment: 'justify',
            italics: true,
            margin: [30, 0, 0, 0]
        },
        defecto: {
            fontSize: 12,
            alignment: 'justify',
        },
        footer: {
            margin: [83, 49, 83, 10]
        }
    }

}

const botonInvitacion = document.getElementById('invitacion');
botonInvitacion.addEventListener('click', function(e) {
    e.preventDefault();
    const pdfDocGenerator = pdfMake.createPdf(pdfInvitacion);
    pdfDocGenerator.open();
})