import Cookies from "js-cookie";

let headersToken = {
    Authorization: `Bearer ${Cookies.get('token')} `,
     "Content-Type": "application/json",
     Accept: "application/json",
     
   };
   
   let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
     
   };

  export const getUser = async (e) => {
    try {
        const res = await fetch("https://findhelpapp.com/api/v1/users/auth/user", {
            method: 'POST',
            headers:{
                Authorization: `Bearer ${Cookies.get('token')} `,
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Accept-Language": "ar",
                 
               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }
  
  export const getHomePage = async () => {
    try {
        const res = await fetch("https://findhelpapp.com/api/v1/meta/data", {
            method: 'GET',
            headers:{
              
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Accept-Language": "ar",
               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }
  
  export const getCities = async (id) => {
    try {
        const res = await fetch(`https://findhelpapp.com/api/v1/meta/cities/${id}`, {
            method: 'GET',
            headers:{
              
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Accept-Language": "ar",
               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }

  
  