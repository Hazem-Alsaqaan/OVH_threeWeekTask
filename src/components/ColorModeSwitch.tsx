import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme={"orange"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text
        whiteSpace="nowrap"
        fontSize={{ base: "14px", md: "16px", lg: "larger" }}
      >
        {colorMode === "dark" ? "light mode" : "dark mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
