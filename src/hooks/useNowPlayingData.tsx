import { useEffect, useState } from "react";
import { Movie, PaginationInfo, ResponseData } from "../services/type";
import { getNowPlaying } from "../services/nowPlaying/api";

export const useNowPlayingData = () => {
  const [nowPlaying, setnowPlaying] = useState<Movie[]>();
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    page: 1,
  });

  const fetchNowPlaying = async () => {
    try {
      const response: ResponseData | undefined = await getNowPlaying(
        paginationInfo.page
      );
      console.log({ response });
      setnowPlaying(response?.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log({ nowPlaying });

  useEffect(() => {
    fetchNowPlaying();
  }, [paginationInfo]);

  return { nowPlaying, paginationInfo, setPaginationInfo };
};
