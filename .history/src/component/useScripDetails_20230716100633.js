// useScripDetails.js
import { useState, useEffect } from "react";
import axios from "axios";

const useScripDetails = (scrip_cd) => {
  const [title, setTitle] = useState(null); // Initialize with null instead of an empty string

  useEffect(() => {
    axios
      .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
      .then((res) => setTitle(res.data.PBpcUC))
      .catch((err) => console.log(err));
  }, [scrip_cd]);

  return title !== "5" ? title : null; // Return null instead of "hidden"
};

export default useScripDetails;
