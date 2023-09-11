import Cookies from "js-cookie";

let headersToken = {
  Authorization: `Bearer ${Cookies.get("token")} `,
  "Content-Type": "application/json",
  Accept: "application/json",
};

let headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getCategories = async () => {
  try {
    const res = await fetch(
      `https://findhelpapp.com/api/v1/users/categories`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")} `,
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Language": "ar"
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};

export const getServices = async () => {
 
  try {
    const res = await fetch(
      "https://findhelpapp.com/api/v1/users/services",
      {
        method: "GET",
        headers: {
         
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Language": "ar"
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};