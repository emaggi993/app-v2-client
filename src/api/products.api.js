import axios from "axios";

export const getProductsPagination= async (page, orderBy='disponibilidad', category='general')=>{
    return axios.get(`http://127.0.0.1:4000/productos/pagination/${page}?orderBy=${orderBy}&category=${category}`);
    
}
export const getAllProducts= async ()=>{
    return axios.get("http://127.0.0.1:4000/productos");
}
export const getListaPrecio= async ()=>{
    return axios.get("http://127.0.0.1:4000/prices_list");
}
