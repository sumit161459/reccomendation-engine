import React,{useState} from 'react';
import './Picture.css';

function Picture({key,src,alt}) {
  const [select,setSelect]=useState(false)
  return (
    <div key={key} className={select?'picturea':'pictureb'} onClick={()=>setSelect(prev=>!prev)}>
        <img className={!select?'pica':'picb'} src={src} alt={alt}/>
    </div>
  )
}

export default Picture