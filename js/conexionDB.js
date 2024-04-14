const supabaseURL = 'https://gwhwzptfplkizqegaljb.supabase.co';
const supabaseAnonPublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aHd6cHRmcGxraXpxZWdhbGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0OTEwOTQsImV4cCI6MjAyNzA2NzA5NH0.bxw-KcIoKKkds4d0guJucWDzpsIztd2FSARwiXy-A1M'
const ClienteSupabase = supabase.createClient(supabaseURL,supabaseAnonPublicKey);

async function insertEstudioPrevio(dataDocument) {
    
    const {data, error} = await ClienteSupabase
        .from('estudios_Previos')
        .insert({numero_estudio:dataDocument.numeroPrecontractual, contenido: dataDocument})
        .select()

   console.log(error);
   console.log(data);
}

async function getEstudioList() {
    
    const {data: estudios_Previos, error} = await ClienteSupabase
        .from('estudios_Previos')
        .select('numero_estudio')

    console.log(error);
    console.log(estudios_Previos);

}

