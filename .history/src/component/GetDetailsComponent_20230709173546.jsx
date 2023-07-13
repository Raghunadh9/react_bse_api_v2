import axios from "axios";
import React, { useEffect, useState } from "react";
// import useSWR from "swr";
const GetDetailsComponent = ({ scrip_cd }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
      )
      .then((res) => setTitle(res.data.PBpcUC))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {title}
      {" %"}
    </div>
  );
};

export default GetDetailsComponent;
