import React,{useState,useEffect} from 'react';
import './Picture.css';

function Picture({key,src,alt,movie,refmovies,setRefMovies,disable,setDisable}) {
  
    // useEffect(() => {
    //     console.log('yes');
    //     console.log(refmovies.length);
    //     if(refmovies.length>=5){
    //         setDisable(false);
    //     }
    //     else{
    //         setDisable(true);
    //     }
    // }, [refmovies,setDisable])
    

  const [select,setSelect]=useState(false)
  const onClickHandler=(key)=>{
    if(refmovies.includes(movie.id)){
      const index=refmovies.indexOf(movie.id);
      refmovies.splice(index, 1);
      setRefMovies(refmovies);
    }
    else{
      refmovies.push(movie.id);
      setRefMovies(refmovies);
    }
    if(refmovies.length>=5){
      setDisable(false);
  }
  else{
      setDisable(true);
  }

    setSelect(prev=>!prev);
  }
  
  console.log(disable);
  console.log(refmovies);
  
  return (
    <div key={key} className='picturea' onClick={()=>onClickHandler(key)}>
      <div className="overlay" style={{visibility:`${select?"visible":"hidden"}`}}>
      <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg>
      </div>
      <img className="pica" src={src} alt={alt}/>
    </div>
  )
}

export default Picture