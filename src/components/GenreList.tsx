import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import getOptimisedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      <List paddingY="20px" >
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
              <Text fontSize="lg">{genres.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
