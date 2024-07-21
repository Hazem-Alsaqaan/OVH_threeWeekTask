import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setGenreMovies: (val: string) => void;
}
const SelectGenre = ({ setGenreMovies }: Props) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginBottom={"10px"}
      >
        Movies Genre
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setGenreMovies("nowPlaying")}>
          Now Playing
        </MenuItem>
        <MenuItem onClick={() => setGenreMovies("popular")}>Popular</MenuItem>
        <MenuItem onClick={() => setGenreMovies("topRated")}>
          Top Rated
        </MenuItem>
        <MenuItem onClick={() => setGenreMovies("upcoming")}>Upcoming</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SelectGenre;
