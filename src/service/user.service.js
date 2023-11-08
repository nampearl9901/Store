import { https,api } from "./url.config";

export const Usersev = {
 postLogin: (email, passwordHash)=>{
    return https.post("/User/login",{email, passwordHash})
 },
 postRegister: (userData) => {
   return https.post("/User/register", userData);
 },
 getprofile:()=>{
    return api.get("/User/profile")
 }

}
export default Usersev;
