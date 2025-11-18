//  AuthContext.jsx

// 로그인 여부는 리액트 프로젝트 전체에서 필요로 하기에 state가 아닌
// 전역으로 관리하기 위해  이 파일이 필요하다.

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword ,signOut
 } from "firebase/auth";

 