import { createContext, useState, useEffect } from "react";


export const UserContext = createContext();
const userTest = {
    "id_usuario": 32,
    "nombre": "RAFA ACOSTA 3731-494666",
    "apellido": "RAFA ACOSTA 3731-494666",
    "razon_social": "RAFA ACOSTA 3731-494666",
    "telefono": "",
    "nick": "rafa",
    "cod_usuario_sistema": 1344,
    "contrasenha": "ela",
    "fecha_alta": "2022-10-17T03:00:00.000Z",
    "hora_alta": "12:25 PM",
    "id_grupo": 2,
    "estado": 1,
    "s_email": "rafa",
    "cod_tipoprecio": 0,
    "d_factor": 1,
    "b_todoarticulo": 1,
    "fecha_actualizado": null
  }
export const UserProvider = ({ children }) =>{
    

    const [user, setUser] = useState(() => {
        try{
            const userEnLocalStorage = localStorage.getItem("user");
            return userEnLocalStorage ? JSON.parse(userEnLocalStorage) : null;
        } catch (error){
            return {};
        }
    })
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user));
        
    }, []);
    const loginUser= (user)=>{
        if (user){
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user)
        }

    }
    const logoutUser= ()=>{
        localStorage.removeItem("user")
        
    }
    return (
        <UserContext.Provider value= {{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}
