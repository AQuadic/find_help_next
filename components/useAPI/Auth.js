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
   let body = {
    "from_all": true
};

  export const LogOut = async () => {
    try {
        const res = await fetch(`https://education.aquadic.com/api/v1/users/auth/logout`, {
            method: 'POST',
            headers:headersToken,
            body,
        },);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error in Add New Category (service) =>', error);
    }
  }
  