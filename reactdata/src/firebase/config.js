// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import {getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAGETkFZhlUacxFW-E5gHhbcc48VXzF4M",
  authDomain: "reactfirebase-4f74b.firebaseapp.com",
  projectId: "reactfirebase-4f74b",
  storageBucket: "reactfirebase-4f74b.firebasestorage.app",
  messagingSenderId: "975514847826",
  appId: "1:975514847826:web:0472e4bfa6edc04b6bad8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  // 파이어스토어데이터베이스사용하기위해

export const auth = getAuth( app );  // 파이어베이스 인증기능 사용위해

// 로그인유지를 위해
setPersistence( auth , browserLocalPersistence).catch(console.error);

//  browserLocalPersistence  - 브라우저 종료 해도 유지 