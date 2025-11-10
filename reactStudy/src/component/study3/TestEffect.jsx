// TestEffect.jsx
import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react';

function TestEffect(){
    const [count , setCount] = useState(0);
    // useEffect(
    //     () => { 
    //         // document.body.style.backgroundColor="skyblue";
    //         // document.title= `카운트:${count}`;

    //         // return ( ) => {
    //         //     document.body.style.background="white";
    //         // }
    //         if( count >= 5)
    //             document.body.style.background = "violet";
    //         else
    //             document.body.style.background = "gray";
    //     } , [count]
    // );

    const [showModal , setShowModal] = useState(false);

    useEffect(  // 컴포넌트 렌더링 될때  모달창 띄우기 
        () => {setShowModal(true); }
    ,[]);
    return(
        <>
            <Link to="/" className='home bg'>HOME</Link>
            {/* <button onClick={ () => setCount( count + 1) }>
                count증가
            </button>
            <input type="text"/> */}
            {
                showModal && (
                    <Modal onClose={ () => setShowModal(false) } />
                )
            }
        </>
    );
}

function Modal( {onClose} ){
    return(
        <div className='fixed bg-black/50 flex justify-center items-center'>
            <div className='bg-white px-10 py-5 rounded-lg shadow-lg text-center'>
                <h2 className='text-xl mb-4'>모달창이지</h2>
                <p className='text-gray-500 mb-4'>
                    모달창은 컴포넌트가 처음 연결될때 나옵니다.
                    모달창 만들면 유용한 점도 있으니 참고하세요.
                    알았죠? 알았으면 대답좀.....
                </p>
                <button onClick={onClose} className='bg-red-400 hover:bg-red-800 text-white px-4 py-2 rounded-md'>
                    닫기
                </button>
            </div>
        </div>
    );
}


export default TestEffect;