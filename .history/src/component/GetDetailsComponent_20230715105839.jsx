import axios from "axios";
import React, { useEffect, useState } from "react";
// import useSWR from "swr";
const GetDetailsComponent = ({ scrip_cd }) => {
  axios
    .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
    .then((res) => res.data.PBpcUC)
    .catch((err) => console.log(err));
};

export default GetDetailsComponent;
