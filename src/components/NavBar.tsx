import { HStack, Image, Text, Textarea } from "@chakra-ui/react";
import logo from "../assets/icons8-chakra-ui.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo} />

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
