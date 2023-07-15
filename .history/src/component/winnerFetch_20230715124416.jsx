import useSWR from "swr";
import { useState } from "react";
import axios from "axios";
export const winnerFetch = (scrip_cd) => {
  const [result, setResult] = useState("");
  axios
    .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
    .then((res) => setResult(res.data.PBpcUC));
  return result;
};
