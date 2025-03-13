import axiosWithConfig from "../api";
import { ResponseData } from "../type";

export const getNowPlaying = async (page:number) => {
  try {
    const response = await axiosWithConfig.get(
      `/movie/now_playing?language=en-US&page=${page}`
    );
    return response.data as ResponseData | undefined
  } catch (error) {

  }
};
