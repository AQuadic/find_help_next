import {initializeApp} from "firebase/app";

import { getAuth } from "firebase/auth";


        // Initialize the Firebase app with the credentials
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
       export const auth = getAuth(app);

     
