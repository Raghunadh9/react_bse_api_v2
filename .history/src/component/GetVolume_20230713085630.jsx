import axios from "axios";
import React, { useEffect, useState } from "react";

const GetVolume = ({ scrip_cd }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.bseindia.com/BseIndiaAPI/api/SecurityPosition/w?quotetype=EQ&scripcode=${scrip_cd}`
      )
      .then((res) =>
        setTitle(
          res.data
            .split(`","`, 2)[1]
            .replace(`"`, "")
            .replace("QtyTraded:", "")
            .replace(`"`, "")
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return <div>{title}</div>;
};

export default GetVolume;
