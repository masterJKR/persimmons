import {Link} from 'react-router-dom'

export default function SignUp(){
    return(
        <>
            <div className="input-field">
                <label>ID : </label>
                <input type="text" />
            </div>
            <div className="input-field">
                <label>PW : </label>
                <input type="password" />
            </div>
            <button>LOGIN</button>
            <Link to="/signIn">회원가입</Link>
        </>
    );
}