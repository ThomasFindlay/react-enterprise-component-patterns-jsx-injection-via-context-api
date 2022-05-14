import { useState } from "react";
import "./App.css";
import { tableOptions } from "./tableOptions";
import Table from "./components/table/Table";

function App() {
  const onViewData = column => {
    alert(`On View Column ${column.column}`);
  };
  const onEditData = column => {
    alert(`On Edit Column ${column.column}`);
  };
  const onDeleteData = column => {
    alert(`On Delete Column ${column.column}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center font-semibold text-lg">
        React Enterprise Component Patterns - JSX Injection via Context API
      </h1>
      <main className="mt-8 flex justify-center">
        <Table
          options={tableOptions}
          onViewData={onViewData}
          onEditData={onEditData}
          onDeleteData={onDeleteData}
        />
      </main>
    </div>
  );
}

export default App;
