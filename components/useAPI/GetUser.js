import axios from "axios";
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
            headers:Cookies.get("token")?{
              Authorization: `Bearer ${Cookies.get("token")} `,
              "Content-Type": "application/json",
              Accept: "application/json",
              "Accept-Language": "ar",
                
            }:{
              
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
                country_id:Cookies.get('countryID')?Cookies.get('countryID'):null

               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }

  
  export const getProviders = async (id) => {
    try {
        const res = await fetch(`https://findhelpapp.com/api/v1/users/orders/${id}`, {
            method: 'GET',
            headers:{
              Authorization: `Bearer ${Cookies.get("token")} `,
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Accept-Language": "ar",
                country_id:Cookies.get('countryID')?Cookies.get('countryID'):null

                 
               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }

  export const getUserLocation = async (e) => {
    try {
        const res = await fetch("https://findhelpapp.com/api/v1/users/addresses", {
            method: 'GET',
            headers:{
                Authorization: `Bearer ${Cookies.get('token')} `,
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Accept-Language": "ar",
                country_id:Cookies.get('countryID')?Cookies.get('countryID'):null

                 
               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }
  
  export const getAreas = async (id) => {
    try {
        const res = await fetch(`https://findhelpapp.com/api/v1/meta/areas/${id}`, {
            method: 'GET',
            headers:{
              
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Accept-Language": "ar",
                country_id:Cookies.get('countryID')?Cookies.get('countryID'):null

               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }


  export const getProvider = async (id) => {
    try {
        const res = await fetch(`https://findhelpapp.com/api/v1/users/providers/${id}`, {
            method: 'GET',
            headers:Cookies.get("token")?{
              Authorization: `Bearer ${Cookies.get("token")} `,
              "Content-Type": "application/json",
              Accept: "application/json",
              "Accept-Language": "ar",
              country_id:Cookies.get('countryID')?Cookies.get('countryID'):null

            }:{
               
                 "Content-Type": "application/json",
                 Accept: "application/json",
                 "Accept-Language": "ar",
                country_id:Cookies.get('countryID')?Cookies.get('countryID'):null

                 
               },
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }

  export const getCountryUser = async () => {
    const result = axios
      .get("https://api.country.is/")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return "";
      });
    return result;
  };