import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logoImage from "../assets/movie_logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="18px">
      <Box>
        <Image src={logoImage} boxSize={"60px"} alt="" />
        <Text color={"orange"} fontSize={"14px"} fontWeight={"800"}>
          Watched
        </Text>
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
