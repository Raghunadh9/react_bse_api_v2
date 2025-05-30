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
          <div className="">
            <img src="/logo1.png" className="w-5 h-5" />
            <span className="font-bold text-xl text-white">Golden Stocks.</span>
          </div>
        </Link>
      </div>
      <div className="flex-2">
        {/* <Link to={"/superhighvolumestocks"}>
          {" "}
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:bg-transparent hover:border-white mr-2 hover:text-white">
            Super High Volume Stocks
          </button>
        </Link> */}

<Link to={"/breakout-stocks-only"}>
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:bg-transparent hover:border-white mr-2 hover:text-white">
            Breakout stocks
          </button>
        </Link>

        <Link to={"/50-500"}>
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:bg-transparent hover:border-white mr-2 hover:text-white">
            Rs. 50-500
          </button>
        </Link>
        <Link to={"/"}>
          {" "}
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:bg-transparent hover:border-white mr-2 hover:text-white">
            Percentage
          </button>
        </Link>
        <Link to={"/volume"}>
          {" "}
          <button className="px-5 py-1 rounded-md bg-white text-black hover:px-6  hover:border hover:bg-transparent hover:border-white mr-2 hover:text-white">
            Volume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
