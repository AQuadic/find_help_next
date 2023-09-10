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
  love
}) {
  return (
    <div class="service">
      <div
        class="stateLove"
        style={love&&{ backgroundImage: "url(/images/loved.svg)" }}
      >
        <img src="/images/love.svg" alt="love" />
      </div>
      <img src={`/images/service${image}.webp`} class="imgService" alt="service" />
      <div class="aboutservice">
        <div class="head">
          <h3>{title}</h3>
          <div class="Star">
            <img src="/images/star.svg" alt="star" />
            <p>{star}</p>
          </div>
        </div>
        <ul>
          <li>
            <img src="/images/Time-Circle.svg" alt="Time-Circle" />
            <p>
              {timeFrom} to {timeTo}
            </p>
          </li>
          <li>
            <img src="/images/Location.svg" alt="Location" />
            <p>{loc}</p>
          </li>
        </ul>
        <div class="salary_pay">
          <div class="salary">
            {oldsalary ? (
              <>
                <span class="sall">{oldsalary} EGP</span>
                <p>{newsalary} EGP</p>
              </>
            ) : (
              <> <p>{newsalary} EGP</p></>
            )}
          </div>
          <Link href="/categoriesDetails/2" class="btn_page">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCourse;
