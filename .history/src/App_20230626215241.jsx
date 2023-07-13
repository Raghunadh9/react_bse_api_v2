import React, { useEffect, useState } from "react";
import fetchAllData from "./lib";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchThem = async () => {
      axios
        .get(
          `https://api.bseindia.com/BseIndiaAPI/api/MktRGainerLoserData/w?GLtype=gainer&IndxGrp=AllMkt&IndxGrpval=AllMkt&orderby=all`
        )
        .then((res) => setData(res.data.Table));
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
