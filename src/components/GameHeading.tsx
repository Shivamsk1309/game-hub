import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } GAMES`;
  return (
    <Heading as="h1" my={5}>
      
      {gameQuery ? heading.toUpperCase() : "GAMES"}
    </Heading>
  );
};

export default GameHeading;
