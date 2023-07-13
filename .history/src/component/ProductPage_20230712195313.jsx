import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  return <div className="">Loading...</div>;
}

export default ProductPage;
