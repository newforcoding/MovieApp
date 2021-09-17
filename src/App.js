import React,{useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import MovieCard from './components/MovieCard'

function App() {
  const [movie,setMovies] = useState([])

  useEffect(()=>{
    fetch('/movies/').then((res)=>res.json())
    .then((jsonData)=>{
      console.log('json',jsonData)
      setMovies(jsonData.movieList)})
  },[])
  return (
    <div className='movie-container'>
     <Header/>
      {
       movie.map((list,id)=>{
        return <MovieCard key={id}{...list}/>
      })
     }
     </div>
  )
}

export default App
