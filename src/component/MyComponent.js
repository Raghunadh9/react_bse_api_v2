// MyComponent.js
import React from "react";
import useSWR from "swr";
import Winner from "./Winner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MyComponent = () => {
  const { data, error, isLoading } = useSWR(
    "https://bse-api-server.vercel.app/",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Winner data={data} />;
};

export default MyComponent;
