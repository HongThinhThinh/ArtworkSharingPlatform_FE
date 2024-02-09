import React from "react";
import UserTable from "../../../../component/table/TableDashboard";

function Mode() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="mode"
    >
      <UserTable />
    </div>
  );
}

export default Mode;
