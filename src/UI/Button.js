import React,{useState,useEffect} from 'react';
import './Button.css';

function Button({disable}) {
        return (
        <div>
            <button className="button" disabled={disable} onClick={()=>alert('working')}>Recommend</button>
        </div>
    )
}

export default Button
