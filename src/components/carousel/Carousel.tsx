import React from "react";
import { Movie } from "../../services/type";
import MiniCard from "../card/MiniCard";

interface CarouselProps {
  title: string;
  path: string;
  data: Movie[] | undefined;
}

const Carousel: React.FC<CarouselProps> = ({ data, title, path }) => {
  return (
    <div className="flex flex-col  md:max-w-[1800px] mx-auto">
      <h2 className="w-64 text-4xl font-medium text-center mx-auto my-2 font-rationale text-amber-300 bg-zinc-900 rounded-2xl hover:text-purple-400">
        <a href={path}> {title}</a>
      </h2>

      <div className="flex flex-row border border-gray-100 border-t-4 border-x-4 overflow-x-scroll p-3 rounded-t-3xl mb-5 max-w-[400px] md:max-w-[1780px] mx-auto">
        {data?.map((item: Movie) => (
          <MiniCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
