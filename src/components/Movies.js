import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    <div>
      {movies.map(movie => {
        return (
        <div key={movie.title}>
          {movie.title}-{movie.time}
          <ul>Genre</ul>
          {movie.genres.map(genre =>{
            return(
              <li key={genre}>{genre}</li>
            )
          })}
        </div>
        )
      })}
    </div>
  </div>
  )
}

export default Movies;
