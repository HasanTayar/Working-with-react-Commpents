import { useState } from 'react';
import './counter.css'

function changeColor({cnt}){
    if(cnt == 0 ){
        return (
            <div className="normal">
                {cnt}
            </div>
        )
    }else if(cnt > 0){
        return (
            <div className="plus">
                {cnt}
            </div>
        )
    }else if(cnt < 0){
        return (
            <div className="minus">
                {cnt}
            </div>
        )
    }
}

export default function Counter(){
    const [cnt , UpdateCnt] = useState(0);
    return(
        <div class="card">
            <div class="container">
                <h4><b>Your Current Count is:</b></h4>
                <p>{changeColor({cnt})}</p>
                <p>
                    <button onClick={() => {if(cnt <= 9)UpdateCnt(cnt + 1)}}>+</button>
                    <button onClick={() => {if(cnt >= -9)UpdateCnt(cnt - 1)}}>-</button>
                </p>
            </div>
        </div>
    )
}
    