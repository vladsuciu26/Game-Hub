import { List, ListItem } from "@chakra-ui/react/list";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { useState } from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const [clickedGenreId, setClickedGenreId] = useState<number | null>(null);

  if (error) return null;
  if (isLoading) return <GenreListSkeleton />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => {
                setClickedGenreId(genre.id);
                onSelectGenre(genre);
              }}
              fontSize="lg"
              variant="link"
              style={{
                textDecoration: "none",
                color: clickedGenreId === genre.id ? "#f2400a" : "white",
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
