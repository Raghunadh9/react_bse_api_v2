// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useQuery, useMutation, useQueryClient } from "react-query";

// import "reactjs-popup/dist/index.css";
// import { useNavigate } from "react-router-dom";
// import { useMutation } from "react-query";
// import { addTodo } from "../api/todoApis";

// function ProductPage() {
//   const navigate = useNavigate();
//   const queryClient = useQueryClient();
//   const { id } = useParams();

//   useEffect(() => {
//     // const submitHandler = async () => {

//     //   try {
//     //     const res = await fetch(
//     //       "https://bsestorage-75b05-default-rtdb.firebaseio.com/reactBse.json",
//     //       {
//     //         method: "POST",
//     //         headers: {
//     //           "Content-Type": "application/json",
//     //         },
//     //         body: JSON.stringify({ dataName: id }),
//     //       }
//     //     );

//     //     if (res.ok) {
//     //       navigate("/superhighvolumestocks");
//     //     }
//     //   } catch (err) {
//     //     console.log(err);
//     //   }
//     // };
//     // submitHandler();
//     const addTodoMutuation = useMutation(addTodo, {
//       onSuccess: () => {
//         queryClient.invalidateQueries("todos");
//       },
//     });
//     const handleSubmit = async () => {
//       addTodoMutuation.mutate({ scrip_code: id });
//     };
//   }, []);
//   return <div className="">Loading...</div>;
// }

// export default ProductPage;
import React from "react";

const ProductPage = () => {
  return <div>ProductPage</div>;
};

export default ProductPage;
