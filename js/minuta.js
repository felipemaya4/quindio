let pdfMinuta={
    pageSize: 'FOLIO',
    pageMargins: [ 83, 145, 83, 80 ],// [left, top, right, bottom]
    footer:function(currentPage, pageCount, pageSize){
    // let footerContent=[]
        if(currentPage == (pageCount-2)){
            return[{
                text:[
                    '_____________________________________\n',
                    {text:'1',sup:true},
                    {text: ' Ley 1150 del 2007 Artículo 2 Numeral 3.'},
                ],margin:[83,0,83,10],fontSize:8, alignment: 'left'
            }]
        }
        else if(currentPage == pageCount){
            return[{
                text:[
                    '_____________________________________\n',
                    {text:'2',sup:true},
                    {text: ' www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77653',color:'blue',link:true},
                    '\n',
                    {text:'3',sup:true},
                    {text: ' colombiacompra.gov.co/sites/cce_public/files/cce_documents/manual_manejo_de_acuerdos_comerciales_24nov2021_1.pdf',color:'blue',link:true},
                ],
                margin:[83,0,83,10],fontSize:8, alignment: 'left'
            }]
        }
    },
    header: function(currentPage, pageCount, pageSize) {
        return [
            //alignment: (currentPage % 2) ? 'left' : 'right' para alternar la ubicacion del numero
            {
                table: {
                        widths: [ 'auto','*','auto'],
                        body: [
                        [
                            {
                                rowSpan: 4, 
                                image: imagenQuindio,
                                width: 72,
                                margin: [18,6,18,6]
                            },
                            {text:'FORMATO',bold: true,fontSize: 12,alignment: 'center',margin:[8,4,8,4]},
                            {text:'Código: F-JUR-91',bold: true, fontSize: 10, alignment:'center',margin:[8,4,8,4]}
                        ],
                        ['',{rowSpan:3,text:'Minuta\nContrato de Prestación \nde Servicios',bold: true, fontSize: 14, alignment: 'center',margin: [0,7,0,5]},
                            {text:'Versión: 01 \n Fecha: 11/01/2024',fontSize: 10, alignment: 'left',margin:[8,3,8,3]}],
                        ['','',{rowSpan:2,text: 'Página '+currentPage+' de '+pageCount, bold: true, fontSize: 12, alignment: 'center',margin: [0,2,0,2]}],
                        ['','','']
                    ]  
                },
                layout: {
                    // Definir el estilo de los bordes
                    hLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? 0.5 : 0.5;
                    },
                    vLineWidth: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 0.5 : 0.5;
                    },
                },
                margin: [83,49,83,10]
            }
        ]
    },
    content:[
        {
            text:'\nCONTRATO DE PRESTACIÓN DE SERVICIOS DE APOYO A LA GESTIÓN',color:'red',style:'titulo',alignment:'center'
        },
        {
            text:'\n\nNro. _______________ de 2024\n\n',color: 'red',style:'titulo',alignment:'center'
        },
        {
            table:{
                widths:[100,'*'],
                body:[
                    [{text:'CONTRATANTE:'},{text:'DEPARTAMENTO DEL QUINDÍO'}],
                    [{text:'CONTRATISTA:'},{text:'NOMBRE DE CONTRATISTA',color:'red'}],
                    [{text:'CC.Nro'},{text:'    DOCUMENTO DE CONTRATISTA',color:'red'}],
                ]
            },
            layout:'noBorders',
            fillColor:'#fcfcfc',
            style:'titulo',
            margin:[0,0,0,0]
        },
        {
            text:[
                {text:'Entre los suscritos a saber: el señor '},
                {text: 'nombre de secretario',color:'red',bold:'true'},
                {text:', mayor de edad, vecino de la ciudad de Armenia, Q., identificado con la cédula de ciudadanía Nro. '},
                {text:'identificación',color:'red'},
                {text:'de Armenia, Q., obrando en nombre y representación del Departamento del Quindío, en calidad de '},
                {text:'secretaria que representa',color:'red'},
                {text:', según Decreto de Nombramiento Nro.'},
                {text:'numero y fecha de decreto',color:'red'},
                {text:', y posesionado mediante Acta Nro.'},
                {text:'numero y fecha de acta de posesion',color:'red'},
                {text:', quien se encuentra debidamente autorizado para celebrar el presente contrato conforme con las facultadas otorgadas por el Sr. Gobernador '},
                {text:'JUAN MIGUEL GALVIS BEDOYA',bold:'true'},
                {text:'A, identificado con cédula de ciudadanía Nro. 89.006.347 de Armenia Q., quien actúa en nombre y representación del Departamento del Quindío conforme con el Acta de Posesión Nro. 001 del 01 de enero de 2024 emitida por la Asamblea Departamental del Quindío y acorde con la autorización y competencia contenida en el Estatuto General de Contratación de la Administración Pública que permite a los Gobernadores celebrar contratos tal y como lo dispone el numeral 3, literal b) del artículo 11 de la Ley 80 de 1993, ello en concordancia con lo señalado en el numeral 9 del artículo 300 de la Carta Política, con en el numeral 31 del artículo 19 de la Ley 2200 de 2022, y el artículo 104 de la Ordenanza 022 de 2014, '},
                {text:'“por medio del cual se actualiza y adopta el estatuto orgánico del presupuesto del nivel central y sus entidades descentralizadas del Departamento del Quindío”,',style:'comillas'},
                {text:'en el que señala:'},
                {text:'“la afectación para las apropiaciones para gastos estará a cargo del Gobernador en el Departamento, del presidente de la asamblea departamental, del contralor en el organismo a su cargo, y del representante legal en las entidades descentralizadas como ordenadores. El Gobernador podrá delegar en los secretarios de despacho y jefes de dependencias en el ámbito de las respectivas competencias, de acuerdo con las normas vigentes y las necesidades del servicio”',style:'comillas'},
                {text:' (Negrilla fuera de texto), así como lo que al respecto ha venido estableciendo el Consejo de Estado, órgano de cierre de la jurisdicción contenciosa administrativa1, y teniendo en cuenta el Decreto de Delegación Nro. 00262 del 11 de enero de 2024, quien en adelante y para efectos del presente acuerdo contractual se denominará'},
                {text:'1',sup:true},
                {text:'y teniendo en cuenta el Decreto de Delegación Nro. 00262 del 11 de enero de 2024, quien en adelante y para efectos del presente acuerdo contractual se denominará'},
                {text:'EL DEPARTAMENTO',bold:true},
                {text:', de una parte y por la otra,'},
                {text:'nombre de contratista',color:'red',bold:true},
                {text:', mayor de edad, vecino de la ciudad de Armenia, Q., identificado con cédula de ciudadanía Nro.'},
                {text:'numero y cuidad de residencia',color:'red'},
                {text:'., persona natural, quien en adelante para efectos de este contrato se llamará'},
                {text:'EL CONTRATISTA',bold:true},
                {text:'A, hemos convenido celebrar el presente Contrato de Prestación de Servicios de Apoyo a la Gestión, conforme a las cláusulas que a continuación se señalan, previas las siguientes'},
                {text:'CONSIDERACIONES 1)',bold:true},
                {text:'Que, conforme al Literal h) del numeral 4º, del artículo 2º de la Ley 1150 de 2007, procede la modalidad de selección de Contratación Directa para la celebración de Contratos de Prestación de Servicios Profesionales y de Apoyo a la Gestión; '},
                {text:'2)',bold:true},
                {text:' Que, conforme al Artículo 2.2.1.2.1.4.9 del Decreto 1082 de 2015, para la prestación de servicios personales, la entidad estatal podrá contratar directamente con la persona natural o jurídica que esté en capacidad de ejecutar el objeto del contrato y que haya demostrado la idoneidad y/o experiencia directamente relacionada con el área de que se trate, sin que sea necesario que se haya obtenido previamente varias ofertas, de lo cual el ordenador del gasto deberá dejar constancia escrita; '},
                {text:'3)',bold:true},
                {text:' Que, el Departamento, requiere de los servicios previamente indicados en el estudio previo que origina el presente contrato, del cual hace parte integral; '},
                {text:'4)',bold:true},
                {text:' Que, en cumplimiento de lo previsto en los Numerales 7º y 12º del artículo 25 de la Ley 80 de 1993, se realizaron los estudios y documentos previos, en los cuales se analizó la conveniencia, necesidad y la oportunidad para celebrar este contrato; '},
                {text:'5)',bold:true},
                {text:' Que, la Directora de Talento Humano del Departamento del Quindío, en cumplimiento de lo dispuesto en el numeral 3º del art. 32 de la Ley 80 de 1.993, expidió certificado en el que consta que en la planta de personal del Departamento no existe personal con el perfil requerido para desarrollar las actividades requeridas y que constituirán la respectivas obligaciones contractuales; '},
                {text:'6)',bold:true},
                {text:'Que, ante la necesidad descrita en el estudio previo y en razón a lo señalado en el artículo 2.2.1.2.1.4.9 del Decreto 1082 de 2015, esta entidad contratante envió invitación a ,'},
                {text:'nombre contratista',color:'red'},
                {text:' mayor de edad, vecino de la cuidad de'},
                {text:'nombre de la cuidad de residencia',color:'red'},
                {text:', identificado con cédula de ciudadanía Nro. '},
                {text:'numero de identificacion y lugar de expedicion',color:'red'},
                {text:'para que presentara la oferta bajo los parámetros señalados en la invitación emitida; '},
                {text:'7)',bold:true},
                {text:' Que, una vez presentada la oferta y verificados los documentos aportados por la oferente, se verificó que EL CONTRATISTA cumple con las condiciones requeridas, así mismo, que cuenta con la idoneidad y experiencia suficientes para desarrollar el objeto del contrato y que su ofrecimiento en términos económicos resulta estar acorde con el presupuesto oficial determinado por la entidad;'},
                {text:'8)',bold:true},
                {text:') Que, en cumplimiento de lo establecido por el artículo 2.2.1.2.1.4.9 del Decreto 1082 de 2015, la delegada por el Contratante, ha dejado constancia escrita en el expediente contractual a través del '},
                {text:'nombre de secretaria',color:'red'},
                {text:', que el oferente, es idóneo para cumplir con el objeto del contrato;'},
                {text:'9)',bold:true},
                {text:' Que, para asumir el valor del contrato requerido, existe el Certificado de Disponibilidad Presupuestal Nro.'},
                {text:'numero y fecha de CDP',color:'red'},
                {text:'por valor de '},
                {text:'valor de contrato en numero y letras',color:'red'},
                {text:'10)',bold:true},
                {text:' Que, de conformidad con lo previsto en los Artículos: 13 y 32 de la Ley 80 del año 1993 (Estatuto General de Contratación de la Administración Pública), se permite a la Administración acudir a las disposiciones del Código Civil Colombiano y Código de Comercio Colombiano, especialmente a lo dispuesto en los artículos: 1602 y 1618 del Código Civil en materia de interpretación de contratos, y en cuanto a que los contratos legalmente celebrados son Ley para las partes, y no pueden ser inválidos si no por consentimiento mutuo o por causas legales. '},
                {text:'11)',bold:true},
                {text:' Que, el Contrato de Prestación de Servicios, se encuentra nominado en el artículo 32 numeral 3º de la Ley 80 de 1993, y por su parte, el artículo 2º numeral 4º literal h) de la Ley 1150 de 2007 establece que este tipo de contratos se celebran a través de la modalidad de selección denominada: Contratación Directa, causal de contratación que ha sido reglamentada en el artículo 2.2.1.2.1.4.9 del Decreto 1082 del año 2015. '},
                {text:'12)',bold:true},
                {text:' Que, el artículo 40 de la Ley 80 del año 1993, establece que '},
                {text:'e “(…) las entidades podrán celebrar contratos y acuerdos que permitan la autonomía de la voluntad y requieran el cumplimiento de los fines estatales (…)”;',style:'comillas'},
                {text:'ello significa que, las partes están en libertad de convenir las cláusulas o estipulaciones del contrato según sus necesidades y conveniencias, por lo que se hace jurídicamente viable la celebración del presente contrato de común acuerdo entre las partes contratantes, para lo cual dicho vínculo contractual se regirá por las siguientes '},
                {text:'CLÁUSULAS: CLÁUSULA PRIMERA. OBJETO:',bold:true},
                {text:'objeto del estudio previo.',color:'red'},
                {text:'CLÁUSULA SEGUNDA. OBLIGACIONES DE LAS PARTES: 2.1) OBLIGACIONES ESPECIFICAS DEL CONTRATISTA:',bold:true},
                {text:'obligaciones especificas del estudio previo',color:'red'},
                {text:' 2.2) OBLIGACIONES GENERALES DEL CONTRATISTA:',bold:true},
            ],
            alignment:'justify'
        },
        {
            text:[
                {text:'1)',bold:true},
                {text:' Usar las diferentes plataformas que ha implementado el Departamento del Quindío para el manejo, envió, radicación y control de la documentación interna y externa que se manejará por parte de Funcionarios y Contratistas del Departamento del Quindío.'},
                {text:'2)',bold:true},
                {text:' Asistir a capacitaciones sobre temas relacionados con el objeto del contrato impartidas por funcionarios de la Administración Central Departamental a las que sean convocados.'},
                {text:'3)',bold:true},
                {text:' Cumplir con el objeto del contrato con plena autonomía profesional y administrativa y bajo su propia responsabilidad. Por lo tanto, no existe ni existirá ningún tipo de subordinación, ni vínculo laboral del CONTRATISTA con el Departamento del Quindío. '},
                {text:'4)',bold:true},
                {text:' Elaborar informes periódicos que contengan la descripción detallada de las actividades realizadas. Este informe, deberá ser entregado al supervisor del contrato dentro de los cinco (5) días calendarios siguientes al cumplimiento de las obligaciones de manera mensual, quien tendrá la obligación de avalar la información ante el Ordenador del Gasto para la autorización del respectivo pago.'},
                {text:'5)',bold:true},
                {text:' Guardar la debida y completa reserva sobre la información y los documentos de que tenga conocimiento o a los que tenga acceso en virtud de la ejecución del contrato.'},
                {text:'6)',bold:true},
                {text:' Obrar con lealtad, diligencia, oportunidad y buena fe en la ejecución del contrato, evitando dilaciones injustificadas en las actividades contratadas.'},
                {text:'7)',bold:true},
                {text:' Responder por sus actuaciones y omisiones derivadas de la celebración del contrato y de la ejecución del mismo de conformidad con lo establecido en la ley 80 de 1993, Ley 1150 de 2007 y sus decretos reglamentarios.'},
                {text:'8)',bold:true},
                {text:' Dar adecuado uso de los bienes puestos a su disposición (material de oficina, computadores, impresoras, instalaciones, libros de consulta, material de trabajo, entre otros) para la ejecución de los servicios del contrato.'},
                {text:'9)',bold:true},
                {text:' Cumplir con sus obligaciones frente al Sistema de Seguridad Social Integral, manteniendo los pagos al día durante la ejecución del contrato de prestación de servicios, en cumplimiento de lo dispuesto en el inciso segundo y parágrafo primero del artículo 41 de la Ley 80 de 1993, modificado por el artículo 23 de la Ley 1150 de 2007.'},
                ],alignment:'justify',color:'#00e180'
        },



    ],
    
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

const botonMinuta = document.getElementById('minuta');
botonMinuta.addEventListener('click', function(e) {
    e.preventDefault();
    const pdfDocGenerator = pdfMake.createPdf(pdfMinuta);   
    pdfDocGenerator.open();
})