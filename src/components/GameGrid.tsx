import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={5}
      >
        {games.map((game) => (
          <GameCards game={game} key={game.id}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
