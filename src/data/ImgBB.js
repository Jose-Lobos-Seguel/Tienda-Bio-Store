const API_KEY = import.meta.env.VITE_IMGBB_KEY;

export async function subirImagen(archivo) {
  const datos = new FormData();
  datos.append("image", archivo);

  const respuesta = await fetch(

    "https://api.imgbb.com/1/upload?key=" + API_KEY,
    {
        method: "POST",
        body: datos,
    }
    );

    if (respuesta.ok) {
    const resultado = await respuesta.json();
    return resultado.data.url;
    }
    return null;
}