

import { https } from "./url.config";

export const productService = {
 getbanner: ()=>{
    return https.get("/Banner/getbanner")
 },

 getProduct: ()=>{
    return https.get("/products/getproduct");
 }

}
export default productService;

