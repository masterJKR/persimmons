// ProuductForm.jsx
import { useState } from "react";

export default function ProuductForm( {onAdd} ){  // ( props ) -> props.onAdd
    const [ name , setName ] =useState("");
    const [ price , setPrice] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        if( !name.trim() || !price ) return; // 상품명과 가격이 입력되지않았다면 실행노
        onAdd( { name : name.trim() , price : price } );
        setName("");
        setPrice(0);
    };
    return(
        <>
            <form onSubmit={submit}> 
                <input type="text" 
                    placeholder="상품명" 
                    onChange={ (e) => setName(e.target.value) }
                    value={name}
                />
                <input type="number" 
                    placeholder="상품가격"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <button>장바구니</button>
            </form>
        </>
    );
}