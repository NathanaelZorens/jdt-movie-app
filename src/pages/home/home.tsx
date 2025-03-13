import { useNowPlayingData } from "../../hooks/useNowPlayingData";
import { useTrendingData } from "../../hooks/useTrendingData";
import Banner from "../../assets/popcorn-7025931_1920.jpg";
import Carousel from "../../components/carousel/Carousel";

const Home: React.FC = () => {
  const { trending } = useTrendingData();
  const { nowPlaying } = useNowPlayingData();

  console.log(trending);



  return (
    <div className="flex flex-col">
      <section className="flex flex-col justify-around my-5">
        <div className="flex flex-row h-[200px] md:h-[400px] grow bg-zinc-800 w-full mx-auto mb-5 justify-center relative items-center">
          <img src={Banner} alt="Movie App" className="h-full w-full object-cover object-[25%_38%]" />
          <h1 className="text-4xl font-light text-center absolute justify-center my-auto w-full ">Discover your Binge!</h1>
        </div>

        <Carousel title="Trending" path="/trending" data={trending} />

        <Carousel title="Now Playing" path="/now_playing" data={nowPlaying} />


        
      </section>
    </div>
  );
};

export default Home;
