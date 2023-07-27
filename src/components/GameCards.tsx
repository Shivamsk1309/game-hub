import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  flexbox,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getOptimisedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image
        objectFit="cover"
        height={80}
        src={getOptimisedImageUrl(game.background_image)}
      ></Image>
      <CardBody>
        <HStack mb={3} justifyContent={"space-between"}>
          <PlatformIconList 
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
