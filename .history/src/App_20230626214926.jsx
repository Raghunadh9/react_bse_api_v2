import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchThem = async () => {
      const result = await fetchAllData();
    };
  }, [third]);

  return <div>App</div>;
};

export default App;
