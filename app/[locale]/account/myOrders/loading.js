"use client";
import React from 'react'
import { TailSpin } from 'react-loader-spinner'

function loading() {
  return (
    <div className="load" style={{ display:"flex"  }}>
    <TailSpin
      height={120}
      width={120}
      color="#fff"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#fff"
      strokeWidth={1}
      strokeWidthSecondary={1}
    />
  </div>
  )
}

export default loading