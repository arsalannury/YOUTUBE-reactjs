import axios from "axios";
import { useInfiniteQuery } from "react-query";


const fetchData = ({pageParam}) => {
    return axios.get(`http://localhost:4000/images?_limit=2&_page=${pageParam}`)
}

export const useInfiniteData = () => {
    return useInfiniteQuery("consoles",fetchData,{
        getNextPageParam: (_lastPage,pages) => { 
         if(pages.length < 4) {
            return pages.length + 1;
         }else {
            return undefined;
         }
        }
    })
}