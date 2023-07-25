import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={20} >
      <Image objectFit="cover" height={80} src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
