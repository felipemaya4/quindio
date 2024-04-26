const supabaseURL = 'https://gwhwzptfplkizqegaljb.supabase.co';//url de la base de datos
// api key  de la base de datos
const supabaseAnonPublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aHd6cHRmcGxraXpxZWdhbGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0OTEwOTQsImV4cCI6MjAyNzA2NzA5NH0.bxw-KcIoKKkds4d0guJucWDzpsIztd2FSARwiXy-A1M'
//inicializando la conexion con el servidor
const ClienteSupabase = supabase.createClient(supabaseURL,supabaseAnonPublicKey);
const miHeaders = {
    "apikey": supabaseAnonPublicKey,
    "Authorization": 'Bearer '+supabaseAnonPublicKey
}
// funcion para insertar un estudio previo
async function insertEstudioPrevio(dataDocument) {
    
    const {data, error} = await ClienteSupabase
        .from('estudios_Previos')
        .insert({numero_estudio:dataDocument.numeroPrecontractual, contenido: dataDocument})
        .select()

   console.log(error);
   console.log(data);
}
//funcion para obtener un estudio previo de la tabla
async function getEstudioPrevio(numeroPrecontractual) {
    const { data, error } = await ClienteSupabase
    .from('estudios_Previos')
    .select()
    .eq('numero_estudio', numeroPrecontractual)
    
    console.log(error);
    console.log(data);
}

async function getEstudioList() {
    
    const parametro = '/rest/v1/estudios_Previos?select=*'
    const consulta = fetch(
       'https://gwhwzptfplkizqegaljb.supabase.co'+parametro,
        {
            method: 'get',
            headers: miHeaders,
        }
     )
     .then((res) =>{ return res.json()})
     .catch((err)=> console.log('error:',err))
     .then((response)=>console.log('success:',response))

     return consulta
    
}

//funcion para obtener todos los contratistas de la tabla
async function getContratistasList() {
    
    const { data, error } = await ClienteSupabase
    .from('contratista')
    .select('*')
    
    console.log(error);
    console.log(data);
}

