import TableColumnActions from "./TableColumnActions";

const TableColumn = props => {
  const { row, column } = props;

  return (
    <td className="px-4 py-1">
      {column.column === "Actions" ? (
        <TableColumnActions row={row} column={column} />
      ) : (
        column.text
      )}
    </td>
  );
};

export default TableColumn;
