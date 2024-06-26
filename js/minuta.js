let pdfMinuta = {
    pageSize: 'FOLIO',
    pageMargins: [83, 145, 83, 80],// [left, top, right, bottom]
    footer: function(currentPage, pageCount, pageSize) {
        // let footerContent=[]
        if (currentPage == 1 && false) {
            return [{
                text: [

                    { text: '1', sup: true },
                ], fontSize: 8, alignment: 'justify', margin: [83, 0, 83, 10]
            },
            ]
        } else {

        }
    },
    header: function(currentPage, pageCount, pageSize) {
        return [
            //alignment: (currentPage % 2) ? 'left' : 'right' para alternar la ubicacion del numero
            {
                table: {
                    widths: ['auto', '*', 'auto'],
                    body: [
                        [
                            {
                                rowSpan: 4,
                                image: imagenQuindio,
                                width: 72,
                                margin: [18, 6, 18, 6]
                            },
                            { text: 'FORMATO', bold: true, fontSize: 12, alignment: 'center', margin: [8, 4, 8, 4] },
                            { text: 'Código: F-JUR-91', bold: true, fontSize: 10, alignment: 'center', margin: [8, 4, 8, 4] }
                        ],
                        ['', { rowSpan: 3, text: 'Minuta\nContrato de Prestación \nde Servicios', bold: true, fontSize: 14, alignment: 'center', margin: [0, 7, 0, 5] },
                            { text: 'Versión: 01 \n Fecha: 11/01/2024', fontSize: 10, alignment: 'left', margin: [8, 3, 8, 3] }],
                        ['', '', { rowSpan: 2, text: 'Página ' + currentPage + ' de ' + pageCount, bold: true, fontSize: 12, alignment: 'center', margin: [0, 2, 0, 2] }],
                        ['', '', '']
                    ]
                },
                layout: {
                    // Definir el estilo de los bordes
                    hLineWidth: function(i, node) {
                        return (i === 0 || i === node.table.body.length) ? 0.5 : 0.5;
                    },
                    vLineWidth: function(i, node) {
                        return (i === 0 || i === node.table.widths.length) ? 0.5 : 0.5;
                    },
                },
                margin: [83, 49, 83, 10]
            }
        ]
    },
    content: [
        {
            text: '\nCONTRATO DE PRESTACIÓN DE SERVICIOS DE APOYO A LA GESTIÓN', color: 'red', style: 'titulo', alignment: 'center'
        },
        {
            text: '\n\nNro. _______________ de 2024\n\n', color: 'red', style: 'titulo', alignment: 'center'
        },
        {
            table: {
                widths: [100, '*'],
                body: [
                    [{ text: 'CONTRATANTE:' }, { text: 'DEPARTAMENTO DEL QUINDÍO' }],
                    [{ text: 'CONTRATISTA:' }, { text: 'NOMBRE DE CONTRATISTA', color: 'red' }],
                    [{ text: 'CC.Nro' }, { text: '    DOCUMENTO DE CONTRATISTA', color: 'red' }],
                ]
            },
            layout: 'noBorders',
            fillColor: '#fcfcfc',
            style: 'titulo',
            margin: [0, 0, 0, 0]
        },
        {
            text: [
                { text: 'Entre los suscritos a saber: el señor ' },
                { text: 'nombre de secretario', color: 'red', bold: 'true' },
                { text: ', mayor de edad, vecino de la ciudad de Armenia, Q., identificado con la cédula de ciudadanía Nro. ' },
                { text: 'identificación', color: 'red' },
                { text: 'de Armenia, Q., obrando en nombre y representación del Departamento del Quindío, en calidad de ' },
                { text: 'secretaria que representa', color: 'red' },
                { text: ', según Decreto de Nombramiento Nro.' },
                { text: 'numero y fecha de decreto', color: 'red' },
                { text: ', y posesionado mediante Acta Nro.' },
                { text: 'numero y fecha de acta de posesion', color: 'red' },
                { text: ', quien se encuentra debidamente autorizado para celebrar el presente contrato conforme con las facultadas otorgadas por el Sr. Gobernador ' },
                { text: 'JUAN MIGUEL GALVIS BEDOYA', bold: 'true' },
                { text: ', identificado con cédula de ciudadanía Nro. 89.006.347 de Armenia Q., quien actúa en nombre y representación del Departamento del Quindío conforme con el Acta de Posesión Nro. 001 del 01 de enero de 2024 emitida por la Asamblea Departamental del Quindío y acorde con la autorización y competencia contenida en el Estatuto General de Contratación de la Administración Pública que permite a los Gobernadores celebrar contratos tal y como lo dispone el numeral 3, literal b) del artículo 11 de la Ley 80 de 1993, ello en concordancia con lo señalado en el numeral 9 del artículo 300 de la Carta Política, con en el numeral 31 del artículo 19 de la Ley 2200 de 2022, y el artículo 104 de la Ordenanza 022 de 2014, ' },
                { text: '“por medio del cual se actualiza y adopta el estatuto orgánico del presupuesto del nivel central y sus entidades descentralizadas del Departamento del Quindío”,', style: 'comillas' },
                { text: 'en el que señala:' },
                { text: '“la afectación para las apropiaciones para gastos estará a cargo del Gobernador en el Departamento, del presidente de la asamblea departamental, del contralor en el organismo a su cargo, y del representante legal en las entidades descentralizadas como ordenadores. El Gobernador podrá delegar en los secretarios de despacho y jefes de dependencias en el ámbito de las respectivas competencias, de acuerdo con las normas vigentes y las necesidades del servicio”', style: 'comillas' },
                { text: ' (Negrilla fuera de texto), así como lo que al respecto ha venido estableciendo el Consejo de Estado, órgano de cierre de la jurisdicción contenciosa administrativa' },
                { text: '1', sup: true },
                { text: ', y teniendo en cuenta el Decreto de Delegación Nro. 00262 del 11 de enero de 2024, quien en adelante y para efectos del presente acuerdo contractual se' }

            ], alignment: 'justify'
        },
        {
            text: [{ text: '_____________________________________\n' },
            { text: '1', sup: true },
            { text: 'Consejo de Estado,Sala de lo Contencioso Administrativo. Sección Tercera. Subsección C. Radicado 55.878 del 8 de agosto de  2023, M.P Guillermo Sánchez Luque. “ 7. El Consejo de Estado ha señalado que la autorización general para contratar,  en  el  caso  de  los  departamentos,  estácontenida  en  la  Ley  80  de  1993  (art.  11),  en  el  Estatuto  Orgánico  del Presupuesto (art. 110) y en la aprobación anual que hacen las asambleas departamentales del presupuesto general de la entidad territorial (art. 300.5). La autorización a que alude el artículo 300-9 de la Constitución solamente puede tener carácter excepcional y para los casos en que la leylo exija expresamente. Consejo de Estado. Sala de lo Contencioso Administrativo. Sección Tercera. Subsección B. Radicado 67250. Fallo del 16 de agosto del 2022. M.P. Alberto Montaña Plata. “19. A fin de determinar el alcance del artículo 300, numeral 9, superior, corresponde, necesariamente, realizar una interpretación armónica de varias disposiciones de nuestro ordenamiento jurídico relativas a la autorización de gobernadores para suscribir contratos. En primer lugar, la ya referida autorización general contenida en el Estatuto General de Contratación Pública permite a los gobernadores dirigir licitaciones y celebrar contratos. Además, el artículo 110 del Estatuto Orgánico del Presupuesto dispone que el jefe de cada órgano tiene la capacidad de contratar y comprometer a nombre de la persona jurídica de la cual hace parte, y ordenar el gasto en desarrollo de las apropiaciones incorporadas en la respectiva sección;lo cual es aplicable a las entidades territoriales y, por tanto, a los gobernadores. Por último, el artículo 25, numeral 11, de la Ley 80 de 1993 señalaexpresamente que “las corporaciones de elección popular y los organismos de control y vigilancia no intervendrán  en  los procesos de contratación.', fontSize: 8, alignment: 'justify' }
            ]
        },
        {
            text: [
                { text: 'denominará ' },
                { text: 'EL DEPARTAMENTO', bold: true },
                { text: ', de una parte y por la otra,' },
                { text: 'nombre de contratista', color: 'red', bold: true },
                { text: ', mayor de edad, vecino de la ciudad de Armenia, Q., identificado con cédula de ciudadanía Nro.' },
                { text: 'numero y cuidad de residencia', color: 'red' },
                { text: '., persona natural, quien en adelante para efectos de este contrato se llamará' },
                { text: 'EL CONTRATISTA', bold: true },
                { text: 'A, hemos convenido celebrar el presente Contrato de Prestación de Servicios de Apoyo a la Gestión, conforme a las cláusulas que a continuación se señalan, previas las siguientes' },
                { text: 'CONSIDERACIONES 1)', bold: true },
                { text: 'Que, conforme al Literal h) del numeral 4º, del artículo 2º de la Ley 1150 de 2007, procede la modalidad de selección de Contratación Directa para la celebración de Contratos de Prestación de Servicios Profesionales y de Apoyo a la Gestión; ' },
                { text: '2)', bold: true },
                { text: ' Que, conforme al Artículo 2.2.1.2.1.4.9 del Decreto 1082 de 2015, para la prestación de servicios personales, la entidad estatal podrá contratar directamente con la persona natural o jurídica que esté en capacidad de ejecutar el objeto del contrato y que haya demostrado la idoneidad y/o experiencia directamente relacionada con el área de que se trate, sin que sea necesario que se haya obtenido previamente varias ofertas, de lo cual el ordenador del gasto deberá dejar constancia escrita; ' },
                { text: '3)', bold: true },
                { text: ' Que, el Departamento, requiere de los servicios previamente indicados en el estudio previo que origina el presente contrato, del cual hace parte integral; ' },
                { text: '4)', bold: true },
                { text: ' Que, en cumplimiento de lo previsto en los Numerales 7º y 12º del artículo 25 de la Ley 80 de 1993, se realizaron los estudios y documentos previos, en los cuales se analizó la conveniencia, necesidad y la oportunidad para celebrar este contrato; ' },
                { text: '5)', bold: true },
                { text: ' Que, la Directora de Talento Humano del Departamento del Quindío, en cumplimiento de lo dispuesto en el numeral 3º del art. 32 de la Ley 80 de 1.993, expidió certificado en el que consta que en la planta de personal del Departamento no existe personal con el perfil requerido para desarrollar las actividades requeridas y que constituirán la respectivas obligaciones contractuales; ' },
                { text: '6)', bold: true },
                { text: 'Que, ante la necesidad descrita en el estudio previo y en razón a lo señalado en el artículo 2.2.1.2.1.4.9 del Decreto 1082 de 2015, esta entidad contratante envió invitación a ,' },
                { text: 'nombre contratista', color: 'red' },
                { text: ' mayor de edad, vecino de la cuidad de' },
                { text: 'nombre de la cuidad de residencia', color: 'red' },
                { text: ', identificado con cédula de ciudadanía Nro. ' },
                { text: 'numero de identificacion y lugar de expedicion', color: 'red' },
                { text: 'para que presentara la oferta bajo los parámetros señalados en la invitación emitida; ' },
                { text: '7)', bold: true },
                { text: ' Que, una vez presentada la oferta y verificados los documentos aportados por la oferente, se verificó que EL CONTRATISTA cumple con las condiciones requeridas, así mismo, que cuenta con la idoneidad y experiencia suficientes para desarrollar el objeto del contrato y que su ofrecimiento en términos económicos resulta estar acorde con el presupuesto oficial determinado por la entidad;' },
                { text: ' 8)', bold: true },
                { text: ' Que, en cumplimiento de lo establecido por el artículo 2.2.1.2.1.4.9 del Decreto 1082 de 2015, la delegada por el Contratante, ha dejado constancia escrita en el expediente contractual a través del ' },
                { text: 'nombre de secretaria', color: 'red' },
                { text: ', que el oferente, es idóneo para cumplir con el objeto del contrato;' },
                { text: '9)', bold: true },
                { text: ' Que, para asumir el valor del contrato requerido, existe el Certificado de Disponibilidad Presupuestal Nro.' },
                { text: 'numero y fecha de CDP', color: 'red' },
                { text: 'por valor de ' },
                { text: 'valor de contrato en numero y letras', color: 'red' },
                { text: '10)', bold: true },
                { text: ' Que, de conformidad con lo previsto en los Artículos: 13 y 32 de la Ley 80 del año 1993 (Estatuto General de Contratación de la Administración Pública), se permite a la Administración acudir a las disposiciones del Código Civil Colombiano y Código de Comercio Colombiano, especialmente a lo dispuesto en los artículos: 1602 y 1618 del Código Civil en materia de interpretación de contratos, y en cuanto a que los contratos legalmente celebrados son Ley para las partes, y no pueden ser inválidos si no por consentimiento mutuo o por causas legales. ' },
                { text: '11)', bold: true },
                { text: ' Que, el Contrato de Prestación de Servicios, se encuentra nominado en el artículo 32 numeral 3º de la Ley 80 de 1993, y por su parte, el artículo 2º numeral 4º literal h) de la Ley 1150 de 2007 establece que este tipo de contratos se celebran a través de la modalidad de selección denominada: Contratación Directa, causal de contratación que ha sido reglamentada en el artículo 2.2.1.2.1.4.9 del Decreto 1082 del año 2015. ' },
                { text: '12)', bold: true },
                { text: ' Que, el artículo 40 de la Ley 80 del año 1993, establece que ' },
                { text: 'e “(…) las entidades podrán celebrar contratos y acuerdos que permitan la autonomía de la voluntad y requieran el cumplimiento de los fines estatales (…)”;', style: 'comillas' },
                { text: 'ello significa que, las partes están en libertad de convenir las cláusulas o estipulaciones del contrato según sus necesidades y conveniencias, por lo que se hace jurídicamente viable la celebración del presente contrato de común acuerdo entre las partes contratantes, para lo cual dicho vínculo contractual se regirá por las siguientes ' },
                { text: 'CLÁUSULAS: CLÁUSULA PRIMERA. OBJETO:', bold: true },
                { text: 'objeto del estudio previo.', color: 'red' },
                { text: 'CLÁUSULA SEGUNDA. OBLIGACIONES DE LAS PARTES: 2.1) OBLIGACIONES ESPECIFICAS DEL CONTRATISTA:', bold: true },
                { text: 'obligaciones especificas del estudio previo', color: 'red' },
                { text: ' 2.2) OBLIGACIONES GENERALES DEL CONTRATISTA:', bold: true },

                { text: '1)', bold: true, color: '#00e180' },
                { text: ' Usar las diferentes plataformas que ha implementado el Departamento del Quindío para el manejo, envió, radicación y control de la documentación interna y externa que se manejará por parte de Funcionarios y Contratistas del Departamento del Quindío.', color: '#00e180' },
                { text: '2)', bold: true, color: '#00e180' },
                { text: ' Asistir a capacitaciones sobre temas relacionados con el objeto del contrato impartidas por funcionarios de la Administración Central Departamental a las que sean convocados.', color: '#00e180' },
                { text: '3)', bold: true, color: '#00e180' },
                { text: ' Cumplir con el objeto del contrato con plena autonomía profesional y administrativa y bajo su propia responsabilidad. Por lo tanto, no existe ni existirá ningún tipo de subordinación, ni vínculo laboral del CONTRATISTA con el Departamento del Quindío. ', color: '#00e180' },
                { text: '4)', bold: true, color: '#00e180' },
                { text: ' Elaborar informes periódicos que contengan la descripción detallada de las actividades realizadas. Este informe, deberá ser entregado al supervisor del contrato dentro de los cinco (5) días calendarios siguientes al cumplimiento de las obligaciones de manera mensual, quien tendrá la obligación de avalar la información ante el Ordenador del Gasto para la autorización del respectivo pago.', color: '#00e180' },
                { text: '5)', bold: true, color: '#00e180' },
                { text: ' Guardar la debida y completa reserva sobre la información y los documentos de que tenga conocimiento o a los que tenga acceso en virtud de la ejecución del contrato.', color: '#00e180' },
                { text: '6)', bold: true, color: '#00e180' },
                { text: ' Obrar con lealtad, diligencia, oportunidad y buena fe en la ejecución del contrato, evitando dilaciones injustificadas en las actividades contratadas.', color: '#00e180' },
                { text: '7)', bold: true, color: '#00e180' },
                { text: ' Responder por sus actuaciones y omisiones derivadas de la celebración del contrato y de la ejecución del mismo de conformidad con lo establecido en la ley 80 de 1993, Ley 1150 de 2007 y sus decretos reglamentarios.', color: '#00e180' },
                { text: '8)', bold: true, color: '#00e180' },
                { text: ' Dar adecuado uso de los bienes puestos a su disposición (material de oficina, computadores, impresoras, instalaciones, libros de consulta, material de trabajo, entre otros) para la ejecución de los servicios del contrato.', color: '#00e180' },
                { text: '9)', bold: true, color: '#00e180' },
                { text: ' Cumplir con sus obligaciones frente al Sistema de Seguridad Social Integral, manteniendo los pagos al día durante la ejecución del contrato de prestación de servicios, en cumplimiento de lo dispuesto en el inciso segundo y parágrafo primero del artículo 41 de la Ley 80 de 1993, modificado por el artículo 23 de la Ley 1150 de 2007.', color: '#00e180' },

                { text: '2.3) OBLIGACIONES DEL  CONTRATANTE:  1)', bold: true },
                { text: ' Poner  a  disposición  del  CONTRATISTA  la  información,  los expedientes, bienes y elementos que se requieran para el desarrollo y ejecución del objeto y  actividades  u  obligaciones  específicas  a  cargo  del  contratista,  considerando  que  el contratista  en  aplicación  de  su  autonomía  para  ejecutar  el  contrato  utilizará  sus  propias herramientas  y  recursos  para  la  ejecución  del  mismo. ' },
                { text: '2)', bold: true },
                { text: ' Tramitar  diligentemente  las apropiaciones  presupuestales  que  requiera  para  solventar  las  prestaciones  patrimoniales que  surjan  a  su  cargo  como  consecuencia  de  la  suscripción  del  contrato. ' },
                { text: '3)', bold: true },
                { text: ' Exigir  la ejecución correcta, idónea y oportuna del objeto y las obligaciones específicas y generales a cargo del contratista, así como realizar las recomendaciones que estime pertinentes, por intermedio  del  funcionario  designado  para  ejercer  la  Supervisión,  quien  tendrá  las responsabilidades, facultades y deberá cumplira cabalidad con las obligaciones contenidas en los artículos 83 y 84 de la Ley 1474 del año 2011. ' },
                { text: '4)', bold: true },
                { text: ' Recibir a satisfacción la prestación del  servicio  por  parte  del  CONTRATISTA,  cuando  este  cumpla  con  las  condiciones establecidas en el contrato. ' },
                { text: '5)', bold: true },
                { text: 'Pagar los honorarios al CONTRATISTA en la forma pactada y con sujeción a las disponibilidades presupuestales previstas para el efecto. ' },
                { text: '6)', bold: true },
                { text: ' Exigir  y verificar por intermedio del funcionario designado para ejercer la vigilancia y control de la ejecución del contrato, el cumplimiento de las obligaciones del contratista frente al pago de los aportes al sistema de seguridad social en salud, pensión y riesgos laborales; así como los  propios  del  SENA,  ICBF  y  Cajas  de  Compensación  Familiar,  cuando  corresponda.' },
                { text: 'CLÁUSULA  TERCERA.', bold: true, decoration: 'underline' },
                { text: 'VALOR  Y  FORMA  DE  PAGO:', bold: true },
                { text: '  El  valor  del  presente  contrato asciende  a  la  suma  de' },
                { text: 'valor de ' },
                { text: 'valor de contrato en letras y numero', bold: true, color: 'red' },
                { text: 'incluido IVA, impuestos o descuentos. El Departamento del Quindío cancelará el valor del futuro contrato mediante ' },
                { text: 'cantidad de pagos y frecuancia de los mismos', color: 'red' },
                { text: 'días calendario vencidos, cada uno  por valor de ' },
                { text: 'valor de cada pago en letra y numero,', bold: true, color: 'red' },
                { text: 'incluido  IVA, impuestos o descuentos, previa presentación del informe de actividades ejecutadas durante cada mes de prestación de servicios o periodo prestado, en el que debe de constar la acreditación del pago de aportes a seguridad social, pensión y riesgos laborales por el porcentaje señalado en la Ley. ' },
                { text: 'PARÁGRAFO  PRIMERO:', bold: true },
                { text: 'No  obstante  lo  anterior,  es necesario señalar que la forma de pago prevista queda sujeta a la situación de los recursos del Plan Anual Mensualizado de Caja PAC.' },
                { text: 'PARÁGRAFO SEGUNDO: EL DEPARTAMENTO, ', bold: true },
                { text: 'realizará en cada pago parcial los descuentos correspondientes a los tributos que cause este contrato. ' },
                { text: 'CLÁUSULA CUARTA. ', bold: true, decotation: 'underline' },
                { text: 'PLAZO DE EJECUCIÓN: ', bold: true },
                { text: 'El plazo de ejecución del presente contrato será de ' },
                { text: 'plazo de ejecucion en numero y letra DIAS CALENDARIO', color: 'red', bold: true },
                { text: 'contados a partir de la  uscripción del acta de inicio y cumplimiento de requisitos establecidos en el artículo 41 de la Ley 80 de 1993 modificada por el artículo 23 de la Ley 1150 de 2007, y en todo caso el acuerdo de voluntades a suscribir no podrá exceder la vigencia fiscal ' },
                { text: 'VIGENCIA FISCAL ', COLOR: 'red' },
                { text: 'CLÁUSULA  QUINTA. ', bold: true, decoration: 'underline' },
                { text: 'CAPACIDAD TÉCNICA Y CONTRACTUAL: EL CONTRATISTA', bold: true },
                { text: 'declara que tiene la capacidad legal para contratar con' },
                { text: 'EL DEPARTAMENTO, ', bold: true },
                { text: 'de conformidad con el artículo 6º de la Ley 80 de 1993. Así mismo, que tiene la idoneidad y la experiencia suficiente para cumplir las obligaciones contempladas en el presente contrato. Se anexa al presente contrato la propuesta de servicios del contratista, en la cual se acredita su capacidad para la prestación del servicio objeto del Contrato. ' },
                { text: 'CLÁUSULA SEXTA.', bold: true, decoration: 'underline' },
                { text: ' TERMINACIÓN MODIFICACIÓN E INTERPRETACIÓN UNILATERAL: ', bold: true },
                { text: 'En el presente contrato se entienden incluidas las cláusulas de terminación, modificación e interpretación unilaterales en los términos de los artículos 15, 16 y 17 de la Ley 80 de 1993. ' },
                { text: ' CLÁUSULA SÉPTIMA.', bold: true, decoration: 'underline' },
                { text: ' INHABILIDADES E INCOMPATIBILIDADES: EL CONTRATISTA', bold: true },
                { text: 'ratifica, acorde con la declaración rendida bajo la gravedad de juramento ante funcionario y/o contratista la cual reposa dentro del expediente contractual que no se encuentra  incursa  en  alguna  causal  de  inhabilidad  e  incompatibilidad  señaladas  en  los artículos  8º,  9º  y  concordantes  de  la  Ley  80  de 1993,  así  como  en  la  contemplada  en  el artículo 18º de la Ley 1150 de 2007 y artículos 1º al 4º  de la Ley 1474 de 2011 como las demás  que  establezca  la  Constitución  Política  de  Colombia  y  demás  Leyes  vigentes aplicables a la materia. ' },
                { text: 'CLÁUSULA OCTAVA.', bold: true, decoration: 'underline' },
                { text: 'PRESTACIONES SOCIALES: ', bold: true },
                { text: 'El presente contrato no causa prestaciones sociales a cargo de la entidad contratante, de conformidad con lo señalado en el numeral 3º artículo 32 de la Ley 80 de 1993. ' },
                { text: 'CLÁUSULA NOVENA.', bold: true, decoration: 'underline' },
                { text: ' CESIÓN Y SUBCONTRATACIÓN: ', bold: true },
                { text: 'El contratista no podrá ceder ni subcontratar sin previa autorización escrita del Contratante conforme con los presupuestos indicados en el artículo 41 Ley 80 de 1993. ' },
                { text: 'CLÁUSULA DÉCIMA.', bold: true, decoration: 'underline' },
                { text: ' MULTAS Y CLÁSULA PENAL PECUNIARIA: 10.1) MULTAS: ', bold: true },
                { text: 'En caso que exista mora o incumplimiento parcial de las obligaciones a cargo del (la) contratista consagradas en el presente contrato, mientras no se haya vencido su termino de ejecución, ' },
                { text: 'EL DEPARTAMENTO', bold: true },
                { text: 'adelantará el procedimiento establecido en el artículo 86 de la Ley 1474 del año 2011, en concordancia con el artículo 17 de la Ley 1150 del año 2007, con la finalidad de imponerle multas de: Un (1) salario mínimo diario legal  vigente,  cuya  liquidación  será  realizadapor  parte  el  (la)  supervisor (a)  del  contrato, ello,  con  la  finalidad  de  conminar  al  (la)  contratista  a  cumplir  con  sus  obligaciones pendientes  a favor de la entidad. La imposición de multas no libera al (la) contratista del cumplimiento de sus obligaciones contractuales, y su imposición y cobro tampoco es incompatible con el cobro de la cláusula penal.' },
                { text: '10.2) CLÁUSULA PENAL PECUNIARIA:', bold: true },
                { text: 'Las partes contratantes, fijan como tasación anticipada de perjuicios, la cláusula penal la suma de el: Diez por ciento (10%) del valor total del presente contrato; como consecuencia delincumplimiento total o parcial de las obligaciones adquiridas en el presente contrato por cada una de ellas, dicha suma deberá ser pagada por la parte incumplida, si terminado el plazo de ejecución del presente contrato cualquiera de las partes no ha cumplido  con las obligaciones a su cargo, lo anterior, conforme a lo dispuesto en los artículos: 1592 a 1601 del  Código  Civil  Colombiano.  Cuando  la  parte  incumplida  sea  el  Contratista,  la  Entidad Estatal  cobrará  la  suma  o  valor  de  la  presente  clausula  con  sujeción  al  procedimiento establecido en el artículo 86 de la ley 1474 del año 2011. ' },
                { text: 'CLÁUSULADÉCIMA PRIMERA.', bold: true, decoration: 'underline' },
                { text: ' PERFECCIONAMIENTO Y REQUISITOS PARA LA EJECUCIÒN: ', bold: true },
                { text: 'El presente contrato seperfecciona una vez suscrito por las partes, de conformidad con el inciso 1º del artículo 41 de  la  Ley  80  de  1993  y  se  legalizará  con  el  registro  del  contrato  en  el  presupuesto  del Departamento,  según  el  artículo  71  del  Decreto  111  de  1996.  Con  posterioridad  a  la legalización del contrato, se procederá a suscribir la respectiva acta de inicio. ' },
                { text: 'CLÁUSULA DÉCIMA  SEGUNDA:', bold: true, decoration: 'underline' },
                { text: ' CONTROL,  VIGILANCIA  Y  SUPERVISION: ', bold: true },
                { text: ' El  control  vigilancia  y seguimiento  del  Contrato  de  Prestación  de  Servicios  se  realizará  quien  el  contratante designe mediante oficio y tendrá las siguientes funciones: ' },
                { text: 'a) ', bold: true },
                { text: 'Verificar el cumplimiento de las  obligaciones. ' },
                { text: 'b) ', bold: true },
                { text: 'Verificar  la  afiliación  al  sistema  de  seguridad  social  y  el  correcto cumplimiento  de  los  aportes  en  salud,  pensión  y  riesgos  laborales, ' },
                { text: 'c) ', bold: true },
                { text: 'Certificar  el cumplimiento a satisfacción de las obligaciones, para cada uno de los pagos. ' },
                { text: 'CLÁUSULA DÉCIMA TERCERA:', bold: true, decoration: 'underline' },
                { text: ' GARANTÍAS: ', bold: true },
                { text: 'De conformidad con lo señalado en el artículo 2.2.1.2.1.4.5 del Decreto 1082 de 2015, no es requisito la exigencia de garantía única para este tipo de contratos teniendo en cuenta el tipo de servicio y la forma de pago estipulada, esto es, pago parcial en cada mes vencido tras la prestación del servicio, por lo tanto, no se considera necesario que el contratista constituya garantía única. ' },
                { text: 'CLÁUSULA DÉCIMA CUARTA:', bold: true, decoration: 'underline' },
                { text: ' DOMICILIO Y LEYES: ', bold: true },
                { text: 'Para todos los efectos legales el domicilio es la ciudad de Armenia Quindío. Este contrato se rige por las normas civiles y comerciales, la Ley 80 de 1993, así como por la Ley 1150 de 2007, manual de contratación de la entidad y el Decreto 1082 de 2015 o las normas que lo modifiquen, deroguen o sustituyan. ' },
                { text: 'CLÁUSULA DÉCIMA QUINTA:', bold: true, decoration: 'underline' },
                { text: 'IMPUTACION PRESUPUESTAL. ', bold: true },
                { text: 'El presente contrato se cancelará con cargo al ' },
                { text: 'Certificado deDisponibilidad Presupuestal Nro 117 del 12 de enero de 2024', bold: true, color: '#ff0000' },
                { text: ',correspondiente al rubro Nro. 0304-2.1.2.02.02.008-20 denominado como SERVICIOS PRESTADOS A LAS EMPRESAS Y SERVICIOS DE PRODUCCION, expedido por la Secretaria de Hacienda y Finanzas Públicas del Departamento del Quindío.' },
                { text: ' CLÁUSULA DÉCIMA  SEXTA:', bold: true, decoration: 'underline' },
                { text: 'CADUCIDAD:', bold: true },
                { text: '  En  caso  de  incumplimiento  del  contratista  que  pueda afectar  de  manera  grave  y  directa  la  ejecución  del  contrato  y  se  evidencie  que  pueda conducir  a  su  paralización, ' },
                { text: 'EL DEPARTAMENTO ', bold: true },
                { text: 'podrá declarar la caducidad de este conforme con lo indicado en el artículo 14 de la Ley 80 de 1993, de acuerdo con el procedimiento establecido en el artículo 18 de la Ley precitada. ' },
                { text: 'CLÁUSULA  DÉCIMA SÉPTIMA: ', bold: true, decoration: 'underline' },
                { text: 'AUTONOMÍA TÉCNICA Y ADMINISTRATIVA: EL CONTRATISTA ', bold: true },
                { text: 'actúa con autonomía administrativa y financiera en el cumplimiento de sus obligaciones y, en consecuencia, no contrae relación laboral alguna con ' },
                { text: 'EL DEPARTAMENTO. ', bold: true },
                { text: 'CLÁUSULA DÉCIMA  OCTAVA: ', bold: true, decoration: 'underline' },
                { text: 'AFILIACIÓN  A  SEGURIDAD  SOCIAL. ', bold: true },
                { text: 'Será responsabilidad del contratista afiliarse al Sistema General de Seguridad Social (salud  y  pensión), esto conforme con lo estipulado en las Leyes 789 de 2002 y 797 de 2003 y sus Decretos Reglamentarios. Será afiliado por la entidad al sistema de riesgos laborales, así como los propios del SENA, ICBF y Cajas de Compensación Familiar, cuando corresponda. Pero en todo caso, el contratista asumirá el pago de sus aportes en los términos de ley.' },
                { text: 'CLÁUSULA DÉCIMA NOVENA: ', bold: true, decoration: 'underline' },
                { text: 'LIQUIDACIÓN. ', bold: true },
                { text: 'De conformidad con lo establecido en el artículo 217 del Decreto 019 de 2012, no es obligatoria la liquidación de este contrato, por lo cual, solo se  procederá  a  realizar  liquidación,  en  el  evento  en  que  se  termine  anormalmente.' },
                { text: 'CLÁUSULA  VIGESIMA: ', bold: true, decoration: 'underline' },
                { text: 'CLAUSULA  DE  INDEMNIDAD. ', bold: true },
                { text: 'EL  DEPARTAMENTO, ', bold: true },
                { text: 'de cualquier reclamación proveniente de terceros que tengan como causa las actuaciones del contratista con ocasión de la ejecución de este contrato.' },
                { text: 'CLÁUSULA VIGESIMA PRIMERA: ', bold: true, decoration: 'underline' },
                { text: 'APROBACIÓN Y FIRMA ELECTRÓNICA:', bold: true },
                { text: 'De conformidad con lo señalado en el artículo 7º de la Ley 527 de 1999, Decreto 2364 de 2012 como las diferentes guías para el uso y manejo del Secop II para entidades Estatales y proveedores, la suscripción del contrato será realizada a través de los flujos de aprobación y firmas electrónicas establecidas en el Sistema Electrónico de Contratación Pública Secop II, por lo tanto, su aprobación indicará expresamente que acepta todas las condiciones y obligaciones contenidas dentro del presente contrato.' },
                { text: '\n\nAprobación del contrato y Firma Electrónica: ', bold: true },
                { text: 'La Plataforma del SECOP II maneja para los procesos de selección y los contratos celebrados la firma electrónica. El SECOP II se rige por las normas que regulan y se aplican dentro del Sistema de Compras Públicas y por aquellos que rigen el comercio electrónico. Así las cosas, quien se inscribe en tal sistema, obtiene una firma electrónica con su usuario y contraseña, la cual es ' },
                { text: 'personal  e intransferible', bold: true, decoration: 'underline' },
                { text: ', y obliga por medio de esta firma a quien suscriba el presente contrato, o a la persona a la que el firmante representa. La firma electrónica que manejan los usuarios del SECOP II cumple con los requisitos de confiabilidad de las firmas electrónicas exigidos en  el  artículo  4º  del  Decreto  2364  de  2012,  como  que  los  datos  de  creación  de  la  firma corresponden exclusivamente al firmante. En consecuencia, es posible detectar cualquier alteración no permitida posterior al momento de la firma o suscripción electrónica, gracias al sello y constancia de tiempo real que contiene el Sistema Electrónico de Contratación Pública Secop II.' },
                { text: '2', sup: true },
                { text: '\n\n' },
            ],
            alignment: 'justify', headlineLevel: 2
        },
        {
            text: [
                { text: 'Revisó: Leidy Cecilia Valencia Camargo -Directora Administrativa de Contratación.\n' },
                { text: 'Aprobó: Juan Carlos Alfaro García -Secretario Jurídico y de Contratación\n\n\n\n' }
            ], fontSize: 10, alignment: 'left'
        },
        {
            table: {
                widths: ['*', '*', '*'], headlineLevel: 1,
                body: [
                    [{ text: 'ELABORACIÓN', bold: true, fontSize: 9 }, { text: 'REVISIÓN', bold: true, fontSize: 9 }, { text: 'APROBACIÓN', bold: true, fontSize: 9 }],
                    [
                        {
                            text: [
                                { text: 'Elaborado por:', alignment: 'left' },
                                '\n\n\n',
                                { text: 'Andrés Felipe Duarte Rojas', alignment: 'center' },
                            ], fontSize: 9
                        },
                        {
                            text: [
                                { text: 'Revisado por:', alignment: 'left' },
                                '\n\n\n',
                                { text: 'Leidy Cecilia Valencia Camargo', alignment: 'center' },
                            ], fontSize: 9
                        },
                        {
                            text: [
                                { text: 'Elaborado por:', alignment: 'left' },
                                '\n\n\n',
                                { text: 'Juan Carlos Alfaro Garcia', alignment: 'center' },
                            ], fontSize: 9
                        }
                    ],
                    [
                        { text: 'Cargo: Jefe de Estudios Previos', fontSize: 9 },
                        { text: 'Cargo: Directora de Contratación', fontSize: 9 },
                        { text: 'Cargo: Secretaria de Despacho', fontSize: 9 }
                    ]
                ]

            },
            layout: {
                // Definir el estilo de los bordes
                hLineWidth: function(i, node) {
                    return (i === 0 || i === node.table.body.length) ? 0.5 : 0.5;
                },
                vLineWidth: function(i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 0.5 : 0.5;
                },
            }
        }



    ],

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

const botonMinuta = document.getElementById('minuta');
botonMinuta.addEventListener('click', function(e) {
    e.preventDefault();
    const pdfDocGenerator = pdfMake.createPdf(pdfMinuta);
    pdfDocGenerator.open();
})