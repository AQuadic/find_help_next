import {initializeApp} from "firebase/app";
import localforage from "localforage";
import {getMessaging, getToken, onMessage} from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import Cookies from "js-cookie";
const firebaseConfig = {
  apiKey: "AIzaSyCF155mNBMIZOhyAerxcg4aouXHupmqTpU",
  authDomain: "findhelp-9f012.firebaseapp.com",
  databaseURL: "https://findhelp-9f012.firebaseio.com",
  projectId: "findhelp-9f012",
  storageBucket: "findhelp-9f012.appspot.com",
  messagingSenderId: "1019650754389",
  appId: "1:1019650754389:web:c1526ded82d274d395d1dc",
  measurementId: "G-QK2Q19BWZN"
};
const app = initializeApp(firebaseConfig);
export const authenti = getAuth(app);
export const db = getFirestore(app)
export const storage  = getStorage(app)
const messaging = getMessaging(app);
export const requestPermission = () => {
    console.log("Req user peimitions...");
    Notification.requestPermission().then(async (permission) => {
      if (permission === "granted") {
        console.log("Notification User Permission Granted");
        try {
          const currentToken = await getToken(messaging, {
            vapidKey: "BJepALF0a95YllxgoWS5qnbdvwlURFKW398sHWJQ8WGZ6xFIFA7Ore8aE0WTgHex-iOWzk4JSM541d1se1p_YNQ",
          });
          if (currentToken) {
            Cookies.set('tokenFir',currentToken)
            console.log("client Token ", currentToken);
          } else {
            console.log("Faild to Generate the app req token.");
          }
        } catch (err) {
          console.log("an error occure when req to receive the token", err);
        }
      } else {
        console.log("User Permission Denied");
      }
    });
  };
  requestPermission();
  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });