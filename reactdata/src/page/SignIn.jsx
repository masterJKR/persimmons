// SignIn.jsx

import {useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn(){
    const { signin } = useAuth();
    const nav = useNavigate();

    const [email ,setEmail ] =useState("");
    const [ pw , setPw ] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSubmit(e){
        e.preventDefault();
        if( !email || !pw ){
            alert("이메일과 비밀번호 입력");
            return;
        }
        setLoading(true);
        try{
            await signin(email, pw);
            nav("/");
        }catch(err){

        }
    }

    return(
        <div className="mx-auto mt-10 max-w-md">
            <h1>로그인</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>이메일</label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type="password"onChange={ (e) => setPw(e.target.value)}/>
                </div>
                <button>로그인</button>
            </form>
        </div>
    );
}