import { useEffect, useState } from "react";
import { Movie, PaginationInfo, ResponseData } from "../services/type";
import { getTrending } from "../services/home";

export const useTrendingData = () => {
  const [trending, setTrending] = useState<Movie[]>();
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    page: 1,
  });

  const fetchTrending = async () => {
    try {
      const response: ResponseData | undefined = await getTrending(
        paginationInfo.page
      );
      console.log({ response });
      setTrending(response?.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log({ trending });

  useEffect(() => {
    fetchTrending();
  }, [paginationInfo]);

  return { trending, paginationInfo, setPaginationInfo };
};
