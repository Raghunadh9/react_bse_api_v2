// Create a new file, e.g., useScripDetails.js
import { useState, useEffect } from "react";
import axios from "axios";

const useScripDetails = (scrip_cd) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
      .then((res) => setTitle(res.data.PBpcUC))
      .catch((err) => console.log(err));
  }, [scrip_cd]);

  return title.toString() === "5" ? "hidden" : title.toString();
};

export default useScripDetails;
