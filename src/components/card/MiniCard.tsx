import React from "react";
import { Movie } from "../../services/type";

interface CardProps {
  data: Movie;
}

const MiniCard: React.FC<CardProps> = ({ data }) => {
  const {
    title,
    original_title,
    name,
    original_name,
    release_date,
    first_air_date,
    overview,
    poster_path,
  } = data;
  return (
    <div className="flex flex-col border-3 border-amber-300 m-2 p-2 gap-2 bg-gray-950 rounded-2xl">
      <div className="flex flex-col m-auto w-[200px] group relative">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title ?? name}
          className="w-[600px] rounded-2xl m-auto z-10"
        />

        <div className="hidden group-hover:flex z-10 bg-black opacity-50 overflow-visible absolute w-full">
          <h1 className="text-md text-clip text-center font-medium mx-auto my-1 hover:text-amber-300 hover:underline underline-offset-4">
            <a href="/#">{title ?? name}</a>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default MiniCard;
