import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchThem = async () => {
      const result = await fetchAllData();
      setData(result);
    };
    fetchThem();
  }, []);

  return <div>{}</div>;
};

export default App;
