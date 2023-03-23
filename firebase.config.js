// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCiFtDK0t2L59qm45nDvLeKPjpAV-pt25g",
  authDomain: "research-management-9cc2c.firebaseapp.com",
  projectId: "research-management-9cc2c",
  storageBucket: "research-management-9cc2c.appspot.com",
  messagingSenderId: "169720504250",
  appId: "1:169720504250:web:1142f92c25541e9a72c783",
  measurementId: "G-779FFWK1ZG",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

// let analytics;
// // const analytics = getAnalytics(app);

// if (getAnalytics.isSupported()) {
//     analytics = getAnalytics(firebase);
//   // your analytics code here
// } else {
//   console.warn("Firebase Analytics is not supported in this environment.");
// }

// export { firebase, analytics };
export { firebase, auth };
