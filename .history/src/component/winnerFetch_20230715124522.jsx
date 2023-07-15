import axios from "axios";
import { useState } from "react";
export const winnerFetch = (scrip_cd) => {
  const [title, setTitle] = useState("");
  axios
    .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
    .then((res) => setTitle(res.data.PBpcUC))
    .catch((err) => console.log(err));
  return title;
};
