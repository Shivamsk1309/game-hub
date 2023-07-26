import { Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenreList = () => {
    const {data} = useGenres(); 
  return (
    <>
      <ul>
        {data.map((genres) => (
          <li key={genres.id}>{genres.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
