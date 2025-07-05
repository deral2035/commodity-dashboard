import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Example static data
    setData([
      { name: "Copper", current: "€8,410", lastMonth: "€8,690", oneYearAgo: "€8,890" },
      { name: "Steel", current: "€1,090", lastMonth: "€1,120", oneYearAgo: "€1,220" }
    ]);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Commodity Dashboard</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Commodity</th><th>Current</th><th>Last Month</th><th>1Y Ago</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              <td>{row.current}</td>
              <td>{row.lastMonth}</td>
              <td>{row.oneYearAgo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
