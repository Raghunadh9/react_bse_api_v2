import React, { useEffect, useState } from "react";

const GetVolume = ({ scrip_cd }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.bseindia.com/BseIndiaAPI/api/SecurityPosition/w?quotetype=EQ&scripcode=${scrip_cd}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>GetVolume</div>;
};

export default GetVolume;
