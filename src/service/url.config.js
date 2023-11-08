import axios from "axios";
import { BAT_LOADING, TAT_LOADING } from "../redux/constants/spinnerContant";
import {store } from "../index";



// khai báo token
//export const TOKEN = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJzdHJpbmdAeWFob28uY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTY5ODM3NTk4NX0.p1KUNnbRl8EA1aRZFR_3-ZUjzfEFBmI1vKhvFv5GITs";


// khai báo configHeaders token
// export const configHeaders = () => {
//     return {
//       Authorization:`bearer ${TOKEN}`,
      
//     };
//   };
  

// đường link backend
//export const BASE_URL = "https://64f82cc9824680fd217f3782.mockapi.io/showshop";
export const BASE_URL = "https://localhost:7189/api";



// tạo http
export const https = axios.create({
    baseURL: BASE_URL,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    //dùng để gọi và khai báo token khi API cần
   //headers: configHeaders(),
  });
  //
  const token = localStorage.getItem('Authorization');
  export const configHeaders = () => {
    return {
     Authorization: `Bearer ${token}`,
      
    };
  };
  export const api = axios.create({
    baseURL: BASE_URL,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    //dùng để gọi và khai báo token khi API cần
   headers: configHeaders(),
  });

      
 

  // Add a request interceptor
https.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      store.dispatch({
        type: BAT_LOADING,
      });
  
      console.log("before axios");
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  https.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
  
      store.dispatch({
        type: TAT_LOADING,
      });
      console.log("after");
  
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
  
      return Promise.reject(error);
    }
  );
  
  