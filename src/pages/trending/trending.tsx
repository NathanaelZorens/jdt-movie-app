import PaginationButtons from "../../components/button/PaginationButtons";
import Card from "../../components/card/Card";
import PageTitle from "../../components/pageTitle/PageTitle";
import { useTrendingData } from "../../hooks/useTrendingData";
import { Movie } from "../../services/type";

const Trending: React.FC = () => {
  const { trending, paginationInfo, setPaginationInfo } = useTrendingData();

  console.log(trending);


  return (
    <div className="flex flex-col">
      <section className="flex flex-col m-2" >
        
        <PageTitle title="Trending" />

        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center">
        {trending?.map((item:Movie)=>(
          <Card key={item.id} data={item}/>
        ))}
        </div>

        <PaginationButtons paginationInfo={paginationInfo} setPaginationInfo={setPaginationInfo} />
      </section>
    </div>
  );
};

export default Trending;
