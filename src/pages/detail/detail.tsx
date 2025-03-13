import React from 'react'
import { Movie } from '../../services/type';

interface DetailProps{
  data: Movie;
}

const Detail:React.FC<DetailProps> = ({data}) => {
  const {original_title, original_name, poster_path} = data;
  return (
    <div>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title ?? original_name}
          className="w-[100px]"
        />
        <h1 className='text-2xl'>{original_name??original_title}</h1>
        
    </div>
  )
}

export default Detail
