import React from "react";
import DataTable from "./component/DataTable";


// Parent Component
const App = () => {
  // Array ko yahan define karein
  const products = [
    { id: 1, name: "Product A", price: "$10" },
    { id: 2, name: "Product B", price: "$20" },
    { id: 3, name: "Product C", price: "$30" },
  ];

  return (
    <div>
      <h1>Product List</h1>
      {/* Array ko Table Component ko pass kar rahe hain */}
      <DataTable data={products} />
    </div>
  );
};

export default App;
