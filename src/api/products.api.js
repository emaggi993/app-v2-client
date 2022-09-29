import axios from "axios";

export const getProductsPagination= async (page)=>{
    return axios.get(`http://127.0.0.1:4000/productos/pagination/${page}`);
    
}
export const getAllProducts= async ()=>{
    return axios.get("http://127.0.0.1:4000/productos");
}
