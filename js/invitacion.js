const invitacionQuindio = 'data:image/png;base64,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';

let pdfInvitacion = {
    pageSize: 'FOLIO',
    pageMargins: [ 83, 100, 83, 80 ],
             // [left, top, right, bottom]
    footer:function(currentPage, pageCount, pageSize){},
    header: function(currentPage, pageCount, pageSize) {
        return [
            {
                image: invitacionQuindio,
                alignment: 'right',
                width: 245,
                margin: [0,24,12,0]
            }
        ]
    },
    content: [ 
        {
            text:[
                    {text:'Armenia,Q. '},
                    {text:'Fecha de creacion estudios previos.',color: 'red'},
                    '\n\nSeñor(a).\n\n'
                ],
            alignment: 'left'
        },
        {
            text:[  {text:'nombre y cédula de contratista',color:'red'},
                    '\n\n',
                    {text:'Asunto: INVITACIÓN PARA PROCESO DE CONTATACIÓN DIRECTA.'},
                    '\n\n\n',
                ],
            alignment: 'left',bold:'true'
        },
        {
            text:[
                {text:'EL DEPARTAMENTO DEL QUINDIO, de conformidad con lo dispuesto en el artículo 2, numeral 4), literal h) de la ley 1150 de 2007, en concordancia con lo establecido en el artículo 2.2.1.2.1.4.9 del Decreto 1082 del 2015, se permite invitarlo a presentar oferta para participar en el proceso de contratación Directa para el Contrato, cuyo objeto es '},
                {text:'objeto del contrato',color:'red'},// objeto del contrato del estudio previo
                '\n\n',
                {text:'SU OFERTA DEBERA SUJETARSE A LOS SIGUIENTES PARAMETROS:'},
                '\n\n',
                ],
            alignment: 'justify'
        },
        {
            table:{
                widths:[150,'*'],
                body:[
                    [{text:'PLAZO DE EJECUCIÓN',bold:'true'},{text:'según el estudio previo',color:'red'}],
                    [{text:'VALOR Y FORMA DE PAGO',bold:'true'},{text:'según el estudio previo',color:'red'}],
                    [{text:'OBLIGACIONES A DESARROLAR',bold:'true'},{text:'según el estudio previo',color:'red'}]
                ]
            }
        },
        {
          text: '\n\nDOCUMENTOS QUE DEBE CONTENER LA OFERTA.\n\n',bold:'true'
        },
        {
            table:{
                widths:[150,'*'],
                body:[
                    [{text:'DOCUMENTOS QUE DEBERÁ ENTREGAR EL OFERENTE.',bold:'true',colSpan: 2,fillColor: '#cccccc'},{}],
                    [{text:'Oferta y/o propuesta técnica y económica..',colSpan:2},{}],
                    [{text:'1)\nDOCUMENTOS PRIVADOS',bold:'true',rowSpan: 5},{text:'Formato Único de Hoja de Vida de la Función Pública SIGEP II debidamente validada por el funcionario designado en cada dependencia y/o Secretaría.'}],
                    [{},{text:['Publicación proactiva de Bienes, Rentas y Conflicto de Intereses ',{text:'(Aplicativo por la integridad pública) ',bold:'true'},'conforme con lo señalado en la Ley 2013 de año 2019 y Decreto Reglamentario 830 del año 2021: Reporte PDF que arroja la plataforma.']}],
                    [{},{text:'Copia de la cédula de ciudadanía legible.'}],
                    [{},{text:'Libreta militar legible (Será solicitada a los hombres menores de 50 años)'}],
                    [{},{text:'Examen médico ocupacional con fecha de expedición no mayor a tres (3) años.'}],
                    [{text:'2)\nEDUCACIÓN Y EXPERIENCIA',bold: 'true',rowSpan: 3},{text:'Documentos o certificados académicos (Título profesional, tecnólogo, técnico, bachiller).'}],
                    [{},{text:'Tarjeta profesional para las profesiones reguladas o profesiones que requieran algún tipo de autorización para ejercer la profesión, tecnólogo o técnico expedida por la entidad competente. (Si aplica).'}],
                    [{},{text:'Documentos por medio de los cuales se pueda validar la experiencia general y/o experiencia especifica con sus correspondientes soportes.'}],
                    [{text:'3)\nCERTIFICADOS Y ANTECEDENTES',bold:'true',rowSpan:12},{text:'Certificado de antecedentes Fiscales expedido por la Contraloría General de la República.'}],
                    [{},{text:'Certificado de antecedentes Disciplinarios expedido por la Procuraduría General de la Nación.'}],
                    [{},{text:'Certificado de antecedentes judiciales expedidos por la Policía Nacional de Colombia.'}],
                    [{},{text:'Certificados de Medidas Correctivas expedidos por la Policía Nacional de Colombia.'}],
                    [{},{text:'Certificados de Inhabilidades por Delitos sexuales cometidos contra menores de 18 años Ley 1918 de 2018.'}],
                    [{},{text:'Certificado de Registro de Deudores Alimentarios Morosos.'}],
                    [{},{text:'Certificado del Boletín de deudores morosos del Estadoexpedido por la Contaduría General de la Nación.'}],
                    [{},{text:'Certificados de antecedentes disciplinarios de la profesión expedido por la autoridad competente (En caso de profesiones que aplique).'}],
                    [{},{text:'Certificado de vigencia de la tarjeta profesional expedido por la autoridad competente (En caso de profesiones que aplique).'}],
                    [{},{text:['Certificado de afiliación al Sistema General de Seguridad Social Seguridad Social por concepto de ',{text:'Salud.',bold:'true'}]}],
                    [{},{text:['Certificado de afiliación al Sistema General de Seguridad Social Seguridad Social por concepto de ',{text:'Pensión.',bold:'true'}]}],
                    [{},{text:'Certificado de Registro Único Tributario (RUT) expedido por la DIAN.'}],
                ]
            }
        },
        {
            text:[
                '\n\n',
                {text:'GARANTÍAS QUE DEBERÁN CONSTITUIRSE',bold:'true'},
                '\n\n',
                {text:'En consideración al tipo de procedimiento de selección, esto es Contratación Directa, teniendo en cuenta lo señalado en el artículo 2.2.1.2.1.4.5 del Decreto 1082 de 2015 y lo estipulado en los Estudios Previos en el presente caso No se requerirá de la constitución de Garantía Única.'},
                '\n\n',
                {text:'VERIFICACIÓN DE IDONEIDAD Y EXPERIENCIA:',bold:'true'},
                '\n\n',
                {text:'Para el presente proceso de contratación directa, de conformidad con el objeto del contrato a desarrollar y de acuerdo con lo indicado en los estudios previos, el oferente deberá acreditar con los documentos señalados las condiciones requeridas para el ejercicio de su contrato.'},
                '\n\n',
                {text:'IDONEIDAD',bold:'true',color:'red'},
                '\n\n',
                {text:'EXPERIENCIA',bold:'true',color:'red'},
                '\n\n',
                {text:'Tales condiciones serán verificadas por la entidad al momento de analizar la oferta y podrán ser solicitadas aclaraciones a los documentos no presentados o la presentación de documentos no incluidos en la oferta. En caso de no cumplir con las condiciones señaladas en la presente invitación la oferta será rechazada. Atentamente,'},
                '\n\n',
                {text:'nombre secretario',color:'red'},
                '\nSecretario',
                {text:'nombre de secretaria',color:'red'}

            ]
        }
    ],
    defaultStyle:{

        fontSize: 11.5,
        lineHeight: 1,
        alignment: 'justify'
    },
    styles:{
        
        titulo:{
            fontSize: 12,
            bold: true,
        },
        comillas:{
            fontSize: 12,
            alignment: 'justify',
            italics: true,
            margin: [30,0,0,0]
        },
        defecto:{
            fontSize: 12,
            alignment: 'justify',
        },
        footer:{
            margin:[83,49,83,10]
        }
    }
    
}

const boton = document.getElementById('boton');
boton.addEventListener('click', function(e) {
    e.preventDefault();
    const pdfDocGenerator = pdfMake.createPdf(pdfInvitacion);   
    pdfDocGenerator.open();
})