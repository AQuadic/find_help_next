"use client"
import React, { useEffect } from "react";
import "firebase/messaging";
import { firebaseCloudMessaging } from "/utils/firebase";
import { useRouter } from "next/navigation";
import { getMessaging, onMessage } from "firebase/messaging";
import { useRecoilState } from "recoil";
import { MessagingFir, tokenNotifiable } from "@/atoms";



function PushNotificationLayout({ children }) {
  const [tokenNOTF, setTokenNOTF] = useRecoilState(tokenNotifiable);
  const [messagingFire, setMessagingFire] = useRecoilState(MessagingFir);

  const router = useRouter();
  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
       // console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          setTokenNOTF(token)
         
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (url) => {
    router.push(url);
  };

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = getMessaging();
    setMessagingFire(messaging)
    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // ...
      });
  }

  return (
    <>
      {children}
    </>
  );
}

export default PushNotificationLayout;