import React from "react";
// import useSWR from "swr";
const GetDetailsComponent = ({ scrip_cd }) => {
  const { data, error, isLoading } = useSWR(
    `https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return data.PBpcUC;
};

export default GetDetailsComponent;
