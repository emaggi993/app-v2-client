import { Buffer } from "buffer";

export const fFloat=(numero)=>{
    return `💵 ${parseFloat(numero).toFixed(2)}`;
}
const obtenerImagen= (blobImagen)=>{
    const buffer = Buffer.from(blobImagen)
    const blob = new Blob([ buffer ], { type: 'image/jpeg' })
    
    return blob;
    
}
export const fRenderImageBlob=(blobImagen)=>{
    return URL.createObjectURL(obtenerImagen(blobImagen))
}