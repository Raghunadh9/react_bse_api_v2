import React, { useEffect, useState } from "react";
import fetchAllData from "./lib";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchThem = async () => {
      const result = await fetchAllData();
      setData(result);
    };
    fetchThem();
  }, []);

  return (
    <div>
      {data.map((i, index) => (
        <div key={index}>{i.scrip_cd}</div>
      ))}
    </div>
  );
};

export default App;
