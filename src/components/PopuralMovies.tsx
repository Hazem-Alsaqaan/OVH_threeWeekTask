import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MoviesSkeleton from "./MoviesSkeleton";
import SingleCard from "./SingleCard";

const PopuralMovies = () => {
  const { movies, error, isLoading } = useMovies(
    `/popular?language=en-US&page=1`
  );
  const skeleton = movies.map((_, index) => index);
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

export default PopuralMovies;
