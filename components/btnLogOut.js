import React from 'react'
import { LogOut } from './useAPI/Auth';
import { useRecoilState } from 'recoil';
import { navState } from '@/atoms';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

function btnLogOut() {
    const router = useRouter()
    const [IsUser, setIsUser] = useRecoilState(navState);
    
    const HandelLogOut = async () => {
      const UserLogOut = await LogOut();
      if (UserLogOut.message === "Logged out Successfully") {
        console.log("done");
        setIsUser(false);
        Cookies.remove('token')
        Cookies.remove('phone')
        router.push('/signIn')
      }
    };

  


       
  return (
    <button onClick={()=>{HandelLogOut()}}>Log out</button>
  )
}

export default btnLogOut