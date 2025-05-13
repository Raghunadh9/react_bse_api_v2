import axios from "axios";
import React, { useEffect, useState } from "react";

const GetDetailsComponent = ({ scrip_cd }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5005/getDetails?scripcode=${scrip_cd}`)
      .then((res) => setTitle(res.data.PBpcUC))
      .catch((err) => console.log(err));
  }, [scrip_cd]);

  return title.toString() === "5" ? "5" : title;
};

export default GetDetailsComponent;
