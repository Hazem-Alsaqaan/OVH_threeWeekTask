import { useEffect, useState } from "react";
import ApiMoviesClient from "../services/ApiMoviesClient";
import { CanceledError } from "axios";



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
  interface MoviesResponse {
    results: MovieType[];
  }

const useMovies = ( endPoint: string ) => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
      ApiMoviesClient.get<MoviesResponse>(endPoint, {signal: controller.signal})
        .then((res) => {
            setIsLoading(false)
            setMovies(res.data.results)})
        .catch((err) => {
            if(err instanceof CanceledError){
                return ;
            }
            setError(err.message)
            setIsLoading(false)
        });
        return ()=> controller.abort()
    }, [endPoint]);
  return {movies, error, isLoading}
}

export default useMovies