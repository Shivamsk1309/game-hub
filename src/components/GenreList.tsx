import React from "react";

import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      <ul>
        {genres.map((genres) => (
          <li key={genres.id}>{genres.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;