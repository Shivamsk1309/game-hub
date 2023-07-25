import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6,7,8,9,10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={5}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {games.map((game) => (
          <GameCards game={game} key={game.id}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
