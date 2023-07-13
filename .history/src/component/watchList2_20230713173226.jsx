import React from "react";

const watchList2 = () => {
  return (
    <div>
      <h1 className="font-bold mb-2 text-2xl">Watchlist 2</h1>
      <table className="table ">
        <thead
          style={{
            background: "linear-gradient(270deg,#20bf55,#01baef)",
            position: "sticky",
            top: 0,
            color: "#fff",
          }}
        >
          <tr>
            <th className="border border-black ">Drag</th>

            <th className="border border-black ">S.No</th>
            <th className="border border-black ">Name</th>
            <th className="border border-black ">LTP</th>
            <th className="border border-black ">Change</th>
            <th className="border border-black ">Tr.v</th>
            <th className="border border-black ">Volume</th>
            <th className="border border-black ">Max.Uc</th>
            <th className="border border-black ">Delete</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default watchList2;
