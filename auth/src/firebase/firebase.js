
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAKmOC4OREmcVGPpGJSdz_1NOOothYoo_o",
  authDomain: "chatroom-90a90.firebaseapp.com",
  projectId: "chatroom-90a90",
  storageBucket: "chatroom-90a90.firebasestorage.app",
  messagingSenderId: "256574744135",
  appId: "1:256574744135:web:d6fe7b944cd96047a0f362",
  measurementId: "G-Y8C8R08FN1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth,app};