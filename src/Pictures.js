import React from "react";
import Picture from "./Picture";
import "./Pictures.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Pictures({
  loading,
  movies,
  refmovies,
  setRefMovies,
  disable,
  setDisable,
}) {
  return (
    <>
      {loading ? (
        <div>
          <div className="loadingio-spinner-rolling-etnagcnond8">
            <div className="ldio-axfrklxfhau">
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="boxx">
          {movies.map((movie) => (
            <Picture
              key={movie.id}
              src={`${baseImgUrl}${movie.poster_path}`}
              alt={movie.name}
              movie={movie}
              refmovies={refmovies}
              setRefMovies={setRefMovies}
              disable={disable}
              setDisable={setDisable}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Pictures;
