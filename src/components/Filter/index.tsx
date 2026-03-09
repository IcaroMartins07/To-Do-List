import { Button, FilterOptions, Paragraph, Select, Separator, Subtitle } from "@/pages/HomePage/styles";

const Filter = ({
  filter,
  setFilter,
  order,
  setOrder,
}: {
  filter: string;
  setFilter: (value: string) => void;
  order: string;
  setOrder: (value: string) => void;
}) => {
  return (
    <Separator>
      <Subtitle>Filtrar</Subtitle>
      <FilterOptions>
        <div>
          <Paragraph>Status</Paragraph>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="completed">Completados</option>
            <option value="incomplete">Incompletos</option>
          </Select>
        </div>
        <div>
          <Paragraph>Ordem Alfabetica</Paragraph>
          <Button onClick={() => setOrder("a-z")}>A-Z</Button>
          <Button onClick={() => setOrder("z-a")}>Z-A</Button>
        </div>
      </FilterOptions>
    </Separator>
  );
};

export default Filter;
