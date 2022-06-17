import TableHeader from "./TableHeader";
import TableColumn from "./TableColumn";

const TableRow = props => {
  const { row, columns, header } = props;
  const CellComponent = header ? TableHeader : TableColumn;
  return (
    <tr className="even:bg-gray-50 hover:bg-blue-50">
      {columns.map((column, idx) => {
        return <CellComponent key={idx} column={column} row={row} />;
      })}
    </tr>
  );
};

export default TableRow;
