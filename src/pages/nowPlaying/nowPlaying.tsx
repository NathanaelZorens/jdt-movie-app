import PaginationButtons from "../../components/button/PaginationButtons";
import Card from "../../components/card/Card";
import PageTitle from "../../components/pageTitle/PageTitle";
import { useNowPlayingData } from "../../hooks/useNowPlayingData";
import { Movie } from "../../services/type";

const NowPlaying: React.FC = () => {
  const { nowPlaying, paginationInfo, setPaginationInfo } = useNowPlayingData();

  console.log(nowPlaying);



  return (
    <div className="flex flex-col">
      <section className="flex flex-col m-2" >
        <PageTitle title="Now Playing" />

        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center">
        {nowPlaying?.map((item:Movie)=>(
          <Card key={item.id} data={item}/>
        ))}
        </div>

        <PaginationButtons paginationInfo={paginationInfo} setPaginationInfo={setPaginationInfo} />
      </section>
    </div>
  );
};

export default NowPlaying;
