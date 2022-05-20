import { createContext, useContext } from "react";

const TableActionsContext = createContext();

export const useTableActionsContext = () => useContext(TableActionsContext);

const TableActionsContextProvider = props => {
  const { children, renderMenu } = props;
  return (
    <TableActionsContext.Provider value={renderMenu}>
      {children}
    </TableActionsContext.Provider>
  );
};

export default TableActionsContextProvider;
