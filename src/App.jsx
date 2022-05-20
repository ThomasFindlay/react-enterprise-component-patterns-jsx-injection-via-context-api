import React, { useState } from "react";
import "./App.css";
import { tableOptions } from "./tableOptions";
import Table from "./components/table/Table";
import TableActionsContextProvider from "./components/table/TableActionsContext";

function App() {
  const onViewData = ({ row, column }) => {
    alert(`On View Column ${column.column}`);
  };
  const onEditData = ({ row, column }) => {
    alert(`On Edit Column ${column.column}`);
  };
  const onDeleteData = ({ row, column }) => {
    alert(`On Delete Column ${column.column}`);
  };

  const reportUser = ({ row, column }) => {
    alert(`On Report User`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center font-semibold text-lg">
        React Enterprise Component Patterns - JSX Injection via Context API
      </h1>
      <main className="mt-8 flex justify-center">
        <TableActionsContextProvider
          renderMenu={({
            row,
            column,
            styles,
            closeMenu,
            renderViewMenuItem,
            renderEditMenuItem,
            renderDeleteMenuItem,
            renderDefaultMenu,
          }) => {
            switch (row.id) {
              case "1": {
                return [renderViewMenuItem()];
              }
              case "2": {
                return [
                  renderViewMenuItem(),
                  renderEditMenuItem(),
                  renderDeleteMenuItem(),
                  <React.Fragment key="menu-item-report">
                    <hr className="my-2" />
                    <li>
                      <button
                        className={styles.actionsMenuButton}
                        onClick={() => {
                          closeMenu();
                          reportUser({ row, column });
                        }}
                      >
                        Report
                      </button>
                    </li>
                  </React.Fragment>,
                ];
              }
              default: {
                return renderDefaultMenu();
              }
            }
          }}
        >
          <Table
            options={tableOptions}
            onViewData={onViewData}
            onEditData={onEditData}
            onDeleteData={onDeleteData}
          />
        </TableActionsContextProvider>
      </main>
    </div>
  );
}

export default App;
