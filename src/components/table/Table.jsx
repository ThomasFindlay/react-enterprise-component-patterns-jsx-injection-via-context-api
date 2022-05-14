import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';

const Table = (props) => {
  const { options, onViewData, onEditData, onDeleteData } = props;
  const { headers, rows } = options;
  return (
    <table>
      <thead>
        <TableRow header columns={headers} />
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <TableRow
              columns={row.columns}
              key={row.id}
              onViewData={onViewData}
              onEditData={onEditData}
              onDeleteData={onDeleteData}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
