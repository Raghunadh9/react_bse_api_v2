import { useState, useEffect } from "react";
import axios from "axios";

const useScripDetails = (scrip_cd) => {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    axios
      .get(`https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`)
      .then((res) => setTitle(res.data.PBpcUC))
      .catch((err) => console.log(err));
  }, [scrip_cd]);

  return title !== "5" ? title : null;
};

export default useScripDetails;
