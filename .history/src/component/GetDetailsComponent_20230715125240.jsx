import React from "react";
import useSWR from "swr";
const GetDetailsComponent = ({ scrip_cd }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`,
    fetcher
  );
  return data.PBpcUC.toString();
};
export default GetDetailsComponent;
