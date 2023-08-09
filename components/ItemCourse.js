import React from "react";
import Link from 'next/link'

function ItemCourse({
  title,
  star,
  dec,
  oldsalary,
  newsalary,
  image,
  best,
  Myprogress,
  numProgress,
  link2
}) {
  return (
    <div className="service ">
      {best && <h5>{best}</h5>}
      <Link href={link2?link2:"/coursesDetails"}>
        <img
          src={`./images/service/service${image}.webp`}
          className="imgService"
          alt="service"
        />
      </Link>
      <div className="aboutservice">
        <Link href={link2?link2:"/coursesDetails"} >
          <div className="head">
            <h3>{title}</h3>
            {star && (
              <div className="Star">
                <img src="/images/star.svg" alt="star" />

                <p>{star}</p>
              </div>
            )}
          </div>
          <p className="dec_service">{dec}</p>
          {newsalary && (
            <div className="salary">
              {!oldsalary && <p>{newsalary}</p>}
              {oldsalary && (
                <>
                  <span className="sall">{oldsalary}</span>
                  <p>{newsalary}</p>
                </>
              )}
            </div>
          )}
        </Link>
        {Myprogress && (
          <>
            <div className="lineprogress">
              <div className="numProgress">
                <span style={{ width: numProgress }}></span>
              </div>
              <p className="dec_service">{numProgress} Completed</p>
            </div>
           {
            numProgress==="100%"&& <Link href="/certificate" className="btn_page">
            View Certificate
          </Link>
           }
          </>
        )}
{
  !Myprogress && <Link href="/checkOut" className="btn_page2">
  Enroll Now
</Link>
}
       
      </div>
    </div>
  );
}

export default ItemCourse;
