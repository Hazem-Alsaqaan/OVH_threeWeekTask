import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SelectGenre from "./components/SelectGenre";
import { useState } from "react";
import ListMovies from "./components/ListMovies";

function App() {
  const [genreMovies, setGenreMovies] = useState("nowPlaying");
  const [movieQuery, setMovieQuery] = useState("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar onSearch={(searchText) => setMovieQuery(searchText)} />
        </GridItem>
        <GridItem area="main" padding={"18px"}>
          <SelectGenre setGenreMovies={setGenreMovies} />
          <ListMovies
            endPoint={
              movieQuery
                ? `/search/movie?query=${movieQuery}&include_adult=false&language=en-US&page=1`
                : genreMovies === "popular"
                ? `/movie/popular?language=en-US&page=1`
                : genreMovies === "topRated"
                ? `/movie/top_rated?language=en-US&page=1`
                : genreMovies === "upcoming"
                ? `/movie/upcoming?language=en-US&page=1`
                : `/movie/now_playing?language=en-US&page=1`
            }
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
