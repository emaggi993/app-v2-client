import axios from "axios";

export const getUser= async (user)=>{
    console.log(user)
    return axios.post("https://emaggi.xyz/api/otrosrepuestos/usuario", user).catch((reason) => {
        if (reason.response?.status === 404) {
          return {status: 404, data: null}
        }
      });
    // return axios.post("http://localhost:4000/api/otrosrepuestos/usuario", user).catch((reason) => {
    //     if (reason.response?.status === 404) {
    //       return {status: 404, data: null}
    //     }
    //   });
}