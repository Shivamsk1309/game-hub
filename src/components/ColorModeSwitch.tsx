import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
      colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{ colorMode==='dark' ? "Dark Mode" : "Light Mode" }</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
