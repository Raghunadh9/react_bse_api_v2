import React, { useEffect, useState } from "react";
import "../index.css";
import useSWR from "swr";
import GetDetailsComponent from "./GetDetailsComponent";
import Popup from "reactjs-popup";
const Home = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://bse-api-server.vercel.app/",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div className="">{message}</div>;
};

export default Home;
