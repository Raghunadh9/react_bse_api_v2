import axios from "axios";
import React, { useEffect, useState } from "react";

const GetDetailsComponent = ({ scrip_cd }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
      .then((res) => setTitle(res.data.PBpcUC))
      .catch((err) => console.log(err));
  }, [scrip_cd]);

  if (title === "hello") {
    return null; // Skip rendering this row
  }

  return title.toString();
};

export default GetDetailsComponent;
