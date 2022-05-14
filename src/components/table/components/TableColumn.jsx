import TableColumnActions from './TableColumnActions';

const TableColumn = (props) => {
  const { column, onViewData, onEditData, onDeleteData } = props;

  return (
    <td className="px-4 py-1">
      {column.column === 'Actions' ? (
        <TableColumnActions
          column={column}
          onViewData={onViewData}
          onEditData={onEditData}
          onDeleteData={onDeleteData}
        />
      ) : (
        column.text
      )}
    </td>
  );
};

export default TableColumn;
