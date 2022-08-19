import { MoviesInstance } from "../../axios/MoviesInstance";
import { useQuery } from "react-query";

const fetchMovies = () => {
  return MoviesInstance.get("/movie.json");
};

const useMoviesData = (onSuccess, onError) => {
  return useQuery("movies-data", fetchMovies, {
    staleTime: 20000,
    refetchOnWindowFocus: false,
    onSuccess,
    onError,
  });
};

export default useMoviesData;
