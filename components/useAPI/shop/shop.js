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

export const getServices = async (id,search) => {

  try {
    const url = new URL(
      "https://findhelpapp.com/api/v1/users/services"
  );
  
  const params = id===0? {
      'search':search,
      "pinned": "1",
      "per_page":"3",
  }:{
    "category_id": id,
    'search':search,
    "pinned": "1",
    "per_page":"3",
  };
  Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
  
  const headers = Cookies.get("token")?{
    Authorization: `Bearer ${Cookies.get("token")} `,
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "ar"
  }:{
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language": "ar",
  };
  
    const res = await fetch(url, {
      method: "GET",
      headers,
  })
 
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};


export const getSingleServices = async (id) => {

  try {
    const url = new URL(
      `https://findhelpapp.com/api/v1/users/services/${id}`
  );
  
  const headers = Cookies.get("token")?{
    Authorization: `Bearer ${Cookies.get("token")} `,
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "ar"
  }:{
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language": "ar",
  };
  
    const res = await fetch(url, {
      method: "GET",
      headers,
  })
 
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};


export const getServicesClient = async (id) => {

  try {
    const url = new URL(
      `https://findhelpapp.com/api/v1/users/services?user_id=${id}`
  );
  
  
  const headers = Cookies.get("token")?{
    Authorization: `Bearer ${Cookies.get("token")} `,
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "ar"
  }:{
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language": "ar",
  };
  
    const res = await fetch(url, {
      method: "GET",
      headers,
  })
 
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};


export const getMyServices = async () => { 
  try {
    const res = await fetch(
      "https://findhelpapp.com/api/v1/users/services/mine",
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
export const getMyOrders = async (p1,p2,p3,p4) => {
  try {
    const url = new URL(
      "https://findhelpapp.com/api/v1/users/orders/mine"
  );
  
  const params = {
    "statuses":[p1,p2,p3,p4]
  };
  Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
      const headers = {
        Authorization: `Bearer ${Cookies.get("token")} `,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Language": "ar",
    };
    
      const res = await fetch(url, {
        method: "GET",
        headers,
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};


export const getMyServices2 = async (p1,p2,p3,p4) => {
  try {
    const url = new URL(
      "https://findhelpapp.com/api/v1/users/orders"
  );
  
  const params = {
    "statuses":[p1,p2,p3,p4]
  };
  Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
      const headers = {
        Authorization: `Bearer ${Cookies.get("token")} `,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Language": "ar",
    };
    
      const res = await fetch(url, {
        method: "GET",
        headers,
    })
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};

export const getCategoriesHome = async () => {
  try {
    const res = await fetch(
      `https://findhelpapp.com/api/v1/meta/service_categories`,
      {
        method: "GET",
        headers: Cookies.get("token")?{
          Authorization: `Bearer ${Cookies.get("token")} `,
          "Content-Type": "application/json",
          Accept: "application/json",
          "Accept-Language": "ar"
        }:{
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

export const getHomeServices = async (id) => {

  try {
    const url = new URL(
      "https://findhelpapp.com/api/v1/users/services"
  );
  
  const params = {
      "category_id": id,
      
  };
  Object.keys(params)
      .forEach(key => url.searchParams.append(key, params[key]));
  
  const headers = Cookies.get("token")?{
    Authorization: `Bearer ${Cookies.get("token")} `,
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "ar"
  }:{
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language": "ar",
  };
  
    const res = await fetch(url, {
      method: "GET",
      headers,
  })
 
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error in Add New Category (service) =>", error);
  }
};

export const getMyFav = async () => {
  try {
    const res = await fetch(
      "https://findhelpapp.com/api/v1/users/favourites",
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