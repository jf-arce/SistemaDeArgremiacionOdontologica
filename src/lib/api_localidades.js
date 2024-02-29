
export const getPronvincias = async () => {
  try {
    const res = await fetch('https://api-localidades.mgutierrez.ar/provinces');
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Ocurrió un error en cargar las provincias: ', error);
  }
}

export const getLocalidades = async (provincia) => {
  try {
    const res = await fetch(`https://api-localidades.mgutierrez.ar/localidades?provincia=${provincia}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Ocurrió un error en cargar las provincias: ', error);
  }
}  