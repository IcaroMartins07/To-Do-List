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
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-options">
        <div>
          <p>Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos</option>
            <option value="completed">Completados</option>
            <option value="incomplete">Incompletos</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabetica</p>
          <button onClick={() => setOrder("a-z")}>A-Z</button>
          <button onClick={() => setOrder("z-a")}>Z-A</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
