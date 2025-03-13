import React from "react";
import { Movie } from "../../services/type";

interface CardProps {
  data: Movie;
}

const Card: React.FC<CardProps> = ({ data }) => {
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
    <div className="flex flex-row h-64 w-48 md:w-[400px] border-3 border-amber-300 m-2 p-2 gap-2 bg-gray-950 rounded-2xl">
      <div className="flex flex-col m-auto z-0">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title ?? name}
          className="w-32 md:w-50 rounded-2xl m-auto"
        />
        <h1 className="flex md:hidden text-md text-clip text-center font-medium mx-auto my-1 hover:text-amber-300 hover:underline underline-offset-4">
          <a href="/#">{title ?? name}</a>
        </h1>
      </div>

      <div className="hidden md:flex flex-col w-full  border-gray-200 p-2 rounded-2xl ">
        <h1 className="text-lg text-clip text-center font-bold m-2 hover:text-amber-300 hover:underline underline-offset-4">
          <a href="/#">{title ?? name}</a>
        </h1>

        <div className="flex flex-row text-sm font-light">
          <ul className="w-24">
          <li className="">{original_name ? "Original Name:": "Original Title:"}</li>

            <li>
              {first_air_date ? (
                <li>First Air Date:</li>
              ) : (
                <li>Release Date:</li>
              )}
            </li>
          </ul>
          <ul className="w-24 truncate">
            <li>{original_title ?? original_name}</li>
            <li>{release_date ?? first_air_date}</li>
          </ul>
        </div>

        <div className="group max-h-12 z-50 my-2 ">
          <div className="bg-amber-200 font-semibold text-sm text-black rounded-lg group-hover:rounded-b-none text-center py-0.5">Story</div>
          <p className="w-full hidden group-hover:flex text-sm font-light overflow-visible text-ellipsis border border-amber-200 bg-black h-fit rounded-b-lg p-1">
            {overview}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
