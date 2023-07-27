import { HStack, Image, Text, Textarea } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image boxSize="80px" src={logo} />
      <SearchInput></SearchInput>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
