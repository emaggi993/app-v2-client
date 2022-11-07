import axios from "axios";

export const getProductsPagination= async (page, orderBy='disponibilidad', category='general')=>{
    return axios.get(`https://emaggi.xyz/api/otrosrepuestos/productos/pagination/${page}?orderBy=${orderBy}&category=${category}`);
    // return axios.get(`http://localhost:4000/api/otrosrepuestos/productos/pagination/${page}?orderBy=${orderBy}&category=${category}`);
    
}
export const getAllProducts= async ()=>{
    return axios.get("https://emaggi.xyz/api/otrosrepuestos/productos");
    // return axios.get("http://localhost:4000/api/otrosrepuestos/productos");
}
export const getListaPrecio= async ()=>{
    return axios.get("https://emaggi.xyz/api/otrosrepuestos/prices_list");
    // return axios.get("http://localhost:4000/api/otrosrepuestos/prices_list");
}
export const postOrder= async (order)=>{
    return axios.post("https://emaggi.xyz/api/otrosrepuestos/orders/create", order);
    // return axios.get("http://localhost:4000/api/otrosrepuestos/prices_list");
}
