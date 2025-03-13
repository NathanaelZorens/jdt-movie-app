import { useState } from "react"
import { DetailData } from "../services/type"
import { getDetail } from "../services/detail/api";

export const useDetailData=()=>{

    const[currentDetail, setCurrentDetail]=useState<DetailData[]>();

    const fetchDetail=async()=>{
        try {
            
        } catch (error) {
            
        }
    }

}