const supabaseURL = 'https://gwhwzptfplkizqegaljb.supabase.co';//url de la base de datos
// api key  de la base de datos
const supabaseAnonPublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aHd6cHRmcGxraXpxZWdhbGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0OTEwOTQsImV4cCI6MjAyNzA2NzA5NH0.bxw-KcIoKKkds4d0guJucWDzpsIztd2FSARwiXy-A1M'
//inicializando la conexion con el servidor
const ClienteSupabase = supabase.createClient(supabaseURL, supabaseAnonPublicKey);
const miHeaders = {
    "apikey": supabaseAnonPublicKey,
    "Authorization": 'Bearer ' + supabaseAnonPublicKey
}
// funcion para insertar un estudio previo
async function insertEstudioPrevio(dataDocument) {

    const { data, error } = await ClienteSupabase
        .from('estudios_Previos')
        .insert(
        { 
            numero_estudio: dataDocument.numeroPrecontractual,
            tipo_contrato: dataDocument.tipoContrato,
            dependencia: dataDocument.dependencia,
            contenido: dataDocument 
        })
        .select()

    console.log(error);
    console.log(data);
}
//funcion para obtener un estudio previo de la tabla
async function getEstudioPrevio(numeroPrecontractual) {
    const { data: estudios_Previos, error } = await ClienteSupabase
        .from('estudios_Previos')
        .select()
        .eq('numero_estudio', numeroPrecontractual)

    return estudios_Previos;
}

async function UpdateEstudioPrevio(dataDocument){

    const { data, error } = await ClienteSupabase
      .from('estudios_Previos')
      .update({ other_column: 'otherValue' })
      .eq('id', dataDocument.id )
      .select()

    console.log("error", error);
    console.log("data", data);

    return data;

}

async function getEstudioList() {

    const parametro = '/rest/v1/estudios_Previos?select=*'
    const consulta = fetch(
        'https://gwhwzptfplkizqegaljb.supabase.co' + parametro,
        {
            method: 'get',
            headers: miHeaders,
        }
    )
        .then((res) => { return res.json() })
        .catch((err) => console.log('error:', err))
        .then((response) => console.log('success:', response))

    return consulta

}
// funcion para insertar un nuevo contratista
async function insertContratista(contratista) {

    const { data, error } = await ClienteSupabase
    .from('contratista')
    .insert([
    { 
        identificacion: contratista.identificacion, 
        tipo_documento: contratista.tipo_documento,
        lugar_expedicion: contratista.lugar_expedicion,
        direccion: contratista.direccion,
        lugar_residencia: contratista.lugar_residencia,
        nombre: contratista.nombre,
        apellido:contratista.apellido,
    },
    ])
    .select()
    
    console.log(error);
    console.log(data);
    
}

//funcion para obtener un contratista de la tabla
async function getContratista(idContratista) {

    const { data: contratista, error } = await ClienteSupabase
        .from('contratista')
        .select('*')
        .eq('identificacion', idContratista)

    console.log(error);
    console.log(contratista);

    return contratista;
}

