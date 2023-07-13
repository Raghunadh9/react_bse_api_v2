import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { db } from "../config";
import { ref, onValue, remove, query, equalTo, get } from "firebase/database";
import GetDetailsComponent from "./GetDetailsComponent";
import GetVolume from "./GetVolume";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [searchStockName, setSearchStockName] = useState("");
  const [bseData, setBseData] = useState([]);
  const [bseapisearchresponse, setBseapisearchresponse] = useState("");
  const { compName, name, id } = useParams();
  useEffect(() => {
    const submitHandler = async () => {
      try {
        const res = await fetch(
          "https://bsestorage-75b05-default-rtdb.firebaseio.com/reactBse.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ dataName: id }),
          }
        );

        if (res.ok) {
          navigate("/superhighvolumestocks");
        }
      } catch (err) {
        console.log(err);
      }
    };
    submitHandler();
  }, []);

  useEffect(() => {
    const starCountRef = ref(db, "reactBse/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));

      // Remove duplicates based on the "dataName" property
      const uniquePosts = [];
      const uniqueDataNames = new Set();

      newPosts.forEach((post) => {
        if (!uniqueDataNames.has(post.dataName)) {
          uniqueDataNames.add(post.dataName);
          uniquePosts.push(post);
        }
      });

      setData(uniquePosts);

      const fetchDataBse = async () => {
        let requests = uniquePosts.map((fruit) =>
          axios.get(
            `https://api.bseindia.com/BseIndiaAPI/api/EQPeerGp/w?scripcode=${fruit.dataName}&scripcomare=`
          )
        );
        Promise.all(requests)
          .then((responses) => {
            const responseData = responses.map(
              (response) => response.data.Table[0]
            );
            setBseData(responseData);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      fetchDataBse();
    });
  }, []);

  const changeHandler = (e) => {
    setSearchStockName(e.target.value);
  };
  useEffect(() => {
    console.log("bseData", bseData);
  }, [bseData]);
  useEffect(() => {
    axios
      .get(
        `https://api.bseindia.com/Msource/90D/getQouteSearch.aspx?Type=EQ&text=${searchStockName}&flag=gq`
      )
      .then((res) => setBseapisearchresponse(res.data));
    console.log(bseapisearchresponse);
  }, [searchStockName]);

  return <div className="">Loading...</div>;
}

export default ProductPage;
