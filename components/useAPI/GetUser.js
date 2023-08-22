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

  export const getUser = async () => {
    try {
        const res = await fetch(`https://education.aquadic.com/api/v1/users/auth/user`, {
            method: 'POST',
            headers:headersToken,
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }
  