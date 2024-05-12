
let formulario =document.getElementById('formulario');
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
function calcularValorCuota(total,cantidad) {
    //limpia las comas del valor mostrado en el campo
    let totalClean = total.replaceAll(',','');
    let cantidadClean = cantidad.replaceAll(',','');

    if(cantidad == '' || total == ''|| total == '0' || cantidad == '0'){
        return '';
    }
    else{
        
        let res = parseInt(totalClean,0)/parseInt(cantidadClean,0);
        res = Math.trunc(res)
        return  String(formatNumber(String(res))); // vuelve a colorcar las comas con la funcion formatNumber
    }
    
}
//toma los valores de valor contrato y cantidad de cuotas para pasarlo a la funcion calcularValorCuota
cantidadDeCuotas.addEventListener('input', function (e){
    e.preventDefault()
   valorCuota.value = calcularValorCuota(valorContrato.value,this.value);
})
valorContrato.addEventListener('input',function (e) {
    e.preventDefault();
    valorCuota.value = calcularValorCuota(this.value,cantidadDeCuotas.value)
})

console.log(generarNumeroEnletras('101,202,001,000,001'));
// mostrar el valor de cada cuota en el campo

//agregar item a la lista de obligaciones con boton de borrar
agregarObligacion.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e);
    if(obligacionesContratista.value == ''){
        console.log('inserte datos');
    }else{
        // creacion de elementos li y button
        let nuevaObligacion = document.createElement('li');
        let botonBorrar = document.createElement('button');
        // insercion de valores en li y array para manipulacion txt de nueva obligacion
        nuevaObligacion.textContent  = obligacionesContratista.value+'.';
        nuevaObligacion.className ='list-group-item d-grid gap-2 d-md-flex';
        nuevaObligacion.id = 'obligacion'+ indice.toString();
        //configuracion de boton de borrado
        botonBorrar.textContent = 'borrar';
        botonBorrar.id = 'borrar';
        botonBorrar.value = indice;
        botonBorrar.className = 'btn btn-outline-secondary btn-sm';
        botonBorrar.onclick = function(e){
            e.preventDefault();
            let nodo = document.getElementById('listaObligaciones'); // nodo padre
            let item = document.getElementById(nuevaObligacion.id); // nodo hijo 
            nodo.removeChild(item); // eliminacion de nodo hijo del padre
        }
        indice ++;
        console.log(nuevaObligacion,indice);

        //insercion de elementos en la lista "ol"
        listaObligaciones.appendChild(nuevaObligacion).appendChild(botonBorrar);
        //se borrar el valor del input para evitar entradas repetidas
        obligacionesContratista.value='';

    }
   
})
async function descargarEstudio (arguments) {
    let pdfDocumet = {
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
                                    margin: [10,5,10,5]
                                },
                                {text:'FORMATO',bold: true,fontSize: 12,alignment: 'center'},
                                {text:'Código: F-JUR-02',bold: true, fontSize: 10, alignment:'center'}
                            ],
                            ['',{rowSpan:3,text:'Estudios previos \nContrato de Prestación de \nServicios',bold: true, fontSize: 14, alignment: 'center',margin: [0,7,0,5]},
                                {text:'Versión: 05 \n Fecha: 11/01/2024',fontSize: 10, alignment: 'left',margin:[0,3,0,3]}],
                            ['','',{rowSpan:2,text: 'Página '+currentPage+' de '+pageCount, bold: true, fontSize: 12, alignment: 'center',margin: [0,5,0,5]}],
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
        content: [ 
            {
                text:[
                {text: 'ESTUDIOS PREVIOS\n\n', fontSize: 12,bold: true},
                {text: 'Fecha ', fontSize: 12},
                {text: contenidoFormulario.fechaRealizacion, fontSize: 12}, // fecha dada por el sistema automaticamente
                {text: '.\n\n', fontSize: 12},
                {text: 'Planeación Precontractual Nro. ', fontSize: 12},
                {text: contenidoFormulario.numeroPrecontractual, fontSize: 12},// numero dado por el usuario
                {text: '.\n\n', fontSize: 12}
                ],
                alignment: 'center'
            },
            {
            text:[
                'El Departamento del Quindío, en cumplimiento de lo señalado el Estatuto General de Contratación de la Administración Pública y en especial lo preceptuado en el literal b) del numeral 3º del artículo 11 de la Ley 80 de 1993, así como lo indicado en los numerales 6º, 7º y 12º del artículo 25 ibidem, este último numeral modificado por el artículo 87 de la Ley 1474 de 2011 y atendiendo lo señalado en los artículos 2.2.1.1.2.1.1 y 2.2.1.2.1.4.9 del Decreto 1082 de 2015, así como lo referido en el Manual de Contratación de esta entidad territorial del orden Departamental, la secretaria ',
                {text:contenidoFormulario.dependencia}, // select secretarias existentes
                ' del Departamento del Quindío, procede a elaborar los presentes estudios previos para justificar la celebración de un Contrato de Prestación de Servicios ',
                {text:contenidoFormulario.tipoContrato},// select entre esas dos opciones
                ' bajo el siguiente desarrollo:\n\n'
            ],
            style: 'defecto',
        },
        {
                ol:[
                    ' DESCRIPCIÓN DE LA NECESIDAD QUE SE PRETENDE SATISFACER CON LA CONTRATACIÓN\n\n'
                ],
                style: 'titulo',
                //alignment: 'justify',
            },
            {
                text: [ 'De conformidad con lo consagrado en la Constitución Política de Colombia, cuyo artículo 286 menciona: “Son ',
                { text:'entidades territoriales los departamentos',bold:true},
                ', los distritos, los municipios y los territorios indígenas (…)” seguidamente en su artículo 287 se estableció que las Entidades Territoriales gozan de autonomía para la gestión de sus intereses, y dentro de los límites de la Constitución y la Ley. En tal virtud tendrán los siguientes derechos: “2. Ejercer las competencias que les correspondan”.\n\n',
                'Con el fin de garantizar lo anterior, en el marco de lo contemplado en el artículo 2º numeral 3º y artículo 3º de la Ley 80 de 1993, se colige que articulado indicado anteriormente atiende lo relacionado con los deberes constitucionales, los fines de la Contratación Estatal corresponde al cumplimiento de los fines estatales y la continua y eficiente prestación de los servicios públicos, trayéndose a colación los siguientes presupuestos constitucionales:\n\n'
                ],
                style: 'defecto',
            },
            {
                text:[
                    {text:'"Artículo 2: De la definición de entidades, servidores y servicios públicos.',bold: true},' Para los solos efectos de esta ley:\n\n',
                    '(…)\n\n',
                    '3º. Se denominan servicios públicos:\n\n',
                    'Los que están destinados a satisfacer necesidades colectivas en forma general, permanente y continua, bajo la dirección, regulación y control del Estado, así como aquellos mediante los cuales el Estado busca preservar el orden y asegurar el cumplimiento de sus fines.\n\n',
                    '(…)\n\n', 
                    {text:'Artículo 3º. De los fines de la contratación estatal.',bold: true},' Los servidores públicos tendrán en consideración que al celebrar contratos y con la ejecución de los mismos, las entidades buscan el cumplimiento de los fines estatales, la continua y eficiente prestación de los servicios públicos y la efectividad de los derechos e intereses de los administrados que colaboran con ellas en la consecución de dichos fines”.\n\n'
                ],
                style: 'comillas',
            },
            {
                text:[
                    'El Estatuto General de Contratación de la Administración Pública establece en sus artículos 24, 25 y 26 los Principios de: Transparencia en conexidad con el principio de Publicidad, Economía y Responsabilidad, respectivamente, y de manera específica en lo que concierne a la expedición del presente estudio previo, se debe dar plena aplicación a lo allí establecido en el sentido de motivar, justificar y describir de manera clara y precisa la necesidad que se pretende satisfacer con la celebración del contrato que resultará del presente documento precontractual.\n\n',
                ],
                style: 'defecto',

            },
            {
                text:[
                    'El Departamento del Quindío, como entidad Estatal conforme lo indicado en el artículo 2º y 11º de la Ley 80 de 1993, cuenta con capacidad para celebrar contratos y de conformidad con la misión encargada Constitucional y Legalmente a dichos organismos territoriales, requiere la acción no sólo en temas de carácter misional que apunten al cumplimiento de los diferentes metas y líneas estratégicas contenidas en el Plan de Desarrollo Departamental, como también lo registrado en el Banco de Programas y Proyectos de Inversión, sino que de igual forma estará en la obligación de atender las diferentes actividades administrativas y de funcionamiento, esto con el fin de garantizarle a los administrados una correcta atención ciudadana y buena prestación de los servicios prestados por parte de esta entidad territorial.\n\n',
                    {text: contenidoFormulario.justificacion},
                    {text:'.'}, // datos    que ingresa el usuario
                    '\n\nAunado a lo anterior y de conformidad con lo dispuesto en el numeral 3° del artículo 32 de la Ley 80 de 1993, el Director (a)  Administrativo (a) de Talento Humano del Departamento el Quindío, certifica que en la Planta actual de personal de la entidad, no se dispone de personal suficiente que puedan ejecutar el objeto y las obligaciones del contrato que se pretende celebrar, por lo que se considera procedente celebrar en forma directa Contrato de Prestación de Servicios con una persona que acredite la idoneidad y experiencia necesaria para cumplir con las obligaciones contractuales.\n\n',
// OJO CONTRATOS CON OBJETO IGUAL pendiente agregar parrafo de modificacion
                    'Es necesario indicar que, dando cumplimiento a lo señalado en el artículo 74 de la Ley 1474 de 2011 y conforme con lo expresado en el artículo 2.2.1.1.1.4.1 del Decreto de 1082 de 2015 que hablan con respecto a los Planes de Acciones de las entidades Públicas y los planes anuales de adquisiones, es necesario indicar que la presente contratación se encuentra debidamente incluida en el Plan Anual de Adquisiciones del Departamento del Quindío para la vigencia fiscal ',
                    {text:contenidoFormulario.vigenciaFiscal},
                    '.\n\n',
                    'Finalmente, y en consonancia con lo desarrollado en el presente acápite, por tratarse de un Contrato de Prestación de Servicios ',
                    {text:contenidoFormulario.tipoContrato},
                    ', NO se requiere la obtención de varias ofertas, conforme a lo dispuesto por el articulo 2.2.1.2.1.4.9 del Decreto 1082 del año 2015, situación revalidada por el Honorable Consejo de Estado en la Sentencia Nro. 37044 de fecha 07 de marzo del año 2011, por lo tanto, bastará con recibir únicamente la oferta de la persona natural o jurídica a quien la Entidad le haya enviado la Invitación respectiva. No obstante, la selección del futuro contratista debe obedecer a criterios de Idoneidad (formación académica) y de experiencia (laboral o profesional) del oferente para ejecutar el objeto, las obligaciones específicas y generales que se han determinado en el Estudio Previo, mismas que obedecerán a las que se plasmen en el contrato o minuta contractual.',
                    '\n\n',
                ],
                style: 'defecto'
            },
            {
                ol:[
                    {text:'DESCRIPCION DEL OBJETO A CONTRATAR, CON SUS ESPECIFICACIONES Y LA IDENTIFICACION DEL CONTRATO A CELEBRAR:\n\n',counter: 2,style:'titulo'},
                        {   
                            separator:['2.','.'],
                            ol:[

                                {text:[ {text:'TIPO DE CONTRATO A CELEBRAR:',style:'titulo'},' De conformidad con las actividades u obligaciones que ejecutará el futuro contratista, y en razón a que serán realizadas con autonomía e independencia, se trata en este caso de la tipología contractual de ',
                                        {text:'CONTRATO DE PRESTACIÓN DE SERVICIOS ',style:'titulo'},
                                        {text:contenidoFormulario.tipoContrato.toUpperCase(),bold:true},/// insercion de datos del formulario
                                        ' nominado el numeral 3º del artículo 32 de la Ley 80 del año 1993, como también nominado en el artículo 2.2.1.2.1.4.9 del Decreto 1082 del año 2015, el cual determina: ',{text:'"Los servicios profesionales y de apoyo a la gestión corresponden a aquellos de naturaleza intelectual diferentes a los de consultoría que se derivan del cumplimiento de las funciones de la Entidad Estatal, así como los relacionados con actividades operativas, logísticas, o asistenciales".\n\n',
                                        italics:true}
                                ],bold: false},
                                
                                {text:[{text:'OBJETO DEL CONTRATO A CELEBRAR: ',style:'titulo'},
                                    {text:contenidoFormulario.objetoContrato},
                                    '\n\n'
                                ],bold: false},
                                
                                {text:[ {text:'PLAZO DE EJECUCIÓN:',style: 'titulo'},' El plazo de ejecución del presente contrato será de ',
                                {text:contenidoFormulario.plazoEjecucionLiteral},
                                '(',// numero ingresado por el ususario, tambien obtener su valor en letras 
                                {text:contenidoFormulario.plazoEjecucion},// numero ingresado por el ususario, tambien obtener su calor en letras 
                                ') DÍAS CALENDARIO contados a partir de la suscripción del acta de inicio y cumplimiento de requisitos establecidos en el artículo 41 de la Ley 80 de 1993 modificada por el artículo 23 de la Ley 1150 de 2007, y en todo caso el acuerdo de voluntades a suscribir no podrá exceder la vigencia fiscal ',
                                {text:contenidoFormulario.vigenciaFiscal},
                                '.\n\n'
                                ],bold: false},

                                {text:[
                                        {text:'LUGAR DE EJECUCIÓN:',style:'titulo'},
                                        {text:' El lugar de ejecución del presente contrato será en '},
                                        {text:contenidoFormulario.ubicacion},
                                        {text:'.\n\n'}
                                ],bold: false},/// ubicacion de realizacion de contrato
                                {text:[
                                    {text:'VALOR Y FORMA DE PAGO: ',style:'titulo'},
                                    'El valor del presente contrato asciende a la suma de ',
                                    {text:contenidoFormulario.valorContratoLiteral},// valor del contrato en letras
                                    ' PESOS ($',
                                    {text:contenidoFormulario.valorContrato},// valor del contrato en numeros
                                    '), incluido IVA, impuestos o descuentos. ',
                                    {text: 'FORMA DE PAGO:',style: 'titulo'},
                                    ' El Departamento del Quindío cancelará el valor del futuro contrato mediante ',
                                    {text:contenidoFormulario.cantidadCuotasLiteral},
                                    ' (',// cantidad de pagos en letras
                                    {text:contenidoFormulario.catidadCuotas},// cantidad de pagos en numero
                                    ') pagos cada ',
                                    {text:contenidoFormulario.frecuenciaPagosLiteral},
                                    ' (',
                                    {text:contenidoFormulario.frecuenciaPagos}, // forma de pago
                                    ') DÍAS CALENDARIO, cada uno por valor de ',
                                    {text:contenidoFormulario.valorCuotaLiteral},
                                    ' PESOS ($',// valor de cada aporte
                                    {text:contenidoFormulario.valorCuota},// valor de cada aporte
                                    '), incluido IVA, impuestos o descuentos, previa presentación del informe de actividades ejecutadas durante cada mes de prestación de servicios o periodo prestado, en el que debe de constar la acreditación del pago de aportes a seguridad social, pensión y riesgos laborales por el porcentaje señalado en la Ley.',
                                    '\n\n'
                                    ],bold: false},
                                {text:[
                                    {text:'CERTIFICADO DE DISPONIBILIDAD PRESUPUESTAL PARA ASUMIR LAS OBLIGACIONES ECONÓMICAS ANTES REFERIDAS:',style:'titulo'},
                                    ' Para soportar el gasto antes referido, y garantizar el pago de las obligaciones económicas a cargo de esta Entidad derivadas del contrato a suscribirse; se ha solicitado el correspondiente ',
                                    {text:'Certificado de Disponibilidad Presupuestal Nro. ',style: 'titulo'},
                                    {text: contenidoFormulario.cdp},// numero cdp proporcionado por elusuario
                                    ' expedido el día ',
                                    {text:contenidoFormulario.fechaCdp},//fecha que fue proporcionado el cdp
                                    ' por la Secretaria de Hacienda y Finanzas Públicas del Departamento del Quindío.',
                                    '\n\n'
                                    
                                ],bold: false},
                                {text:[
                                    {text:'SUPERVISIÓN DEL CONTRATO:',style:'titulo'},
                                    ' El control vigilancia y seguimiento del Contrato de Prestación de Servicios se realizará a través del ',
                                    {text:contenidoFormulario.cargoFuncionario},
                                    ' de grado ',
                                    {text:contenidoFormulario.gradoFuncionario},
                                    ' con código ',
                                    {text: contenidoFormulario.codigoFuncionario},// cargo y grado select proporcionado por el usuario
                                    ', quien tendrá a cargo todas las facultades, deberes, responsabilidades y obligaciones contenidas en el artículo 84 de la Ley 1474 de 2011.',
                                    '\n\n'
                                ],bold: false},
                                {text:[
                                    {text:'OBLIGACIONES DEL CONTRATO: ',style:'titulo'},
                                    '\n\n'
                                ]},
                                {
                                    
                                }
                            ]
                            
                        },
                        {
                            separator:['2.8.','.'],
                            ol:[
                                {text:[{text:'OBLIGACIONES ESPECÍFICAS DEL CONTRATISTA: ',style:'titulo'},'\n\n']},
                            ]
                        },
                        {
                            separator:['2.8.1.','.'],
                            ol:contenidoFormulario.listaObligaciones,// datos ingresados desde el formulario 
                                           
                        },
                ],style: 'defecto',
                bold: true,
            },
            {
                text:' '
            },
            {
                ol:[
                        {
                            separator:['2.8.','.'],
                            ol:[
                                {text:[
                                    {text:'OBLIGACIONES GENERALES DEL CONTRATISTA:',style:'titulo'},'\n\n'
                                    ],counter:2
                                },
                            ],
                        },
                        {
                            separator:['2.8.2.','.'],
                            ol:[
                                
                                {bold:false,text:'Usar las diferentes plataformas que ha implementado el Departamento del Quindío para el manejo, envió, radicación y control de la documentación interna y externa que se manejará por parte de Funcionarios y Contratistas del Departamento del Quindío.'},
                                {bold:false,text:'Asistir a capacitaciones sobre temas relacionados con el objeto del contrato impartidas por funcionarios de la Administración Central Departamental a las que sean convocados.'},
                                {bold:false,text:'Cumplir con el objeto del contrato con plena autonomía profesional y administrativa y bajo su propia responsabilidad. Por lo tanto, no existe ni existirá ningún tipo de subordinación, ni vínculo laboral del CONTRATISTA con el Departamento del Quindío.'},
                                {bold:false,text:'Elaborar informes periódicos que contengan la descripción detallada de las actividades realizadas. Este informe, deberá ser entregado al supervisor del contrato dentro de los cinco (5) días calendarios siguientes al cumplimiento de las obligaciones de manera mensual, quien tendrá la obligación de avalar la información ante el Ordenador del Gasto para la autorización del respectivo pago.'},
                                {bold:false,text:'Guardar la debida y completa reserva sobre la información y los documentos de que tenga conocimiento o a los que tenga acceso en virtud de la ejecución del contrato.'},
                                {bold:false,text:'Obrar con lealtad, diligencia, oportunidad y buena fe en la ejecución del contrato, evitando dilaciones injustificadas en las actividades contratadas.'},
                                {bold:false,text:'Responder por sus actuaciones y omisiones derivadas de la celebración del contrato y de la ejecución del mismo de conformidad con lo establecido en la ley 80 de 1993, Ley 1150 de 2007 y sus decretos reglamentarios.'},
                                {bold:false,text:'Dar adecuado uso de los bienes puestos a su disposición (material de oficina, computadores, impresoras, instalaciones, libros de consulta, material de trabajo, entre otros) para la ejecución de los servicios del contrato.'},
                                {text:[{bold:false,text:'Cumplir con sus obligaciones frente al Sistema de Seguridad Social Integral, manteniendo los pagos al día durante la ejecución del contrato de prestación de servicios, en cumplimiento de lo dispuesto en el inciso segundo y parágrafo primero del artículo 41 de la Ley 80 de 1993, modificado por el artículo 23 de la Ley 1150 de 2007.'},'\n\n']}
                            ]
                        },
                        {
                            separator:['2.8.','.'],
                            ol:[
                                {text:[
                                    {text:'OBLIGACIONES DEL CONTRATANTE:',style:'titulo'},'\n\n'
                                    ],counter:3
                                },
                            ],
                        
                        },
                        {
                            separator:['2.8.3.','.'],
                            ol:[
                                {text:'Poner a disposición del CONTRATISTA la información, los expedientes, bienes y elementos que se requieran para el desarrollo y ejecución del objeto y actividades u obligaciones específicas a cargo del contratista, considerando que el contratista en aplicación de su autonomía para ejecutar el contrato utilizará sus propias herramientas y recursos para la ejecución del mismo.',bold: false},
                                {text:'Tramitar diligentemente las apropiaciones presupuestales que requiera para solventar las prestaciones patrimoniales que surjan a su cargo como consecuencia de la suscripción del contrato.',bold: false},
                                {text:'Exigir la ejecución correcta, idónea y oportuna del objeto y las obligaciones específicas y generales a cargo del contratista, así como realizar las recomendaciones que estime pertinentes, por intermedio del funcionario designado para ejercer la Supervisión, quien tendrá las responsabilidades, facultades y deberá cumplir a cabalidad con las obligaciones contenidas en los Artículos 83 y 84 de la Ley 1474 del año 2011.',bold: false},
                                {text:'Recibir a satisfacción la prestación del servicio por parte del CONTRATISTA, cuando este cumpla con las condiciones establecidas en el contrato.',bold: false},
                                {text:'Pagar los honorarios al CONTRATISTA en la forma pactada y con sujeción a las disponibilidades presupuestales previstas para el efecto.',bold: false},
                                {text:'Exigir y verificar por intermedio del funcionario designado para ejercer la vigilancia y control de la ejecución del contrato, el cumplimiento de las obligaciones del contratista frente al pago de los aportes al sistema de seguridad social en salud, pensión y riesgos laborales; así como los propios del SENA, ICBF y Cajas de Compensación Familiar, cuando corresponda.\n\n',bold: false},

                            ],
                        }                        
                ],
                style: 'defecto',
                bold: true,
            },
            {
                ol:[
                    {text:'FUNDAMENTOS JURIDICOS QUE SOPORTAN LA MODALIDAD DE SELECCIÓN\n\n',counter:3,style:'titulo'}
                ],style:'defecto',bold:true
            },
            {   
                function(){return flag = true},
                text:[
                    'La escogencia del contratista se efectuará a través de la modalidad de selección denominada: ',
                    {text:'“Contratación Directa” consagrada en el artículo 2º numeral 4º de la Ley 1150 de 2007 invocando como causal para su celebración la descrita en el Literal H: “prestación de servicios profesionales y de apoyo a la gestión”',italics:true},
                    '; reglamentada por el Decreto 1082 del año 2015, en su artículo 2.2.1.2.1.4.9, el cual determina:',
                    {text:'“…Las entidades estatales pueden contratar bajo la modalidad de contratación directa la prestación de servicios profesionales y de apoyo a la gestión con la persona natural o jurídica que esté en capacidad de ejecutar el objeto del contrato, siempre y cuando la entidad estatal verifique la idoneidad o experiencia requerida y relacionada con el área de que se trate. En este caso, no es necesario que la entidad estatal haya obtenido previamente varias ofertas, de lo cual el ordenador del gasto debe dejar constancia escrita…” Los servicios profesionales y de apoyo a la gestión corresponden a aquellos de naturaleza intelectual diferentes a los de consultoría',italics:true},
                    {text:'1',sup:true,italics:true},
                    {text:', que se derivan del cumplimiento de las funciones de la entidad estatal, así como los relacionados con actividades operativas, logísticas, o asistenciales.',italics:true},
                    '\n\n',
                ],style:'defecto',
                
            },
            {
                ol:[
                    {text:'ANÁLISIS QUE SOPORTA EL VALOR ESTIMADO DEL FUTURO CONTRATO.\n\n',counter:4,style:'titulo'}
                ],style:'defecto',bold:true
            },
            {
                text:[
                    'El valor del contrato a celebrar se fija de conformidad con las distintas variables mencionadas en el Estudio del Sector, esto conforme con los requisitos de idoneidad y experiencia solicitados en el presente Estudio Previo. Así las cosas, se ha determinado que el valor total de los honorarios a cancelar al futuro contratista ascenderá a la suma de: ',
                    {text:contenidoFormulario.valorContratoLiteral},
                    ' PESOS ($',
                    {text:contenidoFormulario.valorContrato},
                    '), incluido IVA, impuestos o descuentos.\n\n'
                ],style:'defecto'
            },
            {
                ol:[
                    {text:'CRITERIOS Y/O FACTORES PARA SELECCIONAR EL FUTURO CONTRATISTA\n\n',counter:5,style:'titulo'}
                ],style:'defecto',bold:true
            },
            {
                text:[
                    'Por tratarse de Contratos de Prestación de Servicios ',
                    {text:contenidoFormulario.tipoContrato},
                    ', no es necesario obtener varias ofertas y la selección se realizará teniendo en cuenta la experiencia y/o idoneidad del proponente para ejecutar el objeto contractual. Por lo tanto, en este caso, de acuerdo con el objeto del futuro contrato y las obligaciones específicas a cumplir, la Gobernación del Quindío determina que la persona natural oferente a contratar deberá acreditar los siguientes requisitos o perfil para proceder a la celebración del contrato:\n\n'
                     ],style:'defecto'
            },
            {   
                ol:[
                    {   separator:['5.','.'],
                        ol:[
                        {text:[
                                {text:'IDONEIDAD:',style:'titulo'},{text:' El futuro contratista deberá de acreditar ',bold:false},
                                {text:contenidoFormulario.idoneidad,bold:false},
                                '.\n\n'// datos ingresados por el usuario
                            ]},
                            {text:[
                                {text:'EXPERIENCIA:',style:'titulo'},{text:' El futuro contratista deberá de acreditar experiencia ',bold:false},
                                {text:contenidoFormulario.experiencia,bold:false},
                                '.\n\n'// datos ingresados por el usuario
                            ]}
                        ]
                    }
                ],style:'defecto',bold:true
            },
            {
                ol:[
                    {text:'TIPIFICACIÓN, ESTIMACIÓN, ASIGNACIÓN Y CUANTIFICACIÓN DE LOS RIESGOS PREVISIBLES QUE PUEDAN AFECTAR EL EQUILIBRIO ECONÓMICO DURANTE LA EJECUCIÓN DEL CONTRATO \n\n',
                    style:'titulo',counter:6
                    }
                ],style:'defecto',bold:true
            },
            {
                text:[
                    'En razón al tipo de contrato a celebrar, a la forma en que se cumplirán las obligaciones, a la forma en que se cancelarán los honorarios a favor del contratista, esto es, previo al cumplimiento de las obligaciones contractuales y presentación de informes aprobados por la supervisión, no se vislumbra riesgo que amerite ser tipificado, cuantificado y asignado.\n\n'
                ],style:'defecto'
            },
            {
                text:[]
            },
            {
                ol:[
                    {text:'ANÁLISIS QUE SUSTENTA LA EXIGENCIA DE GARANTÍAS DESTINADAS A AMPARAR LOS PERJUICIOS DE NATURALEZA CONTRACTUAL O EXTRACONTRACTUAL, DERIVADOS DEL INCUMPLIMIENTO DEL OFRECIMIENTO O DEL CONTRATO SEGÚN EL CASO. \n\n',style:'titulo',counter:7}
                ],style:'defecto',bold:true
            },
            {
                text:[
                    'De conformidad con lo señalado en el artículo 2.2.1.2.1.4.5 del Decreto 1082 de 2015, establece que para la modalidad de contratación directa no resulta se necesario la exigencia de la garantía única, sin embargo, para el caso en concreto, no resulta de igual forma solicitar tal garantía, ello conforme al tipo de servicio que se pretende prestar como también al valor y forma de pagar el contratista los respectivos honorarios en contraprestación al servicio prestado. Así las cosas, no se considera pertinente ni necesario que el contratista constituya garantía única.\n\n'
                ],style:'defecto'
            },
            {
                ol:[
                    {text:'INDICACIÓN SOBRE SI EL CONTRATO SE ENCUENTRA COBIJADO POR UN ACUERDO INTERNACIONAL O UN TRATADO DE LIBRE COMERCIO\n\n',counter:8,style:'titulo'}
                ],style:'defecto',bold:true
            },
            {
                text:[
                    {text:'La Agencia Nacional de Contratación Pública: '},
                    {text:'Colombia Compra Eficiente, ',italics:true},
                    {text:'ha expedido: '},
                    {text:'El Manual para el manejo de los Acuerdos Comerciales en Procesos de Contratación. ',italics:true},
                    {text:'En dicho Manual, se hacen varias claridades a la forma como se deben aplicar los Acuerdos Comerciales, y recomienda que en cada proceso contractual la Entidad verifique si le aplica o no un Acuerdo Comercial, ello, conforme a lo dispuesto en el artículo 2.2.1.1.2.1.1. del Decreto 1082 del año 2015. Ahora bien, sobre la aplicación de los acuerdos comerciales a la modalidad de selección empleada para adelantar el presente procesos de selección, los propios tratados la han excluido de la aplicación de Acuerdos Comerciales, por lo tanto, al presente contrato no le es aplicable Acuerdo Comercial alguno. \n\n'},
                    
                ],style:'defecto'
            },
            {
                text:[
                    {text:'\n\nCordialmente,\n\n\n\n',alignment: 'left'},
                    {text:contenidoFormulario.nombreOrdenador,bold:true,alignment: 'center'},
                    {text:'.\nSecretario(a) ',alignment: 'center'},
                    {text:contenidoFormulario.dependencia,alignment: 'center'},
                    {text:'\nDepartamento del Quindío.\n\n\n\n',alignment: 'center'},
                ],headlineLevel: 1,pageBreak: 'before'
            },
            {
                text:[
                        'Proyectó: ',
                        {text: contenidoFormulario.nombreProyector},
                        '.\n',
                        'Revisó: ',
                        {text: contenidoFormulario.nombreRevisor},
                        '.\n\n\n\n'
                        ],fontSize:10,alignment:'left',headlineLevel: 1
            },
            {
                table:{
                    widths:['*','*','*'],headlineLevel: 1,
                    body:[
                        [{text:'ELABORACIÓN',bold:true,fontSize:9},{text:'REVISIÓN',bold:true,fontSize:9},{text:'APROBACIÓN',bold:true,fontSize:9}],
                        [
                            {text:[
                                {text:'Elaborado por:',alignment:'left'},
                                '\n\n\n',
                                {text:'Andrés Felipe Duarte Rojas',alignment:'center'},
                                ],fontSize: 9
                            },
                            {text:[
                                {text:'Revisado por:',alignment:'left'},
                                '\n\n\n',
                                {text:'Leidy Cecilia Valencia Camargo',alignment:'center'},
                                ],fontSize: 9
                            },
                            {
                                text:[
                                    {text:'Elaborado por:',alignment:'left'},
                                    '\n\n\n',
                                    {text:'Juan Carlos Alfaro Garcia',alignment:'center'},
                                ],fontSize: 9
                            }
                        ],
                        [
                        {text:'Cargo: Jefe de Estudios Previos',fontSize:9},
                        {text:'Cargo: Directora de Contratación',fontSize:9},
                        {text:'Cargo: Secretaria de Despacho',fontSize:9}
                        ]
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
                }
            }

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
}
//obtener datos del formulario
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if(document.getElementsByTagName('li').length == 0){
        console.log('agregue al menos una obligación');
        obligacionesContratista.focus();
    }
    else
    {
    let fechaRealizacion = new Date();
    let mesRealizacion = mesNombre(fechaRealizacion.getMonth());
    let fechaRealizacionLetras = fechaRealizacion.getDate().toString()+' de '+ mesRealizacion  +' de '+fechaRealizacion.getFullYear().toString();
    let lista = document.querySelectorAll('li');
    let listaObligaciones = [];

    // obtener los valores de la lista de obligaciones para insertar en el objeto del formulario
    lista.forEach((li)=> {
        let text = li.firstChild.textContent; 
        listaObligaciones.push({text:[{text:text,bold:false},{text:'\n'}]});
    })

    const contenidoFormulario ={

        numeroPrecontractual : document.getElementById('numeroPrecontractual').value,
        fechaRealizacion : fechaRealizacionLetras,
        dependencia :document.getElementById('dependencia').value,
        tipoContrato : document.getElementById('tipoContrato').value,
        justificacion : document.getElementById('justificacion').value,
        objetoContrato : document.getElementById('objetoContrato').value,
        plazoEjecucion : document.getElementById('plazoEjecucion').value,
        plazoEjecucionLiteral: generarNumeroEnletras(document.getElementById('plazoEjecucion').value),
        valorContrato : document.getElementById('valorContrato').value,
        valorContratoLiteral:generarNumeroEnletras(document.getElementById('valorContrato').value),
        catidadCuotas : document.getElementById('cantidadCuotas').value,
        cantidadCuotasLiteral:generarNumeroEnletras(document.getElementById('cantidadCuotas').value),
        frecuenciaPagos : document.getElementById('frecuenciaPagos').value,
        frecuenciaPagosLiteral: generarNumeroEnletras(document.getElementById('frecuenciaPagos').value),
        valorCuota: document.getElementById('valorCuota').value,
        valorCuotaLiteral: generarNumeroEnletras(document.getElementById('valorCuota').value),
        cdp : document.getElementById('cdp').value,
        fechaCdp : fechaFormat(document.getElementById('fechaCdp').value),
        cargoFuncionario : document.getElementById('cargoFuncionario').value,
        gradoFuncionario : document.getElementById('gradoFuncionario').value,
        codigoFuncionario: document.getElementById('codigoFuncionario').value,
        listaObligaciones : listaObligaciones,
        idoneidad : document.getElementById('idoneidad').value,
        experiencia : document.getElementById('experiencia').value,
        nombreOrdenador : document.getElementById('nombreOrdenador').value,
        nombreProyector: document.getElementById('proyector').value,
        nombreRevisor: document.getElementById('revisor').value ,
        vigenciaFiscal : new Date().getFullYear().toString(),
        ubicacion : 'el Departamento del Quidío',
    }
    console.log('contenidoFormulario :>> ', contenidoFormulario);
    insertEstudioPrevio(contenidoFormulario);
    /////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    const pdfDocGenerator = pdfMake.createPdf(pdfDocumet);   
    pdfDocGenerator.open();

}    //pdfDocGenerator.download('estudios previos.pdf');
});
