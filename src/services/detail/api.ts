import axiosWithConfig from "../api";
import { ResponseData } from "../type";

export const getDetail = async (type:string,movieId:number) => {
  try {
    const response = await axiosWithConfig.get(
      `${type}/${movieId}`
    );
    return response.data as ResponseData | undefined
  } catch (error) {

  }
};
