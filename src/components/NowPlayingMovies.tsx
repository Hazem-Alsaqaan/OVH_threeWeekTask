import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import SingleCard from "./SingleCard";
import MoviesSkeleton from "./MoviesSkeleton";

const NowPlayingMovies = () => {
  const { movies, error, isLoading } = useMovies(
    `/now_playing?language=en-US&page=1`
  );
  const skeleton = movies.map((_, index) => index);
  // const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={"16px"}>
        {isLoading
          ? skeleton.map((itemSkeleton) => (
              <MoviesSkeleton key={itemSkeleton} />
            ))
          : movies.map((movie) => <SingleCard key={movie.id} movie={movie} />)}
      </SimpleGrid>
    </>
  );
};

export default NowPlayingMovies;
