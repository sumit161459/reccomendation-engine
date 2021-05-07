import React, { useState } from "react";
import "./Picture.css";

function Picture({
  src,
  alt,
  movie,
  refmovies,
  setRefMovies,
  setDisable,
  setCount
}) {
  // useEffect(() => {
  //   console.log("useeffect")
  //   console.log(refmovies.length);
  //   if(refmovies.length>=5){
  //     setDisable(false);
  //     console.log('yes');
  //     }
  //     else{
  //         setDisable(true);
  //     }
  // }, [refmovies,setDisable])

  const [select, setSelect] = useState(false);
  const onClickHandler = (key) => {
    let newrefmovies=[...refmovies]
    if (newrefmovies.includes(movie.id)) {
      const index = newrefmovies.indexOf(movie.id);
      newrefmovies.splice(index, 1);
    } else {
      newrefmovies=[...refmovies,movie.id]
    }
    setRefMovies(newrefmovies);

    if (newrefmovies.length >= 5) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setSelect((prev) => !prev);
  };
  

  return (
    <div className="picturea" onClick={() => onClickHandler(movie.id)}>
      <div
        className="overlay"
        style={{ visibility: `${select ? "visible" : "hidden"}` }}
      >
        <svg
          width="26"
          height="26"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
        </svg>
      </div>
      <img className="pica" src={src} alt={alt} />
    </div>
  );
}

export default Picture;
