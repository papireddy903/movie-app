import React from "react"
import Carousel from "../components/Carousel"
import MoviesGrid from "../components/MoviesGrid"
import axios from "axios"
import { useState, useEffect } from "react"

const HomePage = () => {
  const genres = ["horror", "romance", "comedy", "history","thriller"]
  const [movies, setMovies] = useState([])


  const fetchMovies = async (genre) => {
    try {
        const response = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=a89f1437")
        console.log(response)
        return response.data.slice(0, 5);
    }
    catch(error){
        console.error(error)
        return []
    }
  }

  useEffect(() => {
    const fetchAllMovies = async () => {
        const moviesData = {}
        for (const genre of genres){
            moviesData[genre] = await fetchMovies(genre)
            console.log("use effect")
        }
        setMovies(moviesData)

        fetchAllMovies()
    }
  }, [])

  return (
    <div>
      <Carousel />

      <div className="flex flex-col items-start justify-between">
        {genres.map((genre, index) => (
          <div key={index}>
            <h2 className="my-2 text-2xl font-bold">{genre} movies</h2>
            <MoviesGrid movies={movies[genre] || [] }/>
          </div>
        ))}
      </div>

    </div>
  )

}

export default HomePage;
