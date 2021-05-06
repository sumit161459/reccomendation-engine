import React,{useState,useEffect} from 'react';
import './App.css';
import Pictures from './Pictures';
import axios from './axios';
import request from './request';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Request = await axios.get(request.fetchNetflixOriginals);
      setMovies(Request.data.results);
      return Request;
    }
    fetchData();
  }, []);
  console.log(movies);
  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>Please choose any 5 or more movies</h2>
      <div className="aa" >
        <Pictures movies={movies}/>
      </div>
    </div>
  )
}

export default App;
