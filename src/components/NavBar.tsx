import { HStack, Image, Text, Textarea } from '@chakra-ui/react'
import logo from '../assets/icons8-chakra-ui.svg'


const NavBar = () => {
  return (
    <HStack>
        <Image boxSize='60px' src={logo}/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
