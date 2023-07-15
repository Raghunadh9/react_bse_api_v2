import { useState } from "react";
import axios from "axios";
export const getDetailsComponent = (scrip_cd) => {
  const [title, setTitle] = useState("");
  axios
    .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
    .then((res) => setTitle(res.data.PBpcUC))

    .catch((err) => console.log(err));

  return title.toString();
};
