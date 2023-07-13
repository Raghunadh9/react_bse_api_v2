import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className="w-full p-4 flex"
      style={{ background: "linear-gradient(270deg,#20bf55,#01baef)" }}
    >
      <div className="flex-1">
        <Link to={"/"}>
          <div className="flex-col">
            <img src="public/logo1.png" className="w-10 h-10" />
            <span className="font-bold text-xl text-white">Golden Stocks.</span>
          </div>
        </Link>
      </div>
      <div className="flex-2">
        <Link to={"/highVolumewp"}>
          {" "}
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:py-2 hover:border-white mr-2">
            High Volume %
          </button>
        </Link>
        <Link to={"/50-500"}>
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:py-2 hover:border-white mr-2">
            Rs. 50-500
          </button>
        </Link>
        <Link to={"/"}>
          {" "}
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:py-2 hover:border-white mr-2">
            Percentage
          </button>
        </Link>
        <Link to={"/volume"}>
          {" "}
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6 hover:border hover:py-2 hover:border-white mr-2">
            Volume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
