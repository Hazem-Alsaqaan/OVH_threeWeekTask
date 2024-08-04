import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logoImage from "../assets/movie_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (value: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="18px">
      <Box>
        <Image
          src={logoImage}
          boxSize={{
            base: "40px",
            md: "60px",
          }}
          alt=""
        />
        <Text
          color={"orange"}
          fontSize={{
            base: "10px",
            md: "14px",
          }}
          fontWeight={"800"}
        >
          Watched
        </Text>
      </Box>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
