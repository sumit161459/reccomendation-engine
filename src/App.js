import React,{useState,useEffect} from 'react';
import './App.css';
import Pictures from './Pictures';
import axios from './axios';
import request from './request';
import Button from './UI/Button';


function App() {
  const [movies, setMovies] = useState([]);
  const [refmovies,setRefMovies]=useState([]);
  const [disable,setDisable]=useState(true);
  const [loading, setLoading] = useState(true);
  const [count,setCount]=useState(0);

  useEffect(() => {
    async function fetchData() {
      const Request = await axios.get(request.fetchNetflixOriginals);
      setMovies(Request.data.results);
      setLoading(false);
      return Request;
    }
    fetchData();
  }, [refmovies]);
  // console.log(movies);
  console.log(refmovies)

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>Please choose any 5 or more movies</h2>
      <div className="aa" >
        <Pictures setDisable={setDisable} loading={loading} movies={movies} refmovies={refmovies} setRefMovies={setRefMovies} disable={disable} setCount={setCount}/>
      </div>
      <Button disable={disable} count={count}></Button>
    </div>
  )
}

export default App;
