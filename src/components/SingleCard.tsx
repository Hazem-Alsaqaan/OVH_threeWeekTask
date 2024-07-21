import {
  Badge,
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { MovieType } from "../hooks/useMovies";
import CropImage from "../services/CropImage";
import { useState } from "react";

interface Props {
  movie: MovieType;
}
const SingleCard = ({ movie }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const overviewText = isExpand
    ? movie.overview
    : movie.overview.slice(0, 70) + "...";
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={CropImage(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)}
        alt=""
      />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <Text>{overviewText}</Text>
        <Button
          fontSize={"12px"}
          padding={"8px"}
          height={"24px"}
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand ? "less.." : "more.."}
        </Button>
        <HStack justifyContent={"space-between"} marginY={"10px"}>
          <Badge colorScheme={"red"}>Rating: {movie.vote_average}</Badge>
          <Badge colorScheme={"blue"}>Count Rate: {movie.vote_count}</Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default SingleCard;
