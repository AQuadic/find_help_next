"use client";
import { getHomePage } from '@/components/useAPI/GetUser';
import React, { useEffect, useState } from 'react'

function page({params}) {
    const [about, setAbout] = useState();
    
    useEffect(() => {
      FetchDataOFData()
     
      }, []);
      const FetchDataOFData = async () => {
        const HomePage = await getHomePage();
        if (!HomePage) console.log(HomePage?.message);
        setAbout(HomePage.pages.filter((item)=> ((item.title.en).replace(/\s/g, "")) === params.id)[0]);
      };
    console.log(about);
    console.log('====================================');
    console.log(params);
    console.log('====================================');
    
    
  return (
    <>
   <div className= "container m90">
   <div className='pageAbout'>
        <h2>{about?.title?.en}</h2>
        <div className='decAbout' dangerouslySetInnerHTML={{__html:about?.description?.en}}>
        {/* <p dangerouslySetInnerHTML={createMarkup(data)} /> */}
        </div>
    </div>

   </div>
    </>
  )
}

export default page