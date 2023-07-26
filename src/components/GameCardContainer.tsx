import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props{
    children : ReactNode
}

const GameCardContainer = ({children}:Props) => {
  return <Box overflow="hidden" borderRadius={20} >{children}</Box>;
}

export default GameCardContainer