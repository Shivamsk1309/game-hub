import { HStack, Image, Text, Textarea } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="80px" src={logo} />
      

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
