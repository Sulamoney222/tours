import React from 'react'

const Movie = ({movie1}) => {
  return (
    <div>
      <div className='movie'>
        <div>
          <p>{movie1.Year}</p>
          <img src={movie1.Poster}/>
        </div>

        <div>
          <span>{movie1.Type}</span>
        </div>
      </div>
    </div>
  )
}

export default Movie
