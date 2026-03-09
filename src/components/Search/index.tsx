import { Input, Separator, Subtitle } from "@/pages/HomePage/styles";

const Search = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) => {
  return (
    <Separator>
      <Subtitle>Pesquisar</Subtitle>
      <Input
        type="text"
        placeholder="Buscar tarefas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Separator>
  );
};

export default Search;
