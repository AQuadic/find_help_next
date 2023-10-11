"use client";
import { getLocal } from '@/components/useAPI/Auth';
import { getHomePage } from '@/components/useAPI/GetUser';
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react'

function page({params}) {
    const [about, setAbout] = useState();
    const locale = useLocale()
    useEffect(() => {
      FetchDataOFData()
     
      }, []);
      const FetchDataOFData = async () => {
        const HomePage = await getHomePage();
        if (!HomePage) console.log(HomePage?.message);
        setAbout(HomePage.pages.filter((item)=> ((getLocal('en',item.title) ).replace(/\s/g, "")) === params.id)[0]);
      };
    console.log(about);
    console.log('====================================');
    console.log(params);
    console.log('====================================');
    
    
  return (
    <>
   <div className= "container m90">
   <div className='pageAbout'>
        <h2>{getLocal(locale,about?.title)}</h2>
        <div className='decAbout' dangerouslySetInnerHTML={{__html:getLocal(locale, about?.description)}}>
        {/* <p dangerouslySetInnerHTML={createMarkup(data)} /> */}
        </div>
    </div>

   </div>
    </>
  )
}

export default page