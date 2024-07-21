import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import SelectGenre from "./components/SelectGenre";
import NowPlayingMovies from "./components/NowPlayingMovies";
import { useState } from "react";
import PopuralMovies from "./components/PopuralMovies";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";

function App() {
  const [genreMovies, setGenreMovies] = useState("nowPlaying");
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <GridItem area="main" padding={"18px"}>
          <SelectGenre setGenreMovies={setGenreMovies} />
          {genreMovies === "popular" ? (
            <PopuralMovies />
          ) : genreMovies === "topRated" ? (
            <TopRated />
          ) : genreMovies === "upcoming" ? (
            <Upcoming />
          ) : (
            <NowPlayingMovies />
          )}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
