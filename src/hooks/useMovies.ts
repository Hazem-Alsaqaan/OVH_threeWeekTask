import ApiMoviesClient from "../services/ApiMoviesClient";
import { useQuery } from "@tanstack/react-query";


export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
export interface MoviesResponse {
    results: MovieType[];
  }

const useMovies = ( endPoint: string ) =>{
  const fetchingData = ()=>{
    return ApiMoviesClient.get<MoviesResponse>(endPoint).then((res)=>res.data.results)
  }
  return useQuery<MovieType[], Error>({
    queryKey: endPoint ? ["movies", endPoint] : ["movies"],
    queryFn: fetchingData,
    staleTime: 2 * 1000
  })
}
export default useMovies


































// const useMovies = ( endPoint: string ) => {
//     const [movies, setMovies] = useState<MovieType[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController()
//         setIsLoading(true)
//       ApiMoviesClient.get<MoviesResponse>(endPoint, {signal: controller.signal})
//         .then((res) => {
//             setIsLoading(false)
//             setMovies(res.data.results)})
//         .catch((err) => {
//             if(err instanceof CanceledError){
//                 return ;
//             }
//             setError(err.message)
//             setIsLoading(false)
//         });
//         return ()=> controller.abort()
//     }, [endPoint]);
//   return {movies, error, isLoading}
// }

// export default useMovies