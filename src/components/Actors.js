import React from "react";
import { actors } from "../data";

console.log(actors)

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map(actor=>{
          return(
            <div key={actor.name}>
              {actor.name}
              <ul>movies</ul>
              {actor.movies.map(movie=>{
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

export default Actors;
