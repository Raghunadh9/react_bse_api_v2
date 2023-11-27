import axios from "axios";
import { useEffect, useState } from "react";

export const getDetailsComponent = (scrip_cd) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
      .then((res) => setTitle(res.data.PBpcUC))
      .catch((err) => console.log(err));
  }, [scrip_cd]);

  return title.toString() === "5" ? "hidden" : title.toString();
};
