import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

function InitFirebase(): unknown {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_APIKEY,
    authDomain: import.meta.env.VITE_FB_AUTH,
    projectId: import.meta.env.VITE_FB_PROJECTID,
    storageBucket: import.meta.env.VITE_FB_STOREBK,
    messagingSenderId: import.meta.env.VITE_FB_MSGSENDERID,
    appId: import.meta.env.VITE_FB_APPID,
    measurementId: import.meta.env.VITE_FB_MEASUREMENT,
  };

  console.log("firebase config ====<> ", firebaseConfig);

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return [app, analytics];
}

export {
  InitFirebase
};