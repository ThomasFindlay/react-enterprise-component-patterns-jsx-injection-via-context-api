import TableRow from "./components/TableRow";

const Table = props => {
  const { options } = props;
  const { headers, rows } = options;
  return (
    <table>
      <thead>
        <TableRow header columns={headers} />
      </thead>
      <tbody>
        {rows.map(row => {
          return <TableRow row={row} columns={row.columns} key={row.id} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
