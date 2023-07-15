import { useState } from "react";
import axios from "axios";
export const getDetailsComponent = (scrip_cd) => {
  axios
    .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
    .then((res) => res.data.PBpcUC)

    .catch((err) => console.log(err));
};
