"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";


function ItemCourse({
  title,
  star,
  loc,
  timeFrom,
  timeTo,
  oldsalary,
  newsalary,
  image,
  img,
  love,
  id,
  category_id,
  fav
}) {
  const handelFav = (id) => {
   
    const po = axios
      .post(
        "https://findhelpapp.com/api/v1/users/favourites",
        {
          "model_type": "UserService",
          "model_id": id
        },
        {
          headers: Cookies.get("token")?{
            Authorization: `Bearer ${Cookies.get("token")} `,
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
          }:{
            "Content-Type": "application/json",
            Accept: "application/json",
            "Accept-Language": "ar",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
    setLoading(false)

        console.log(res);
      });
  };

  return (
    <div className= "service" key={id}>
      <button
      onClick={()=>{handelFav(id)}}
        className= "stateLove"
       
      >
        {
          fav?<img src="/images/loved.svg" alt="love" />:<img src="/images/love.svg" alt="love" />
        }
       
      </button>
      <Link href={`/categoriesDetails/${category_id}/${id}`}>
      <img src={img?.length?img[0]?.url:`/images/Logo.svg`}  className= "imgService" alt="service" />

      </Link>
      <div className= "aboutservice">
        <Link href={`/categoriesDetails/${category_id}/${id}`}>
        <div className= "head">
          <h3>{title}</h3>
          <div className= "Star">
            <img src="/images/star.svg" alt="star" />
            <p>{star}</p>
          </div>
        </div>
        <ul>
         {
          timeFrom&&<li>
          <img src="/images/Time-Circle.svg" alt="Time-Circle" />
          <p>
            {timeFrom} to {timeTo}
          </p>
        </li>
           
         }
          <li>
            <img src="/images/Location.svg" alt="Location" />
            <p>{loc}</p>
          </li>
        </ul>
        </Link>
        
        <div className= "salary_pay">
         {
          newsalary===0?<></>:
           <div className= "salary">
           {oldsalary ? (
             <>
               <span className= "sall">{oldsalary} EGP</span>
               <p>{newsalary} EGP</p>
             </>
           ) : (
             <> <p>{newsalary} EGP</p></>
           )}
         </div>
         }
          <Link href={`/checkOut?id=${id}`} className= "btn_page">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCourse;
