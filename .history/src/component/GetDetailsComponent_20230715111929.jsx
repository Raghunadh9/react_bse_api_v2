import React from "react";
import useSWR from "swr";
const GetDetailsComponent = ({ scrip_cd }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (data.PBpcUC === "5") {
    return "hidden";
  }
  return JSON.stringify(data.PBpcUC);
};

export default GetDetailsComponent;
