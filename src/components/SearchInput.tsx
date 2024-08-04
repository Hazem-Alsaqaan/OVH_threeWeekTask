import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (value: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const refSearch = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (refSearch.current) {
          onSearch(refSearch.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={refSearch}
          borderRadius={20}
          placeholder="Search movies..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
