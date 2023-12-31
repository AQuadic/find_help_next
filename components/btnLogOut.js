"use client";
import React from 'react'
import { LogOut } from './useAPI/Auth';
import { useRecoilState } from 'recoil';
import { navState } from '@/atoms';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { signOut } from 'next-auth/react';


function btnLogOut() {
    const router = useRouter()
    const [IsUser, setIsUser] = useRecoilState(navState);
    const t = useTranslations("Account");
    
    const HandelLogOut = async () => {
     LogOut();
        signOut()
        console.log("done");
        setIsUser(false);
        Cookies.remove('token')
        Cookies.remove('phone')
        Cookies.remove('UserID')
        router.push('/signIn')
      
    };

  


       
  return (
    <button onClick={()=>{HandelLogOut()}}>{t("logout")}</button>
  )
}

export default btnLogOut