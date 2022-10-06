import axios from "axios";

export const getProductsPagination= async (page, orderBy='disponibilidad', category='general')=>{
    return axios.get(`https://emaggi.xyz/api/otrosrepuestos/productos/pagination/${page}?orderBy=${orderBy}&category=${category}`);
    
}
export const getAllProducts= async ()=>{
    return axios.get("https://emaggi.xyz/api/otrosrepuestos/productos");
}
export const getListaPrecio= async ()=>{
    return axios.get("https://emaggi.xyz/api/otrosrepuestos/prices_list");
}
