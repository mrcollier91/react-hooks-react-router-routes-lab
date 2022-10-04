import React from "react";
import { directors } from "../data";



function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
       {directors.map(director =>{
         return(
           <div key={director.name}>
             {director.name}
             <ul>Movies</ul>
             {director.movies.map(movie =>{
               return(
                 <li key={movie}>{movie}</li>
               )
             })}
           </div>
         )
       })}
      </div>
    </div>
  )
}

export default Directors;
