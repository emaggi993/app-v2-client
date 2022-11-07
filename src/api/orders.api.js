import axios from "axios";

export const getAllOrdersByUser= async (user)=>{
    console.log(user)
    return axios.get(`https://emaggi.xyz/api/otrosrepuestos/orders/${user.cod_usuario_sistema}`);
    // return axios.get(`http://localhost:4000/api/otrosrepuestos/orders/${user.cod_usuario_sistema}`);
}