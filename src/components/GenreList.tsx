import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

import getOptimisedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre : Genre | null;
}

const GenreList = ({ onSelectGenre,selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;
  return (
    <>
      <List paddingY="20px" overflow="hidden">
        {data.map((genres) => (
          <ListItem key={genres.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                objectFit="cover"
                boxSize="32px"
                overflow="hidden"
                src={getOptimisedImageUrl(genres.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genres)}
                  fontWeight={genres.id === selectedGenre?.id ? "bold" : "normal"}
                colorScheme={genres.id === selectedGenre?.id ? 'green' : ""}
                fontSize="md"
                variant="link"
                overflow="hidden"
              >
                {genres.name === "Massively Multiplayer"
                  ? "Multiplayer"
                  : genres.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
